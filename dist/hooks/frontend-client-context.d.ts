import { type ReactNode, type FC } from "react";
import type { BrowserClient } from "@pipedream/sdk/browser";
export declare const useFrontendClient: () => any;
type FrontendClientProviderProps = {
    children: ReactNode;
    client: BrowserClient;
};
export declare const FrontendClientProvider: FC<FrontendClientProviderProps>;
export {};
