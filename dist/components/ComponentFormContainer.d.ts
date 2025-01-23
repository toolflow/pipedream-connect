import { ConfigurableProps } from "@pipedream/sdk";
import { type ComponentFormProps } from "./ComponentForm";
type ComponentFormContainerProps<T extends ConfigurableProps> = Omit<ComponentFormProps<T>, "component"> & {
    componentKey: string;
};
export declare function ComponentFormContainer<T extends ConfigurableProps>(props: ComponentFormContainerProps<T>): import("react/jsx-runtime").JSX.Element;
export {};
