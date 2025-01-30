import type { ConfigurablePropBoolean } from "@pipedream/sdk";
import { FormFieldContext, useFormFieldContext } from "../hooks/form-field-context";
import { useCustomize } from "../hooks/customization-context";
import type { CSSProperties } from "react";

type ControlBooleanProps = {
  component?: React.ComponentType<{
    id: string;
    checked: boolean;
    onChange: (checked: boolean) => void;
    required: boolean;
    baseStyles: CSSProperties;
    formFieldContext: FormFieldContext<ConfigurablePropBoolean>;
  }>;
};

export function ControlBoolean(props: ControlBooleanProps) {
  const formFieldContextProps = useFormFieldContext<ConfigurablePropBoolean>();
  const {
    id, value, onChange, prop
  } = formFieldContextProps;
  const { getProps } = useCustomize();
  const baseStyles: CSSProperties = {
    width: "16px",
    height: "16px",
    gridArea: "control",
    margin: "0 0.5rem 0 0",
  };

  const booleanProps = {
    id,
    checked: value ?? false,
    onChange: (e: boolean) => onChange(e),
    required: !prop.optional,
    baseStyles,
    formFieldContext: formFieldContextProps,
  };

  if (props.component) {
    const CustomComponent = props.component;
    return (
      <CustomComponent
        {...booleanProps}
        {...getProps("controlBoolean", baseStyles, formFieldContextProps)}
      />
    );
  }

  return <input id={id} type="checkbox" {...getProps("controlBoolean", baseStyles, formFieldContextProps)} checked={value ?? false} onChange={(e) => onChange(e.target.checked)} />;
}
