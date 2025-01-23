import { AppResponse } from "@pipedream/sdk";
type SelectAppProps = {
    value?: Partial<AppResponse> & {
        name_slug: string;
    };
    onChange?: (app?: AppResponse) => void;
};
export declare function SelectApp({ value, onChange, }: SelectAppProps): import("react/jsx-runtime").JSX.Element;
export {};
