import { type ReactNode } from "react";
import type { ConfigurableProp, ConfigurableProps, ConfiguredProps, V1Component } from "@pipedream/sdk";
import type { ComponentFormProps } from "../components/ComponentForm";
import type { FormFieldContext } from "./form-field-context";
export type DynamicProps<T extends ConfigurableProps> = {
    id: string;
    configurableProps: T;
};
export type FormContext<T extends ConfigurableProps> = {
    component: V1Component<T>;
    configurableProps: T;
    configuredProps: ConfiguredProps<T>;
    dynamicProps?: DynamicProps<T>;
    dynamicPropsQueryIsFetching?: boolean;
    errors: Record<string, string[]>;
    fields: Record<string, FormFieldContext<ConfigurableProp>>;
    id: string;
    isValid: boolean;
    optionalPropIsEnabled: (prop: ConfigurableProp) => boolean;
    optionalPropSetEnabled: (prop: ConfigurableProp, enabled: boolean) => void;
    props: ComponentFormProps<T>;
    propsNeedConfiguring: string[];
    queryDisabledIdx?: number;
    registerField: <T extends ConfigurableProp>(field: FormFieldContext<T>) => void;
    setConfiguredProp: (idx: number, value: unknown) => void;
    setSubmitting: (submitting: boolean) => void;
    submitting: boolean;
    userId: string;
};
export declare const skippablePropTypes: string[];
export declare const FormContext: import("react").Context<FormContext<any> | undefined>;
export declare const useFormContext: () => FormContext<any>;
type FormContextProviderProps<T extends ConfigurableProps> = {
    children: ReactNode;
} & {
    props: ComponentFormProps<T>;
};
export declare const FormContextProvider: <T extends ConfigurableProps>({ children, props: formProps, }: FormContextProviderProps<T>) => import("react/jsx-runtime").JSX.Element;
export {};
