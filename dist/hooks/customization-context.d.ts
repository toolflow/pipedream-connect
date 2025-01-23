import { type ReactNode } from "react";
import type { ComponentProps, CSSProperties, JSXElementConstructor } from "react";
import type { ClassNamesConfig as ReactSelectClassNamesConfig, GroupBase, Props as ReactSelectCustomizationProps, SelectComponentsConfig as ReactSelectComponentsConfig, StylesConfig as ReactSelectStylesConfig, Theme as ReactSelectTheme } from "react-select";
import type { ConfigurableProp } from "@pipedream/sdk";
import { type CustomThemeConfig, type Theme } from "../theme";
import type { FormFieldContext } from "./form-field-context";
import { ComponentForm } from "../components/ComponentForm";
import { ControlAny } from "../components/ControlAny";
import { ControlApp } from "../components/ControlApp";
import { ControlBoolean } from "../components/ControlBoolean";
import { ControlInput } from "../components/ControlInput";
import { ControlSelect } from "../components/ControlSelect";
import { ControlSubmit } from "../components/ControlSubmit";
import { Description } from "../components/Description";
import { Errors } from "../components/Errors";
import { Field } from "../components/Field";
import { Label } from "../components/Label";
import { OptionalFieldButton } from "../components/OptionalFieldButton";
import { LoadMoreButton } from "../components/LoadMoreButton";
export declare const defaultComponents: {
    Description: typeof Description;
    Errors: typeof Errors;
    Label: typeof Label;
    OptionalFieldButton: (props: import("../components/OptionalFieldButton").OptionalFieldButtonProps) => import("react/jsx-runtime").JSX.Element;
    Button: (props: import("../components/LoadMoreButton").ButtonProps) => import("react/jsx-runtime").JSX.Element;
};
export type ReactSelectComponents = {
    controlAppSelect: typeof ControlApp;
    controlSelect: typeof ControlSelect;
};
export type CustomComponents<Option, IsMulti extends boolean, Group extends GroupBase<Option>> = {
    [K in keyof typeof defaultComponents]: typeof defaultComponents[K];
} & {
    [K in keyof ReactSelectComponents]: ReactSelectComponentsConfig<Option, IsMulti, Group>;
};
export type ComponentLibrary = typeof defaultComponents;
export type CustomComponentsConfig<T, U extends boolean, V extends GroupBase<T>> = Partial<CustomComponents<T, U, V>>;
export type CustomizationOpts<P extends ComponentProps<JSXElementConstructor<any>>> = P & {
    theme: Theme;
};
export type CustomizableProps = {
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
export type CustomClassNamesFn<K extends keyof CustomizableProps> = ((opts: CustomizationOpts<CustomizableProps[K]>) => string);
export type CustomClassNamesConfig = {
    [K in keyof CustomizableProps]?: string | CustomClassNamesFn<K>;
} & {
    [K in keyof ReactSelectComponents]?: ReactSelectClassNamesConfig;
};
export type CustomStylesFn<K extends keyof CustomizableProps> = ((baseStyles: CSSProperties, opts: CustomizationOpts<CustomizableProps[K]>) => CSSProperties);
export type CustomStylesConfig = {
    [K in keyof Omit<CustomizableProps, "select">]?: CSSProperties | CustomStylesFn<K>;
} & {
    [K in keyof ReactSelectComponents]?: ReactSelectStylesConfig;
};
export type CustomizationConfig<Option, IsMulti extends boolean, Group extends GroupBase<Option>> = {
    classNames?: CustomClassNamesConfig;
    classNamePrefix?: string;
    components?: CustomComponentsConfig<Option, IsMulti, Group>;
    styles?: CustomStylesConfig;
    theme?: CustomThemeConfig;
    unstyled?: boolean;
};
export declare const CustomizationContext: import("react").Context<CustomizationConfig<any, any, any>>;
export type CustomizationProps = {
    className: string;
    style: CSSProperties;
};
export type BaseReactSelectProps<Option, IsMulti extends boolean, Group extends GroupBase<Option>> = {
    components?: ReactSelectComponentsConfig<Option, IsMulti, Group>;
    styles?: ReactSelectStylesConfig;
};
export type Customization = {
    getClassNames: <Key extends keyof CustomizableProps>(name: Key, props: CustomizableProps[Key]) => string;
    getComponents: () => ComponentLibrary;
    getProps: <Key extends keyof CustomizableProps>(name: Key, baseStyles: CSSProperties, props: CustomizableProps[Key]) => CustomizationProps;
    getStyles: <Key extends keyof CustomizableProps>(name: Key, baseStyles: CSSProperties, props: CustomizableProps[Key]) => CSSProperties;
    theme: Theme;
    select: {
        getClassNamePrefix: <Key extends keyof ReactSelectComponents>(name: Key) => string;
        getClassNames: <Key extends keyof ReactSelectComponents>(name: Key) => ReactSelectClassNamesConfig;
        getComponents: <Key extends keyof ReactSelectComponents>(name: Key, baseComponents?: ReactSelectComponentsConfig<any, any, any>) => ReactSelectComponentsConfig<any, any, any>;
        getStyles: <Key extends keyof ReactSelectComponents>(name: Key, baseStyles?: ReactSelectStylesConfig) => ReactSelectStylesConfig;
        getProps: <Key extends keyof ReactSelectComponents>(name: Key, baseProps?: BaseReactSelectProps<any, any, any>) => ReactSelectCustomizationProps;
        theme: ReactSelectTheme;
    };
};
export declare function useCustomize(): Customization;
export declare const CustomizeProvider: ({ children, ...customizationProps }: CustomizationConfig<any, any, any> & {
    children: ReactNode;
}) => import("react/jsx-runtime").JSX.Element;
