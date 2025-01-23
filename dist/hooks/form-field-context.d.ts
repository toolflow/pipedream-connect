import type { AppResponse, ConfigurableProp, ConfigurablePropApp, PropValue } from "@pipedream/sdk";
export type FormFieldContextExtra<T extends ConfigurableProp> = T extends ConfigurablePropApp ? {
    app?: AppResponse;
} : Record<string, never>;
export type FormFieldContext<T extends ConfigurableProp> = {
    id: string;
    prop: T;
    idx: number;
    value: PropValue<T["type"]> | undefined;
    onChange: (value: PropValue<T["type"]> | undefined) => void;
    extra: FormFieldContextExtra<T>;
};
export declare const FormFieldContext: import("react").Context<FormFieldContext<any> | undefined>;
export declare const useFormFieldContext: <T extends ConfigurableProp>() => FormFieldContext<T>;
