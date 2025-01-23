import { FormContext } from "../hooks/form-context";
import { FormFieldContext } from "../hooks/form-field-context";
import { ConfigurableProp, ConfigurableProps } from "@pipedream/sdk";
export type ControlProps<T extends ConfigurableProps, U extends ConfigurableProp> = {
    field: FormFieldContext<U>;
    form: FormContext<T>;
};
export declare function Control<T extends ConfigurableProps, U extends ConfigurableProp>(props: ControlProps<T, U>): import("react/jsx-runtime").JSX.Element;
