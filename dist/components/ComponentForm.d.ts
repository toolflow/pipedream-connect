import { DynamicProps, type FormContext } from "../hooks/form-context";
import type { ConfigurableProps, ConfiguredProps, V1Component } from "@pipedream/sdk";
export type ComponentFormProps<T extends ConfigurableProps, U = ConfiguredProps<T>> = {
    userId: string;
    component: V1Component<T>;
    configuredProps?: U;
    disableQueryDisabling?: boolean;
    propNames?: string[];
    onSubmit?: (ctx: FormContext<T>) => void | Promise<void>;
    onUpdateConfiguredProps?: (v: U) => void;
    onUpdateDynamicProps?: (dp: DynamicProps<T>) => void;
    hideOptionalProps?: boolean;
};
export declare function ComponentForm<T extends ConfigurableProps>(props: ComponentFormProps<T>): import("react/jsx-runtime").JSX.Element;
