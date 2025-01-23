import { AppResponse, V1Component } from "@pipedream/sdk";
type SelectComponentProps = {
    app?: Partial<AppResponse> & {
        name_slug: string;
    };
    componentType?: "action" | "trigger";
    value?: Partial<V1Component> & {
        key: string;
    };
    onChange?: (component?: V1Component) => void;
};
export declare function SelectComponent({ app, componentType, value, onChange, }: SelectComponentProps): import("react/jsx-runtime").JSX.Element;
export {};
