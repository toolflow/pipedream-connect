import { Suspense } from "react";
import type {
  CSSProperties, FormEventHandler,
} from "react";
import { useCustomize } from "../hooks/customization-context";
import {
  useFormContext,
  skippablePropTypes,
} from "../hooks/form-context";
import { InternalField } from "./InternalField";
import { Alert } from "./Alert";
import { ErrorBoundary } from "./ErrorBoundary";
import { ControlSubmit } from "./ControlSubmit";
import type { ConfigurableProp } from "@pipedream/sdk";
import { OptionalFieldButton } from "./OptionalFieldButton";

export function InternalComponentForm() {
  const formContext = useFormContext();
  const {
    configurableProps,
    dynamicPropsQueryIsFetching,
    isValid,
    optionalPropIsEnabled,
    optionalPropSetEnabled,
    getOptionalPropValue,
    props: formContextProps,
    setSubmitting,
  } = formContext;

  const {
    hideOptionalProps, onSubmit,
  } = formContextProps;

  const {
    getComponents, getProps, theme,
  } = useCustomize();
  const { OptionalFieldButton } = getComponents();
  const baseStyles: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
  };

  const baseOptionalFieldsStyles: CSSProperties = {
    display: "flex",
    flexWrap: "wrap",
    gap: "0.375rem",
  };

  const baseHeadingStyles: CSSProperties = {
    fontWeight: 600,
    textTransform: "capitalize",
    color: theme.colors.neutral60,
    fontSize: "0.875rem",
    lineHeight: "1.375",
    margin: "0 0 0.5rem 0",
  };

  const _onSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    if (onSubmit) {
      e.preventDefault();

      if (isValid) {
        setSubmitting(true);
        try {
          await onSubmit(formContext);
        } finally {
          setSubmitting(false);
        }
      }
    }
  };

  const shownProps: [ConfigurableProp, number][] = [];
  const optionalProps: [ConfigurableProp, boolean][] = [];
  for (const [idx, prop] of configurableProps.entries()) {
    if (prop.optional) {
      optionalProps.push([prop, optionalPropIsEnabled(prop)]);
      shownProps.push([prop, idx]);
    } else if (!prop.hidden) {
      shownProps.push([prop, idx]);
    }
  }

  // TODO improve the error boundary thing (use default Alert component maybe)
  return (
    <ErrorBoundary fallback={(err) => <p style={{
      color: "red",
    }}>Error: {err && typeof err === "object" && "message" in err && typeof err.message === "string"
        ? err.message
        : "Unknown"}</p>}>
      <Suspense fallback={<p>Loading form...</p>}>
        <form {...getProps("componentForm", baseStyles, formContextProps)} onSubmit={_onSubmit}>
          {shownProps.map(([
            prop,
            idx,
          ]) => {
            if (prop.type === "alert") {
              return <Alert key={prop.name} prop={prop} />;
            }
            return <InternalField key={prop.name} prop={prop} idx={idx} />;
          })}
          {dynamicPropsQueryIsFetching && <p>Loading dynamic props...</p>}
          {onSubmit && <ControlSubmit form={formContext} />}
        </form>
      </Suspense>
    </ErrorBoundary>
  );
}
