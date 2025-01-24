import { Account } from '@pipedream/sdk';
import { AccountsRequestResponse } from '@pipedream/sdk';
import { App } from '@pipedream/sdk';
import { AppResponse } from '@pipedream/sdk';
import { BrowserClient } from '@pipedream/sdk/browser';
import { ClassNamesConfig } from 'react-select';
import { Component } from 'react';
import { ComponentProps } from 'react';
import { ComponentRequestResponse } from '@pipedream/sdk';
import { ConfigurableProp } from '@pipedream/sdk';
import { ConfigurablePropAlert } from '@pipedream/sdk';
import { ConfigurablePropApp } from '@pipedream/sdk';
import { ConfigurableProps } from '@pipedream/sdk';
import { ConfiguredProps } from '@pipedream/sdk';
import { Context } from 'react';
import { CSSProperties } from 'react';
import { FC } from 'react';
import { FetchStatus } from '@tanstack/react-query';
import { GetAccountOpts } from '@pipedream/sdk';
import { GetAccountsResponse } from '@pipedream/sdk';
import { GetAppResponse } from '@pipedream/sdk';
import { GetAppsOpts } from '@pipedream/sdk';
import { GetComponentOpts } from '@pipedream/sdk';
import { GetComponentResponse } from '@pipedream/sdk';
import { GroupBase } from 'react-select';
import { JSX as JSX_2 } from 'react/jsx-runtime';
import { JSXElementConstructor } from 'react';
import { Props } from 'react-select';
import { PropValue } from '@pipedream/sdk';
import { QueryObserverResult } from '@tanstack/react-query';
import { ReactNode } from 'react';
import { RefetchOptions } from '@tanstack/react-query';
import { SelectComponentsConfig } from 'react-select';
import { StylesConfig } from 'react-select';
import { Theme as Theme_2 } from 'react-select';
import { UseQueryOptions } from '@tanstack/react-query';
import { V1Component } from '@pipedream/sdk';

export declare function Alert({ prop }: AlertProps): JSX_2.Element;

declare type AlertProps = {
    prop: ConfigurablePropAlert;
};

export declare type BaseReactSelectProps<Option, IsMulti extends boolean, Group extends GroupBase<Option>> = {
    components?: SelectComponentsConfig<Option, IsMulti, Group>;
    styles?: StylesConfig;
};

declare type ButtonProps = {
    onChange: () => void;
};

export declare type Colors = {
    primary: string;
    primary75: string;
    primary50: string;
    primary25: string;
    danger: string;
    dangerLight: string;
    neutral0: string;
    neutral5: string;
    neutral10: string;
    neutral20: string;
    neutral30: string;
    neutral40: string;
    neutral50: string;
    neutral60: string;
    neutral70: string;
    neutral80: string;
    neutral90: string;
};

export declare function ComponentForm<T extends ConfigurableProps>(props: ComponentFormProps<T>): JSX_2.Element;

export declare function ComponentFormContainer<T extends ConfigurableProps>(props: ComponentFormContainerProps<T>): JSX_2.Element;

declare type ComponentFormContainerProps<T extends ConfigurableProps> = Omit<ComponentFormProps<T>, "component"> & {
    componentKey: string;
};

