import { type Theme as ReactSelectTheme } from "react-select";
export type Colors = {
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
export type Shadows = {
    button: string;
    input: string;
    card: string;
    dropdown: string;
};
export type ThemeSpacing = {
    baseUnit: number;
    controlHeight: number;
    menuGutter: number;
};
export type Theme = {
    borderRadius?: number | string;
    colors: Partial<Colors>;
    spacing: ThemeSpacing;
    boxShadow: Shadows;
};
export type PartialTheme = {
    borderRadius?: Theme["borderRadius"];
    colors?: Partial<Colors>;
    spacing?: Partial<ThemeSpacing>;
    boxShadow?: Partial<Shadows>;
};
export type CustomThemeConfig = PartialTheme | ((theme: Theme) => PartialTheme);
export declare const defaultTheme: Theme;
export declare const unstyledTheme: Theme;
export declare function getReactSelectTheme(theme: CustomThemeConfig | undefined): ReactSelectTheme;
export declare function mergeTheme(target: Theme, ...sources: (PartialTheme | undefined)[]): Theme;
