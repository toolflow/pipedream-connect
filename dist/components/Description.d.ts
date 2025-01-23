import { ConfigurableProp, ConfigurableProps } from "@pipedream/sdk";
import { FormFieldContext } from "../hooks/form-field-context";
import { FormContext } from "../hooks/form-context";
export type DescriptionProps<T extends ConfigurableProps, U extends ConfigurableProp> = {
    markdown?: string;
    field: FormFieldContext<U>;
    form: FormContext<T>;
};
export declare function Description<T extends ConfigurableProps, U extends ConfigurableProp>(props: DescriptionProps<T, U>): import("react/jsx-runtime").JSX.Element | null;