declare type ComponentFormProps<T extends ConfigurableProps, U = ConfiguredProps<T>> = {
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

export declare type ComponentLibrary = typeof defaultComponents;

export declare function Control<T extends ConfigurableProps, U extends ConfigurableProp>(props: ControlProps<T, U>): JSX_2.Element;

export declare function ControlAny(): JSX_2.Element;

export declare function ControlApp({ app }: ControlAppProps): JSX_2.Element;

declare type ControlAppProps = {
    app: AppResponse;
};

export declare function ControlBoolean(): JSX_2.Element;

export declare function ControlInput(props: ControlInputProps): JSX_2.Element;

declare type ControlInputProps = {
    customInput?: ReactNode;
};

declare type ControlProps<T extends ConfigurableProps, U extends ConfigurableProp> = {
    field: FormFieldContext<U>;
    form: FormContext<T>;
};

export declare function ControlSelect<T>({ isCreatable, options, selectProps, showLoadMoreButton, onLoadMore, }: ControlSelectProps<T>): JSX_2.Element;

declare type ControlSelectProps<T> = {
    isCreatable?: boolean;
    options: {
        label: string;
        value: T;
    }[];
    selectProps?: Props;
    showLoadMoreButton?: boolean;
    onLoadMore?: () => void;
};

export declare function ControlSubmit(props: ControlSubmitProps): JSX_2.Element;

declare type ControlSubmitProps = {
    form: FormContext;
};

export declare type CustomClassNamesConfig = {
    [K in keyof CustomizableProps]?: string | CustomClassNamesFn<K>;
} & {
    [K in keyof ReactSelectComponents]?: ClassNamesConfig;
};

export declare type CustomClassNamesFn<K extends keyof CustomizableProps> = ((opts: CustomizationOpts<CustomizableProps[K]>) => string);

export declare type CustomComponents<Option, IsMulti extends boolean, Group extends GroupBase<Option>> = {
    [K in keyof typeof defaultComponents]: typeof defaultComponents[K];
} & {
    [K in keyof ReactSelectComponents]: SelectComponentsConfig<Option, IsMulti, Group>;
} & {
    ControlInput: typeof ControlInput;
};

export declare type CustomComponentsConfig<T, U extends boolean, V extends GroupBase<T>> = Partial<CustomComponents<T, U, V>>;

export declare type CustomizableProps = {
    componentForm: ComponentProps<typeof ComponentForm>;
    connectButton: ComponentProps<typeof ControlApp> & FormFieldContext<ConfigurableProp>;
    controlAny: ComponentProps<typeof ControlAny> & FormFieldContext<ConfigurableProp>;
    controlApp: ComponentProps<typeof ControlApp> & FormFieldContext<ConfigurableProp>;
    controlBoolean: ComponentProps<typeof ControlBoolean> & FormFieldContext<ConfigurableProp>;
    controlInput: ComponentProps<typeof ControlInput> & FormFieldContext<ConfigurableProp>;
    controlSubmit: ComponentProps<typeof ControlSubmit>;
    description: ComponentProps<typeof Description>;
    error: ComponentProps<typeof Errors>;
    errors: ComponentProps<typeof Errors>;
    field: ComponentProps<typeof Field>;
    heading: ComponentProps<typeof ComponentForm>;
    label: ComponentProps<typeof Label>;
    optionalFields: ComponentProps<typeof ComponentForm>;
    optionalFieldButton: ComponentProps<typeof OptionalFieldButton>;
    loadMoreButton: ComponentProps<typeof LoadMoreButton>;
};

export declare type Customization = {
    getClassNames: <Key extends keyof CustomizableProps>(name: Key, props: CustomizableProps[Key]) => string;
    getComponents: () => ComponentLibrary;
    getProps: <Key extends keyof CustomizableProps>(name: Key, baseStyles: CSSProperties, props: CustomizableProps[Key]) => CustomizationProps;
    getStyles: <Key extends keyof CustomizableProps>(name: Key, baseStyles: CSSProperties, props: CustomizableProps[Key]) => CSSProperties;
    theme: Theme;
    select: {
        getClassNamePrefix: <Key extends keyof ReactSelectComponents>(name: Key) => string;
        getClassNames: <Key extends keyof ReactSelectComponents>(name: Key) => ClassNamesConfig;
        getComponents: <Key extends keyof ReactSelectComponents>(name: Key, baseComponents?: SelectComponentsConfig<any, any, any>) => SelectComponentsConfig<any, any, any>;
        getStyles: <Key extends keyof ReactSelectComponents>(name: Key, baseStyles?: StylesConfig) => StylesConfig;
        getProps: <Key extends keyof ReactSelectComponents>(name: Key, baseProps?: BaseReactSelectProps<any, any, any>) => Props;
        theme: Theme_2;
    };
};

export declare type CustomizationConfig<Option, IsMulti extends boolean, Group extends GroupBase<Option>> = {
    classNames?: CustomClassNamesConfig;
    classNamePrefix?: string;
    components?: CustomComponentsConfig<Option, IsMulti, Group>;
    styles?: CustomStylesConfig;
    theme?: CustomThemeConfig;
    unstyled?: boolean;
};

export declare const CustomizationContext: Context<CustomizationConfig<any, any, any>>;

export declare type CustomizationOpts<P extends ComponentProps<JSXElementConstructor<any>>> = P & {
    theme: Theme;
};

export declare type CustomizationProps = {
    className: string;
    style: CSSProperties;
};

export declare const CustomizeProvider: ({ children, ...customizationProps }: CustomizationConfig<any, any, any> & {
    children: ReactNode;
}) => JSX_2.Element;

export declare type CustomStylesConfig = {
    [K in keyof Omit<CustomizableProps, "select">]?: CSSProperties | CustomStylesFn<K>;
} & {
    [K in keyof ReactSelectComponents]?: StylesConfig;
};

export declare type CustomStylesFn<K extends keyof CustomizableProps> = ((baseStyles: CSSProperties, opts: CustomizationOpts<CustomizableProps[K]>) => CSSProperties);

export declare type CustomThemeConfig = PartialTheme | ((theme: Theme) => PartialTheme);

export declare const defaultComponents: {
    Description: typeof Description;
    Errors: typeof Errors;
    Label: typeof Label;
    OptionalFieldButton: (props: OptionalFieldButtonProps) => JSX_2.Element;
    Button: (props: ButtonProps) => JSX_2.Element;
    ControlInput: typeof ControlInput;
};

export declare const defaultTheme: Theme;

export declare function Description<T extends ConfigurableProps, U extends ConfigurableProp>(props: DescriptionProps<T, U>): JSX_2.Element | null;

declare type DescriptionProps<T extends ConfigurableProps, U extends ConfigurableProp> = {
    markdown?: string;
    field: FormFieldContext<U>;
    form: FormContext<T>;
};

export declare type DynamicProps<T extends ConfigurableProps> = {
    id: string;
    configurableProps: T;
};

export declare class ErrorBoundary extends Component<Props_2> {
    state: {
        err: undefined;
    };
    static getDerivedStateFromError(err: unknown): {
        err: unknown;
    };
    render(): ReactNode;
}

export declare function Errors<T extends ConfigurableProps, U extends ConfigurableProp>(props: ErrorsProps<T, U>): JSX_2.Element | null;

declare type ErrorsProps<T extends ConfigurableProps, U extends ConfigurableProp> = {
    errors: string[];
    field: FormFieldContext<U>;
    form: FormContext<T>;
};

export declare function Field<T extends ConfigurableProp>(props: FieldProps<T>): JSX_2.Element | null;

declare type FieldInternalProps<T extends ConfigurableProp> = {
    prop: T;
    idx: number;
};

declare type FieldProps<T extends ConfigurableProp> = {
    form: FormContext;
    field: FormFieldContext<T>;
};

export declare type FormContext<T extends ConfigurableProps> = {
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

export declare const FormContext: Context<FormContext<any> | undefined>;

export declare const FormContextProvider: <T extends ConfigurableProps>({ children, props: formProps, }: FormContextProviderProps<T>) => JSX_2.Element;

declare type FormContextProviderProps<T extends ConfigurableProps> = {
    children: ReactNode;
} & {
    props: ComponentFormProps<T>;
};

export declare type FormFieldContext<T extends ConfigurableProp> = {
    id: string;
    prop: T;
    idx: number;
    value: PropValue<T["type"]> | undefined;
    onChange: (value: PropValue<T["type"]> | undefined) => void;
    extra: FormFieldContextExtra<T>;
};

export declare const FormFieldContext: Context<FormFieldContext<any> | undefined>;

export declare type FormFieldContextExtra<T extends ConfigurableProp> = T extends ConfigurablePropApp ? {
    app?: AppResponse;
} : Record<string, never>;

export declare const FrontendClientProvider: FC<FrontendClientProviderProps>;

declare type FrontendClientProviderProps = {
    children: ReactNode;
    client: BrowserClient;
};

export declare function getReactSelectTheme(theme: CustomThemeConfig | undefined): Theme_2;

export declare function InternalComponentForm(): JSX_2.Element;

export declare function InternalField<T extends ConfigurableProp>({ prop, idx, }: FieldInternalProps<T>): JSX_2.Element;

export declare function Label<T extends ConfigurableProps, U extends ConfigurableProp>(props: LabelProps<T, U>): JSX_2.Element;

declare type LabelProps<T extends ConfigurableProps, U extends ConfigurableProp> = {
    text: string;
    field: FormFieldContext<U>;
    form: FormContext<T>;
};

declare const LoadMoreButton: (props: ButtonProps) => JSX_2.Element;

export declare function mergeTheme(target: Theme, ...sources: (PartialTheme | undefined)[]): Theme;

export declare const OptionalFieldButton: (props: OptionalFieldButtonProps) => JSX_2.Element;

declare type OptionalFieldButtonProps = {
    prop: ConfigurableProp;
    enabled: boolean;
    onClick: () => void;
};

export declare type PartialTheme = {
    borderRadius?: Theme["borderRadius"];
    colors?: Partial<Colors>;
    spacing?: Partial<ThemeSpacing>;
    boxShadow?: Partial<Shadows>;
};

declare type Props_2 = {
    children: ReactNode;
    fallback: (err: unknown) => ReactNode;
};

export declare type ReactSelectComponents = {
    controlAppSelect: typeof ControlApp;
    controlSelect: typeof ControlSelect;
};

export declare function RemoteOptionsContainer({ queryEnabled }: RemoteOptionsContainerProps): JSX_2.Element;

declare type RemoteOptionsContainerProps = {
    queryEnabled?: boolean;
};

export declare function SelectApp({ value, onChange, }: SelectAppProps): JSX_2.Element;

declare type SelectAppProps = {
    value?: Partial<AppResponse> & {
        name_slug: string;
    };
    onChange?: (app?: AppResponse) => void;
};

export declare function SelectComponent({ app, componentType, value, onChange, }: SelectComponentProps): JSX_2.Element;

declare type SelectComponentProps = {
    app?: Partial<AppResponse> & {
        name_slug: string;
    };
    componentType?: "action" | "trigger";
    value?: Partial<V1Component> & {
        key: string;
    };
    onChange?: (component?: V1Component) => void;
};

export declare type Shadows = {
    button: string;
    input: string;
    card: string;
    dropdown: string;
};

export declare const skippablePropTypes: string[];

export declare type Theme = {
    borderRadius?: number | string;
    colors: Partial<Colors>;
    spacing: ThemeSpacing;
    boxShadow: Shadows;
};

export declare type ThemeSpacing = {
    baseUnit: number;
    controlHeight: number;
    menuGutter: number;
};

export declare const unstyledTheme: Theme;

/**
 * Retrieves the list of accounts associated with the project.
 */
export declare const useAccounts: (input: GetAccountOpts, opts?: {
    useQueryOpts?: Omit<UseQueryOptions<AccountsRequestResponse>, "queryKey" | "queryFn">;
}) => {
    accounts: Account[];
    data: GetAccountsResponse;
    error: Error;
    isError: true;
    isPending: false;
    isLoading: false;
    isLoadingError: false;
    isRefetchError: true;
    isSuccess: false;
    status: "error";
    dataUpdatedAt: number;
    errorUpdatedAt: number;
    failureCount: number;
    failureReason: Error | null;
    errorUpdateCount: number;
    isFetched: boolean;
    isFetchedAfterMount: boolean;
    isFetching: boolean;
    isInitialLoading: boolean;
    isPaused: boolean;
    isPlaceholderData: boolean;
    isRefetching: boolean;
    isStale: boolean;
    refetch: (options?: RefetchOptions) => Promise<QueryObserverResult<GetAccountsResponse, Error>>;
    fetchStatus: FetchStatus;
    promise: Promise<GetAccountsResponse>;
} | {
    accounts: Account[];
    data: GetAccountsResponse;
    error: null;
    isError: false;
    isPending: false;
    isLoading: false;
    isLoadingError: false;
    isRefetchError: false;
    isSuccess: true;
    status: "success";
    dataUpdatedAt: number;
    errorUpdatedAt: number;
    failureCount: number;
    failureReason: Error | null;
    errorUpdateCount: number;
    isFetched: boolean;
    isFetchedAfterMount: boolean;
    isFetching: boolean;
    isInitialLoading: boolean;
    isPaused: boolean;
    isPlaceholderData: boolean;
    isRefetching: boolean;
    isStale: boolean;
    refetch: (options?: RefetchOptions) => Promise<QueryObserverResult<GetAccountsResponse, Error>>;
    fetchStatus: FetchStatus;
    promise: Promise<GetAccountsResponse>;
} | {
    accounts: Account[];
    data: undefined;
    error: Error;
    isError: true;
    isPending: false;
    isLoading: false;
    isLoadingError: true;
    isRefetchError: false;
    isSuccess: false;
    status: "error";
    dataUpdatedAt: number;
    errorUpdatedAt: number;
    failureCount: number;
    failureReason: Error | null;
    errorUpdateCount: number;
    isFetched: boolean;
    isFetchedAfterMount: boolean;
    isFetching: boolean;
    isInitialLoading: boolean;
    isPaused: boolean;
    isPlaceholderData: boolean;
    isRefetching: boolean;
    isStale: boolean;
    refetch: (options?: RefetchOptions) => Promise<QueryObserverResult<GetAccountsResponse, Error>>;
    fetchStatus: FetchStatus;
    promise: Promise<GetAccountsResponse>;
} | {
    accounts: Account[];
    data: undefined;
    error: null;
    isError: false;
    isPending: true;
    isLoading: true;
    isLoadingError: false;
    isRefetchError: false;
    isSuccess: false;
    status: "pending";
    dataUpdatedAt: number;
    errorUpdatedAt: number;
    failureCount: number;
    failureReason: Error | null;
    errorUpdateCount: number;
    isFetched: boolean;
    isFetchedAfterMount: boolean;
    isFetching: boolean;
    isInitialLoading: boolean;
    isPaused: boolean;
    isPlaceholderData: boolean;
    isRefetching: boolean;
    isStale: boolean;
    refetch: (options?: RefetchOptions) => Promise<QueryObserverResult<GetAccountsResponse, Error>>;
    fetchStatus: FetchStatus;
    promise: Promise<GetAccountsResponse>;
} | {
    accounts: Account[];
    data: undefined;
    error: null;
    isError: false;
    isPending: true;
    isLoadingError: false;
    isRefetchError: false;
    isSuccess: false;
    status: "pending";
    dataUpdatedAt: number;
    errorUpdatedAt: number;
    failureCount: number;
    failureReason: Error | null;
    errorUpdateCount: number;
    isFetched: boolean;
    isFetchedAfterMount: boolean;
    isFetching: boolean;
    isLoading: boolean;
    isInitialLoading: boolean;
    isPaused: boolean;
    isPlaceholderData: boolean;
    isRefetching: boolean;
    isStale: boolean;
    refetch: (options?: RefetchOptions) => Promise<QueryObserverResult<GetAccountsResponse, Error>>;
    fetchStatus: FetchStatus;
    promise: Promise<GetAccountsResponse>;
};

/**
 * Get details about an app
 */
export declare const useApp: (slug: string, opts?: {
    useQueryOpts?: Omit<UseQueryOptions<GetAppResponse>, "queryKey" | "queryFn">;
}) => {
    app: App | undefined;
    data: GetAppResponse;
    error: Error;
    isError: true;
    isPending: false;
    isLoading: false;
    isLoadingError: false;
    isRefetchError: true;
    isSuccess: false;
    status: "error";
    dataUpdatedAt: number;
    errorUpdatedAt: number;
    failureCount: number;
    failureReason: Error | null;
    errorUpdateCount: number;
    isFetched: boolean;
    isFetchedAfterMount: boolean;
    isFetching: boolean;
    isInitialLoading: boolean;
    isPaused: boolean;
    isPlaceholderData: boolean;
    isRefetching: boolean;
    isStale: boolean;
    refetch: (options?: RefetchOptions) => Promise<QueryObserverResult<GetAppResponse, Error>>;
    fetchStatus: FetchStatus;
    promise: Promise<GetAppResponse>;
} | {
    app: App | undefined;
    data: GetAppResponse;
    error: null;
    isError: false;
    isPending: false;
    isLoading: false;
    isLoadingError: false;
    isRefetchError: false;
    isSuccess: true;
    status: "success";
    dataUpdatedAt: number;
    errorUpdatedAt: number;
    failureCount: number;
    failureReason: Error | null;
    errorUpdateCount: number;
    isFetched: boolean;
    isFetchedAfterMount: boolean;
    isFetching: boolean;
    isInitialLoading: boolean;
    isPaused: boolean;
    isPlaceholderData: boolean;
    isRefetching: boolean;
    isStale: boolean;
    refetch: (options?: RefetchOptions) => Promise<QueryObserverResult<GetAppResponse, Error>>;
    fetchStatus: FetchStatus;
    promise: Promise<GetAppResponse>;
} | {
    app: App | undefined;
    data: undefined;
    error: Error;
    isError: true;
    isPending: false;
    isLoading: false;
    isLoadingError: true;
    isRefetchError: false;
    isSuccess: false;
    status: "error";
    dataUpdatedAt: number;
    errorUpdatedAt: number;
    failureCount: number;
    failureReason: Error | null;
    errorUpdateCount: number;
    isFetched: boolean;
    isFetchedAfterMount: boolean;
    isFetching: boolean;
    isInitialLoading: boolean;
    isPaused: boolean;
    isPlaceholderData: boolean;
    isRefetching: boolean;
    isStale: boolean;
    refetch: (options?: RefetchOptions) => Promise<QueryObserverResult<GetAppResponse, Error>>;
    fetchStatus: FetchStatus;
    promise: Promise<GetAppResponse>;
} | {
    app: App | undefined;
    data: undefined;
    error: null;
    isError: false;
    isPending: true;
    isLoading: true;
    isLoadingError: false;
    isRefetchError: false;
    isSuccess: false;
    status: "pending";
    dataUpdatedAt: number;
    errorUpdatedAt: number;
    failureCount: number;
    failureReason: Error | null;
    errorUpdateCount: number;
    isFetched: boolean;
    isFetchedAfterMount: boolean;
    isFetching: boolean;
    isInitialLoading: boolean;
    isPaused: boolean;
    isPlaceholderData: boolean;
    isRefetching: boolean;
    isStale: boolean;
    refetch: (options?: RefetchOptions) => Promise<QueryObserverResult<GetAppResponse, Error>>;
    fetchStatus: FetchStatus;
    promise: Promise<GetAppResponse>;
} | {
    app: App | undefined;
    data: undefined;
    error: null;
    isError: false;
    isPending: true;
    isLoadingError: false;
    isRefetchError: false;
    isSuccess: false;
    status: "pending";
    dataUpdatedAt: number;
    errorUpdatedAt: number;
    failureCount: number;
    failureReason: Error | null;
    errorUpdateCount: number;
    isFetched: boolean;
    isFetchedAfterMount: boolean;
    isFetching: boolean;
    isLoading: boolean;
    isInitialLoading: boolean;
    isPaused: boolean;
    isPlaceholderData: boolean;
    isRefetching: boolean;
    isStale: boolean;
    refetch: (options?: RefetchOptions) => Promise<QueryObserverResult<GetAppResponse, Error>>;
    fetchStatus: FetchStatus;
    promise: Promise<GetAppResponse>;
};

/**
 * Get list of apps that can be authenticated
 */
export declare const useApps: (input?: GetAppsOpts) => {
    apps: any;
    data: any;
    error: Error;
    isError: true;
    isPending: false;
    isLoading: false;
    isLoadingError: false;
    isRefetchError: true;
    isSuccess: false;
    status: "error";
    dataUpdatedAt: number;
    errorUpdatedAt: number;
    failureCount: number;
    failureReason: Error | null;
    errorUpdateCount: number;
    isFetched: boolean;
    isFetchedAfterMount: boolean;
    isFetching: boolean;
    isInitialLoading: boolean;
    isPaused: boolean;
    isPlaceholderData: boolean;
    isRefetching: boolean;
    isStale: boolean;
    refetch: (options?: RefetchOptions) => Promise<QueryObserverResult<any, Error>>;
    fetchStatus: FetchStatus;
    promise: Promise<any>;
} | {
    apps: any;
    data: any;
    error: null;
    isError: false;
    isPending: false;
    isLoading: false;
    isLoadingError: false;
    isRefetchError: false;
    isSuccess: true;
    status: "success";
    dataUpdatedAt: number;
    errorUpdatedAt: number;
    failureCount: number;
    failureReason: Error | null;
    errorUpdateCount: number;
    isFetched: boolean;
    isFetchedAfterMount: boolean;
    isFetching: boolean;
    isInitialLoading: boolean;
    isPaused: boolean;
    isPlaceholderData: boolean;
    isRefetching: boolean;
    isStale: boolean;
    refetch: (options?: RefetchOptions) => Promise<QueryObserverResult<any, Error>>;
    fetchStatus: FetchStatus;
    promise: Promise<any>;
} | {
    apps: any;
    data: undefined;
    error: Error;
    isError: true;
    isPending: false;
    isLoading: false;
    isLoadingError: true;
    isRefetchError: false;
    isSuccess: false;
    status: "error";
    dataUpdatedAt: number;
    errorUpdatedAt: number;
    failureCount: number;
    failureReason: Error | null;
    errorUpdateCount: number;
    isFetched: boolean;
    isFetchedAfterMount: boolean;
    isFetching: boolean;
    isInitialLoading: boolean;
    isPaused: boolean;
    isPlaceholderData: boolean;
    isRefetching: boolean;
    isStale: boolean;
    refetch: (options?: RefetchOptions) => Promise<QueryObserverResult<any, Error>>;
    fetchStatus: FetchStatus;
    promise: Promise<any>;
} | {
    apps: any;
    data: undefined;
    error: null;
    isError: false;
    isPending: true;
    isLoading: true;
    isLoadingError: false;
    isRefetchError: false;
    isSuccess: false;
    status: "pending";
    dataUpdatedAt: number;
    errorUpdatedAt: number;
    failureCount: number;
    failureReason: Error | null;
    errorUpdateCount: number;
    isFetched: boolean;
    isFetchedAfterMount: boolean;
    isFetching: boolean;
    isInitialLoading: boolean;
    isPaused: boolean;
    isPlaceholderData: boolean;
    isRefetching: boolean;
    isStale: boolean;
    refetch: (options?: RefetchOptions) => Promise<QueryObserverResult<any, Error>>;
    fetchStatus: FetchStatus;
    promise: Promise<any>;
} | {
    apps: any;
    data: undefined;
    error: null;
    isError: false;
    isPending: true;
    isLoadingError: false;
    isRefetchError: false;
    isSuccess: false;
    status: "pending";
    dataUpdatedAt: number;
    errorUpdatedAt: number;
    failureCount: number;
    failureReason: Error | null;
    errorUpdateCount: number;
    isFetched: boolean;
    isFetchedAfterMount: boolean;
    isFetching: boolean;
    isLoading: boolean;
    isInitialLoading: boolean;
    isPaused: boolean;
    isPlaceholderData: boolean;
    isRefetching: boolean;
    isStale: boolean;
    refetch: (options?: RefetchOptions) => Promise<QueryObserverResult<any, Error>>;
    fetchStatus: FetchStatus;
    promise: Promise<any>;
};

/**
 * Get details about a component
 */
export declare const useComponent: ({ key }: {
    key?: string;
}, opts?: {
    useQueryOpts?: Omit<UseQueryOptions<ComponentRequestResponse>, "queryKey" | "queryFn">;
}) => {
    component: V1Component | undefined;
    data: GetComponentResponse;
    error: Error;
    isError: true;
    isPending: false;
    isLoading: false;
    isLoadingError: false;
    isRefetchError: true;
    isSuccess: false;
    status: "error";
    dataUpdatedAt: number;
    errorUpdatedAt: number;
    failureCount: number;
    failureReason: Error | null;
    errorUpdateCount: number;
    isFetched: boolean;
    isFetchedAfterMount: boolean;
    isFetching: boolean;
    isInitialLoading: boolean;
    isPaused: boolean;
    isPlaceholderData: boolean;
    isRefetching: boolean;
    isStale: boolean;
    refetch: (options?: RefetchOptions) => Promise<QueryObserverResult<GetComponentResponse, Error>>;
    fetchStatus: FetchStatus;
    promise: Promise<GetComponentResponse>;
} | {
    component: V1Component | undefined;
    data: GetComponentResponse;
    error: null;
    isError: false;
    isPending: false;
    isLoading: false;
    isLoadingError: false;
    isRefetchError: false;
    isSuccess: true;
    status: "success";
    dataUpdatedAt: number;
    errorUpdatedAt: number;
    failureCount: number;
    failureReason: Error | null;
    errorUpdateCount: number;
    isFetched: boolean;
    isFetchedAfterMount: boolean;
    isFetching: boolean;
    isInitialLoading: boolean;
    isPaused: boolean;
    isPlaceholderData: boolean;
    isRefetching: boolean;
    isStale: boolean;
    refetch: (options?: RefetchOptions) => Promise<QueryObserverResult<GetComponentResponse, Error>>;
    fetchStatus: FetchStatus;
    promise: Promise<GetComponentResponse>;
} | {
    component: V1Component | undefined;
    data: undefined;
    error: Error;
    isError: true;
    isPending: false;
    isLoading: false;
    isLoadingError: true;
    isRefetchError: false;
    isSuccess: false;
    status: "error";
    dataUpdatedAt: number;
    errorUpdatedAt: number;
    failureCount: number;
    failureReason: Error | null;
    errorUpdateCount: number;
    isFetched: boolean;
    isFetchedAfterMount: boolean;
    isFetching: boolean;
    isInitialLoading: boolean;
    isPaused: boolean;
    isPlaceholderData: boolean;
    isRefetching: boolean;
    isStale: boolean;
    refetch: (options?: RefetchOptions) => Promise<QueryObserverResult<GetComponentResponse, Error>>;
    fetchStatus: FetchStatus;
    promise: Promise<GetComponentResponse>;
} | {
    component: V1Component | undefined;
    data: undefined;
    error: null;
    isError: false;
    isPending: true;
    isLoading: true;
    isLoadingError: false;
    isRefetchError: false;
    isSuccess: false;
    status: "pending";
    dataUpdatedAt: number;
    errorUpdatedAt: number;
    failureCount: number;
    failureReason: Error | null;
    errorUpdateCount: number;
    isFetched: boolean;
    isFetchedAfterMount: boolean;
    isFetching: boolean;
    isInitialLoading: boolean;
    isPaused: boolean;
    isPlaceholderData: boolean;
    isRefetching: boolean;
    isStale: boolean;
    refetch: (options?: RefetchOptions) => Promise<QueryObserverResult<GetComponentResponse, Error>>;
    fetchStatus: FetchStatus;
    promise: Promise<GetComponentResponse>;
} | {
    component: V1Component | undefined;
    data: undefined;
    error: null;
    isError: false;
    isPending: true;
    isLoadingError: false;
    isRefetchError: false;
    isSuccess: false;
    status: "pending";
    dataUpdatedAt: number;
    errorUpdatedAt: number;
    failureCount: number;
    failureReason: Error | null;
    errorUpdateCount: number;
    isFetched: boolean;
    isFetchedAfterMount: boolean;
    isFetching: boolean;
    isLoading: boolean;
    isInitialLoading: boolean;
    isPaused: boolean;
    isPlaceholderData: boolean;
    isRefetching: boolean;
    isStale: boolean;
    refetch: (options?: RefetchOptions) => Promise<QueryObserverResult<GetComponentResponse, Error>>;
    fetchStatus: FetchStatus;
    promise: Promise<GetComponentResponse>;
};

/**
 * Get list of components
 */
export declare const useComponents: (input?: GetComponentOpts) => {
    components: any;
    data: any;
    error: Error;
    isError: true;
    isPending: false;
    isLoading: false;
    isLoadingError: false;
    isRefetchError: true;
    isSuccess: false;
    status: "error";
    dataUpdatedAt: number;
    errorUpdatedAt: number;
    failureCount: number;
    failureReason: Error | null;
    errorUpdateCount: number;
    isFetched: boolean;
    isFetchedAfterMount: boolean;
    isFetching: boolean;
    isInitialLoading: boolean;
    isPaused: boolean;
    isPlaceholderData: boolean;
    isRefetching: boolean;
    isStale: boolean;
    refetch: (options?: RefetchOptions) => Promise<QueryObserverResult<any, Error>>;
    fetchStatus: FetchStatus;
    promise: Promise<any>;
} | {
    components: any;
    data: any;
    error: null;
    isError: false;
    isPending: false;
    isLoading: false;
    isLoadingError: false;
    isRefetchError: false;
    isSuccess: true;
    status: "success";
    dataUpdatedAt: number;
    errorUpdatedAt: number;
    failureCount: number;
    failureReason: Error | null;
    errorUpdateCount: number;
    isFetched: boolean;
    isFetchedAfterMount: boolean;
    isFetching: boolean;
    isInitialLoading: boolean;
    isPaused: boolean;
    isPlaceholderData: boolean;
    isRefetching: boolean;
    isStale: boolean;
    refetch: (options?: RefetchOptions) => Promise<QueryObserverResult<any, Error>>;
    fetchStatus: FetchStatus;
    promise: Promise<any>;
} | {
    components: any;
    data: undefined;
    error: Error;
    isError: true;
    isPending: false;
    isLoading: false;
    isLoadingError: true;
    isRefetchError: false;
    isSuccess: false;
    status: "error";
    dataUpdatedAt: number;
    errorUpdatedAt: number;
    failureCount: number;
    failureReason: Error | null;
    errorUpdateCount: number;
    isFetched: boolean;
    isFetchedAfterMount: boolean;
    isFetching: boolean;
    isInitialLoading: boolean;
    isPaused: boolean;
    isPlaceholderData: boolean;
    isRefetching: boolean;
    isStale: boolean;
    refetch: (options?: RefetchOptions) => Promise<QueryObserverResult<any, Error>>;
    fetchStatus: FetchStatus;
    promise: Promise<any>;
} | {
    components: any;
    data: undefined;
    error: null;
    isError: false;
    isPending: true;
    isLoading: true;
    isLoadingError: false;
    isRefetchError: false;
    isSuccess: false;
    status: "pending";
    dataUpdatedAt: number;
    errorUpdatedAt: number;
    failureCount: number;
    failureReason: Error | null;
    errorUpdateCount: number;
    isFetched: boolean;
    isFetchedAfterMount: boolean;
    isFetching: boolean;
    isInitialLoading: boolean;
    isPaused: boolean;
    isPlaceholderData: boolean;
    isRefetching: boolean;
    isStale: boolean;
    refetch: (options?: RefetchOptions) => Promise<QueryObserverResult<any, Error>>;
    fetchStatus: FetchStatus;
    promise: Promise<any>;
} | {
    components: any;
    data: undefined;
    error: null;
    isError: false;
    isPending: true;
    isLoadingError: false;
    isRefetchError: false;
    isSuccess: false;
    status: "pending";
    dataUpdatedAt: number;
    errorUpdatedAt: number;
    failureCount: number;
    failureReason: Error | null;
    errorUpdateCount: number;
    isFetched: boolean;
    isFetchedAfterMount: boolean;
    isFetching: boolean;
    isLoading: boolean;
    isInitialLoading: boolean;
    isPaused: boolean;
    isPlaceholderData: boolean;
    isRefetching: boolean;
    isStale: boolean;
    refetch: (options?: RefetchOptions) => Promise<QueryObserverResult<any, Error>>;
    fetchStatus: FetchStatus;
    promise: Promise<any>;
};

export declare function useCustomize(): Customization;

export declare const useFormContext: () => FormContext<any>;

export declare const useFormFieldContext: <T extends ConfigurableProp>() => FormFieldContext<T>;

export declare const useFrontendClient: () => any;

export { }
