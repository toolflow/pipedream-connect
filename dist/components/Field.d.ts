import { FormContext } from "../hooks/form-context";
import { FormFieldContext } from "../hooks/form-field-context";
import { ConfigurableProp } from "@pipedream/sdk";
export type FieldProps<T extends ConfigurableProp> = {
    form: FormContext;
    field: FormFieldContext<T>;
};
export declare function Field<T extends ConfigurableProp>(props: FieldProps<T>): import("react/jsx-runtime").JSX.Element | null;
