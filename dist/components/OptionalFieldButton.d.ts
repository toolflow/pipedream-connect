import { ConfigurableProp } from "@pipedream/sdk";
export type OptionalFieldButtonProps = {
    prop: ConfigurableProp;
    enabled: boolean;
    onClick: () => void;
};
export declare const OptionalFieldButton: (props: OptionalFieldButtonProps) => import("react/jsx-runtime").JSX.Element;
