import { useState } from "react";
import { Field, Switch } from "ai-ui-kit";

const SwitchTest = () => {
  const [enabled, setEnabled] = useState(false);

  return (
    <div style={{ maxWidth: 400, padding: 20 }}>
      <Field
        label="Enable notifications"
        helperText="Turn on to receive alerts"
      >
        <Switch
          checked={enabled}
          onCheckedChange={(details) => setEnabled(details.checked)}
          label="Notifications"
          description="Receive notifications by email"
        />

        <p>Switch is {enabled ? "ON" : "OFF"}</p>
      </Field>
    </div>
  );
};

export default SwitchTest;
