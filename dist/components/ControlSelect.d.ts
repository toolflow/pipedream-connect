import { Props as ReactSelectProps } from "react-select";
type ControlSelectProps<T> = {
    isCreatable?: boolean;
    options: {
        label: string;
        value: T;
    }[];
    selectProps?: ReactSelectProps;
    showLoadMoreButton?: boolean;
    onLoadMore?: () => void;
};
export declare function ControlSelect<T>({ isCreatable, options, selectProps, showLoadMoreButton, onLoadMore, }: ControlSelectProps<T>): import("react/jsx-runtime").JSX.Element;
export {};
