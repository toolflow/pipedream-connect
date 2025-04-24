import { Suspense, useState, useEffect, useRef } from "react";
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
    setConfiguredProp,
  } = formContext;

  const {
    hideOptionalProps, onSubmit, overrideProps,
  } = formContextProps;

  const {
    getComponents, getProps, theme,
  } = useCustomize();
  const { OptionalFieldButton, LoaderComponent, DynamicLoaderComponent, OptionalFieldsContainer, Alert: CustomAlert, OverrideField } = getComponents();
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

  const [optionalFieldsExpanded, setOptionalFieldsExpanded] = useState(false);

  // Get the current app from configurableProps
  const appProp = configurableProps.find((prop: ConfigurableProp) => prop.type === "app");
  const currentApp = appProp?.app;

  const overridesSetRef = useRef(false);

  useEffect(() => {
 

    if (!overridesSetRef.current && overrideProps && currentApp && overrideProps[currentApp]) {
      const appOverrides = overrideProps[currentApp];

      const overridesToSet = Object.entries(appOverrides).map(([propName, value]) => {
        const propIndex = configurableProps.findIndex((p: ConfigurableProp) => p.name === propName);
        return { propName, propIndex, value };
      }).filter(({ propIndex }) => propIndex !== -1);


      const updates = overridesToSet.reduce((acc, { propName, value }) => {
        acc[propName] = value;
        return acc;
      }, {} as Record<string, any>);

      if (formContextProps.onUpdateConfiguredProps) {
        const newConfiguredProps = {
          ...formContext.configuredProps,
          ...updates
        };
        formContextProps.onUpdateConfiguredProps(newConfiguredProps);
      }
      
      overridesSetRef.current = true;
    }
  }, [currentApp, overrideProps, configurableProps]);

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
    // Skip props that are overridden
    const shouldHide = currentApp && 
      overrideProps?.[currentApp]?.[prop.name] !== undefined;

    if (shouldHide) {
      continue;
    }

    if (prop.optional) {
      optionalProps.push([prop, optionalPropIsEnabled(prop)]);
      shownProps.push([prop, idx]);
    } else if (!prop.hidden) {
      shownProps.push([prop, idx]);
    }
  }

  return (
    <ErrorBoundary fallback={(err) => (
      <p style={{ color: "red" }}>
        Error: {err && typeof err === "object" && "message" in err && typeof err.message === "string"
          ? err.message
          : "Unknown"}
      </p>
    )}>
      <Suspense fallback={<LoaderComponent />}>
        <form {...getProps("componentForm", baseStyles, formContextProps)} onSubmit={_onSubmit}>
          {/* Required props */}
          {shownProps.filter(([prop]) => !prop.optional).map(([prop, idx]) => {
            if (prop.type === "alert") {
              return <CustomAlert key={prop.name} prop={prop} />;
            }
            return <InternalField key={prop.name} prop={prop} idx={idx} />;
          })}

          {/* Optional props in accordion */}
          {!!OptionalFieldsContainer && shownProps.some(([prop]) => prop.optional) ? (
            <OptionalFieldsContainer
              baseStyles={baseOptionalFieldsStyles}
              title="Optional Fields"
              expanded={optionalFieldsExpanded}
              onToggle={() => setOptionalFieldsExpanded(!optionalFieldsExpanded)}
            >
              {optionalFieldsExpanded && shownProps
                .filter(([prop]) => prop.optional)
                .map(([prop, idx]) => (
                  <InternalField key={prop.name} prop={prop} idx={idx} />
                ))}
            </OptionalFieldsContainer>
          ) : null}

          {dynamicPropsQueryIsFetching && <DynamicLoaderComponent />}
          {onSubmit && <ControlSubmit form={formContext} />}

          {currentApp && overrideProps?.[currentApp] && Object.entries(overrideProps[currentApp]).map(([propName, value]) => {
            const prop = configurableProps.find((p: ConfigurableProp) => p.name === propName);
            if (prop) {
              return <OverrideField key={propName} prop={prop} value={value} appName={currentApp} />;
            }
            return null;
          })}
        </form>
      </Suspense>
    </ErrorBoundary>
  );
}
