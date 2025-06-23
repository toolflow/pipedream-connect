import type { CSSProperties, ReactNode } from "react";
import { FormFieldContext, useFormFieldContext } from "../hooks/form-field-context";
import { useCustomize } from "../hooks/customization-context";
import { ConfigurableProp } from "@pipedream/sdk";

type ControlHttpRequestProps = {
  component?: React.ComponentType<{
    id: string;
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    required: boolean;
    baseStyles: CSSProperties;
    formFieldContext: FormFieldContext<ConfigurableProp>;
  }>;
};

export function ControlHttpRequest(props: ControlHttpRequestProps) {
  const formFieldContextProps = useFormFieldContext();
  const { id, onChange, prop, value } = formFieldContextProps;
  const { getProps, theme } = useCustomize();

  const baseStyles: CSSProperties = {
    color: theme.colors.neutral60,
    display: "block",
    border: "1px solid",
    borderColor: theme.colors.neutral20,
    padding: 6,
    width: "100%",
    minWidth: "400px",
    minHeight: "120px",
    borderRadius: theme.borderRadius,
    gridArea: "control",
    boxShadow: theme.boxShadow.input,
    fontFamily: "monospace",
    fontSize: "0.875rem",
    resize: "vertical",
  };

  const textareaProps = {
    id,
    name: prop.name,
    value: value ?? "",
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => onChange(e.target.value),
    required: !prop.optional,
    baseStyles,
    formFieldContext: formFieldContextProps,
  };

  if (props.component) {
    const CustomComponent = props.component;
    return (
      <CustomComponent
        {...textareaProps}
        {...getProps("controlHttpRequest", baseStyles, formFieldContextProps)}
      />
    );
  }

  return (
    <textarea
      {...textareaProps}
      {...getProps("controlHttpRequest", baseStyles, formFieldContextProps)}
      placeholder="Enter HTTP request configuration (JSON format)"
      data-lpignore="true"
      data-1p-ignore="true"
    />
  );
} 