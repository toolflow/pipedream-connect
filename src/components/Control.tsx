import { FormContext } from "../hooks/form-context";
import { FormFieldContext } from "../hooks/form-field-context";
import { ConfigurableProp, ConfigurableProps } from "@pipedream/sdk";
import { useCustomize } from "../hooks/customization-context";
import { RemoteOptionsContainer } from "./RemoteOptionsContainer";

export type ControlProps<
  T extends ConfigurableProps,
  U extends ConfigurableProp
> = {
  field: FormFieldContext<U>;
  form: FormContext<T>;
};

// TODO for easier Control* overriding, should probably pass more stuff in so they don't need to reach into context?
// ... or do we want the API to incentivize just reaching into context?
export function Control<
  T extends ConfigurableProps,
  U extends ConfigurableProp
>(props: ControlProps<T, U>) {
  const { field, form } = props;
  const { queryDisabledIdx } = form;
  const { prop, idx } = field;
  const { getComponents } = useCustomize();
  const { ControlInput } = getComponents();
  const { ControlApp } = getComponents();
  const { ControlSelect } = getComponents();
  const { ControlBoolean } = getComponents();

  console.log('Control: Retrieved ControlSelect component:', ControlSelect);
  console.log('props', props);
  
  const app = "app" in field.extra ? field.extra.app : undefined;

  if (prop.remoteOptions || prop.type === "$.discord.channel") {
    console.log('this is being rendered', prop.type)
    return (
      <RemoteOptionsContainer
        queryEnabled={queryDisabledIdx == null || queryDisabledIdx >= idx}
        component={ControlSelect}
      />
    );
  }

  if ("options" in prop && prop.options) {
    console.log('Control: Rendering ControlSelect with options:', prop.options);
    let options = prop.options;
    if (typeof options[0] !== "object") {
      options = options.map((o: unknown) => ({
        label: o,
        value: o,
      }));
    }
    return (
      <ControlSelect
        options={options.map((o: unknown) => ({
          label: String(o),
          value: o,
        }))}
        selectProps={{
          components: {
            IndicatorSeparator: () => null,
          },
        }}
      />
    ); // TODO fix typing issue here!
  }

  // TODO just look at registry component repo and look for what we should make sure we support
  // TODO deal with suspense stuff!
  if (prop.type.endsWith("[][]")) {
    throw new Error("Unsupported property type: " + prop.type);
  }

  if (prop.type.endsWith("[]")) {
    return (
      <ControlSelect
        isCreatable={true}
        options={[]}
        selectProps={{
          components: {
            IndicatorSeparator: () => null,
          }
        }}
      />
    );
  }

  switch (prop.type) {
    // problem with this is that it should be the JSON value, but if it is at any point
    // not a valid json value, it should just be the string so the value is not lost... so it's just very odd
    // without a more stringent JSON builder type component
    // case "any":
    //   return <ControlAny />
    case "app":
      return <ControlApp app={app!} />;
    case "boolean":
      return <ControlBoolean />;
    case "string":
    case "integer":
      // XXX split into ControlString, ControlInteger, etc? but want to share autoComplet="off", etc functionality in base one
      return <ControlInput />;
    default:
      // TODO "not supported prop type should bubble up"
      throw new Error("Unsupported property type: " + prop.type);
  }
}
