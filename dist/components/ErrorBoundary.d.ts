import { Component, type ReactNode } from "react";
type Props = {
    children: ReactNode;
    fallback: (err: unknown) => ReactNode;
};
export declare class ErrorBoundary extends Component<Props> {
    state: {
        err: undefined;
    };
    static getDerivedStateFromError(err: unknown): {
        err: unknown;
    };
    render(): ReactNode;
}
export {};
