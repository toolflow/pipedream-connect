import { useContext } from "react";
import { CustomizationContext, defaultComponents } from "./customization-context";

const noUIComponents: Set<keyof typeof defaultComponents> = new Set([
  "ControlObject",
  "ControlServiceDb",
  "ControlInterfaceHttp",
  "ControlInterfaceApphook",
]);

const propTypeToComponentKey: Partial<Record<string, keyof typeof defaultComponents>> = {
  "object": "ControlObject",
  "$.service.db": "ControlServiceDb",
  "$.interface.http": "ControlInterfaceHttp",
  "$.interface.apphook": "ControlInterfaceApphook",
};

/**
 * Determines whether the `Field` wrapper (Label, Description, Errors) should be
 * skipped entirely for a given prop type.
 *
 * Several Control components (`ControlObject`, `ControlServiceDb`,
 * `ControlInterfaceHttp`, `ControlInterfaceApphook`) render no visible UI —
 * they return `null` or an empty fragment. Without this check, `Field` still
 * renders empty Label/Description/Errors wrappers around them, producing
 * invisible but present DOM nodes that affect layout.
 *
 * The hook reads `CustomizationContext` directly (rather than going through
 * `useCustomize`) to avoid changes to upstream files and reduce merge-conflict
 * surface in this fork. If the consumer has provided a custom override for the
 * component via the `components` prop, the field is **not** skipped — the
 * override presumably renders meaningful UI.
 *
 * @param propType - The `prop.type` value from the configurable prop
 *                   (e.g. `"object"`, `"$.service.db"`).
 * @returns `true` when the field should be skipped (no UI control and no user override).
 */
export function useShouldSkipField(propType: string): boolean {
  const context = useContext(CustomizationContext);
  const componentKey = propTypeToComponentKey[propType];
  if (!componentKey || !noUIComponents.has(componentKey)) return false;
  return !(context?.components && componentKey in context.components);
}
