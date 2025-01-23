import type { ConfigurableProp } from "@pipedream/sdk";
type FieldInternalProps<T extends ConfigurableProp> = {
    prop: T;
    idx: number;
};
export declare function InternalField<T extends ConfigurableProp>({ prop, idx, }: FieldInternalProps<T>): import("react/jsx-runtime").JSX.Element;
export {};
