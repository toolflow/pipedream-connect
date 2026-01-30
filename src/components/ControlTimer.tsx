import { useFormFieldContext } from "../hooks/form-field-context";
import { useCustomize } from "../hooks/customization-context";

/**
 * Default ControlTimer — bare fallback for $.interface.timer props.
 * Consumers should override this via CustomizeProvider for a richer UI.
 */
export function ControlTimer() {
  const formFieldContextProps = useFormFieldContext();
  const { onChange, value } = formFieldContextProps;
  const { getProps } = useCustomize();

  return (
    <div {...getProps("controlTimer", { gridArea: "control" }, formFieldContextProps)}>
      <input
        type="number"
        min={1}
        value={value?.intervalSeconds ?? 900}
        onChange={(e) => {
          const n = parseInt(e.target.value, 10) || 900;
          onChange({ intervalSeconds: n });
        }}
        placeholder="Interval (seconds)"
      />
    </div>
  );
}
