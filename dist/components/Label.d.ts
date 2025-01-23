import type { ConfigurableProp, ConfigurableProps } from "@pipedream/sdk";
import type { FormFieldContext } from "../hooks/form-field-context";
import { FormContext } from "../hooks/form-context";
export type LabelProps<T extends ConfigurableProps, U extends ConfigurableProp> = {
    text: string;
    field: FormFieldContext<U>;
    form: FormContext<T>;
};
export declare function Label<T extends ConfigurableProps, U extends ConfigurableProp>(props: LabelProps<T, U>): import("react/jsx-runtime").JSX.Element;
