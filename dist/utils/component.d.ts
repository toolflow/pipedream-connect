import type { App, ConfigurableProp, ConfigurablePropApp, ConfigurablePropBoolean, ConfigurablePropInteger, ConfigurablePropString, ConfigurablePropStringArray } from "@pipedream/sdk";
export type PropOptionValue<T> = {
    __lv: {
        value: T;
    };
};
export declare function valueFromOption<T>(value: T | PropOptionValue<T>): T | undefined | null;
export type PropOption<T> = {
    emitValue: T | PropOptionValue<T>;
};
export type PropOptions<T> = {
    selectedOptions: PropOption<T>[];
};
export declare function valuesFromOptions<T>(value: unknown | T[] | PropOptions<T>): T[];
export type ValidationOpts<T extends ConfigurableProp> = {
    prop: T;
    value: unknown;
    app?: App;
};
export declare function arrayPropErrors(opts: ValidationOpts<ConfigurablePropStringArray>): string[] | undefined;
export declare function booleanPropErrors(opts: ValidationOpts<ConfigurablePropBoolean>): string[] | undefined;
export declare function integerPropErrors(opts: ValidationOpts<ConfigurablePropInteger>): string[] | undefined;
export declare function stringPropErrors(opts: ValidationOpts<ConfigurablePropString>): string[] | undefined;
export declare function appPropErrors(opts: ValidationOpts<ConfigurablePropApp>): string[] | undefined;
