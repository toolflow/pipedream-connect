import type { ConfigurablePropAlert } from "@pipedream/sdk";
import { useCustomize } from "../hooks/customization-context";
import type { CSSProperties } from "react";

type AlertProps = {
  prop: ConfigurablePropAlert;
  component?: React.ComponentType<{
    prop: ConfigurablePropAlert;
    baseStyles: CSSProperties;
  }>;
};

export function Alert({ prop, component: CustomComponent }: AlertProps) {
  const { getProps } = useCustomize();
  const baseStyles: CSSProperties = {
    padding: '1rem',
    borderRadius: '4px',
    marginBottom: '1rem'
  };

  if (CustomComponent) {
    return <CustomComponent prop={prop} baseStyles={baseStyles} {...getProps("alert", baseStyles, { prop, baseStyles })} />;  
  } 

  return (
    <p {...getProps("alert", baseStyles, { prop, baseStyles })} className={`pd-alert-${prop.alertType}`}>
      {prop.content}
    </p>
  );
}
