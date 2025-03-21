import {
  DynamicProps,
  FormContextProvider, type FormContext,
} from "../hooks/form-context";
import type {
  ConfigurableProps,
  ConfiguredProps,
  V1Component,
} from "@pipedream/sdk";
import { InternalComponentForm } from "./InternalComponentForm";
import { CSSProperties } from "react";
import { OptionalFieldButtonProps } from "./OptionalFieldButton";

export type ComponentFormProps<T extends ConfigurableProps> = {
  userId: string;
  component: V1Component<T>;
  configuredProps?: ConfiguredProps<T>;
  disableQueryDisabling?: boolean;
  // dynamicPropsId?: string // XXX need to load this initially when passed
  propNames?: string[]; // TODO PropNames<T>
  onSubmit?: (ctx: FormContext<T>) => void | Promise<void>; // if passed, we include button
  onUpdateConfiguredProps?: (v: ConfiguredProps<T>) => void; // XXX onChange?
  onUpdateDynamicProps?: (dp: DynamicProps<T>) => void;
  hideOptionalProps?: boolean;
  overrideProps?: {
    [appName: string]: {
      [propName: string]: any;
    };
  };
  components?: {
    OptionalFieldButton?: React.ComponentType<OptionalFieldButtonProps & { baseStyles: CSSProperties }>;
    OptionalFieldsContainer?: React.ComponentType<{
      children: React.ReactNode;
      baseStyles: CSSProperties;
      title: string;
      expanded: boolean;
      onToggle: () => void;
    }>;
  };
};

export function ComponentForm<T extends ConfigurableProps>(props: ComponentFormProps<T>) {
  return (
    <FormContextProvider props={props}>
      <InternalComponentForm />
    </FormContextProvider>
  );
}
