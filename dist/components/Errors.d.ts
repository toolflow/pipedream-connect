import { FormContext } from "../hooks/form-context";
import type { FormFieldContext } from "../hooks/form-field-context";
import { ConfigurableProp, ConfigurableProps } from "@pipedream/sdk";
export type ErrorsProps<T extends ConfigurableProps, U extends ConfigurableProp> = {
    errors: string[];
    field: FormFieldContext<U>;
    form: FormContext<T>;
};
export declare function Errors<T extends ConfigurableProps, U extends ConfigurableProp>(props: ErrorsProps<T, U>): import("react/jsx-runtime").JSX.Element | null;
