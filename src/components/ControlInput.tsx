import type { CSSProperties, ReactNode } from "react";
import {
  FormFieldContext,
  useFormFieldContext,
} from "../hooks/form-field-context";
import { useCustomize } from "../hooks/customization-context";
import { ConfigurableProp } from "@pipedream/sdk";

type ControlInputProps = {
  customInput?: ReactNode;
  // Add render props pattern for full control
  component?: React.ComponentType<{
    id: string;
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    type: HTMLInputElement["type"];
    min?: number;
    max?: number;
    required: boolean;
    autoComplete: string;
    placeholder: string;
    baseStyles: CSSProperties;
    // Pass through the full context in case it's needed
    formFieldContext: FormFieldContext<ConfigurableProp>;
  }>;
};

export function ControlInput(props: ControlInputProps) {
  const formFieldContextProps = useFormFieldContext();
  const { id, onChange, prop, value } = formFieldContextProps;
  const { getProps, theme } = useCustomize();
  console.log("PROPS ControlInput", props);

  const baseStyles: CSSProperties = {
    color: theme.colors.neutral60,
    display: "block",
    border: "1px solid",
    borderColor: theme.colors.neutral20,
    padding: 6,
    width: "100%",
    minWidth: "400px",
    borderRadius: theme.borderRadius,
    gridArea: "control",
    boxShadow: theme.boxShadow.input,
  };

  let autoComplete = "off";

  let inputType: HTMLInputElement["type"] = "text";
  let toOnChangeValue = (v: string): typeof value => v;
  switch (prop.type) {
    case "string":
      break;
    case "integer":
      inputType = "number"; // XXX may not want this... inputmode="numeric", etc.
      toOnChangeValue = (v) => (v ? parseInt(v) : undefined);
      break;
    default:
      throw new Error("unexpected prop.type for ControlInput: " + prop.type);
  }

  // TODO need to figure out reifying values that are saved though on this path
  if ("secret" in prop && prop.secret) {
    inputType = "password";
    autoComplete = "new-password"; // in chrome, this is better than "off" here
  }

  // if (props.customInput) {
  //   return <>{props.customInput}</>;
  // }

  const inputProps = {
    id,
    name: prop.name,
    value: value ?? "",
    onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
      onChange(toOnChangeValue(e.target.value)),
    type: inputType,
    min: "min" in prop ? prop.min : undefined,
    max: "max" in prop ? prop.max : undefined,
    required: !prop.optional,
    autoComplete,
    placeholder: "test",
    baseStyles,
    formFieldContext: formFieldContextProps,
  };

  if (props.component) {
    const CustomComponent = props.component;
    console.log(getProps("controlInput", baseStyles, formFieldContextProps));
    return (
      <CustomComponent
        {...inputProps}
        {...getProps("controlInput", baseStyles, formFieldContextProps)}
      />
    );
  }

  return (
    // <input
    //   id={id}
    //   type={inputType}
    //   name={prop.name}
    //   value={value ?? ""}
    //   onChange={(e) => onChange(toOnChangeValue(e.target.value))}
    //   {...getProps("controlInput", baseStyles, formFieldContextProps)}
    //   min={"min" in prop ? prop.min : undefined}
    //   max={"max" in prop ? prop.max : undefined}
    //   placeholder="test"
    //   autoComplete={autoComplete}
    //   data-lpignore="true"
    //   data-1p-ignore="true"
    //   required={!prop.optional}
    // />
    <input
      {...inputProps}
      {...getProps("controlInput", baseStyles, formFieldContextProps)}
      data-lpignore="true"
      data-1p-ignore="true"
    />
  );
}
