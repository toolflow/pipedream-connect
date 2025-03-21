import { ConfigurableProp } from "@pipedream/sdk";
import { useCustomize } from "../hooks/customization-context";
import type { CSSProperties } from "react";

export type OptionalFieldButtonProps = {
  prop: ConfigurableProp;
  enabled: boolean;
  onClick: () => void;
  component?: React.ComponentType<OptionalFieldButtonProps & { baseStyles: CSSProperties }>;
};

export type OverrideProps = {
  prop: ConfigurableProp;
  value: any;
  appName: string;
};

export const OptionalFieldButton = (props: OptionalFieldButtonProps) => {
  const {
    prop, enabled, onClick, component: CustomComponent,
  } = props;
  const {
    getProps, theme,
  } = useCustomize();
  const baseStyles: CSSProperties = {
    color: theme.colors.neutral60,
    display: "inline-flex",
    alignItems: "center",
    padding: `${theme.spacing.baseUnit}px ${theme.spacing.baseUnit * 1.5}px ${
      theme.spacing.baseUnit
    }px ${theme.spacing.baseUnit * 2.5}px`,
    border: `1px solid ${theme.colors.neutral30}`,
    borderRadius: theme.borderRadius,
    cursor: "pointer",
    fontSize: "0.8125rem",
    fontWeight: 450,
    gap: theme.spacing.baseUnit * 2,
    textWrap: "nowrap",
  };

  

  if (CustomComponent) {
    return (
      <CustomComponent
        prop={prop}
        enabled={enabled}
        onClick={onClick}
        baseStyles={baseStyles}
        {...getProps("optionalFieldButton", baseStyles, props)}
      />
    );
  }

  return (
    <button onClick={onClick} type="button" {...getProps("optionalFieldButton", baseStyles, props)}>
      <span>{enabled ? "-" : "+"}</span>
      <span style={{
        marginRight: 8,
      }}>{prop.label || prop.name}</span>
      {/* <p style={{ fontSize: "0.6875rem", fontWeight: 400 }}>
        {prop.description}
      </p> */}
    </button>
  );
};
