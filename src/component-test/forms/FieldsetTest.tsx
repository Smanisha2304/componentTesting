import  { useState } from "react";
import { Fieldset } from "ai-ui-kit";
import { Checkbox } from "ai-ui-kit";

const FieldsetTest = () => {
  const [selected, setSelected] = useState<string[]>([]);

  const handleChange = (value: string, checked: boolean) => {
    setSelected((prev) =>
      checked
        ? [...prev, value]
        : prev.filter((v) => v !== value)
    );
  };

  const hasError = selected.length === 0;

  return (
    <div>
      <Fieldset
        legend="Select at least one option"
        errorText={hasError ? "You must select at least one" : undefined}
      >
        <Checkbox
          label="Option 1"
          checked={selected.includes("1")}
          onCheckedChange={(e) =>
            handleChange("1", !!e.checked)
          }
        />

        <Checkbox
          label="Option 2"
          checked={selected.includes("2")}
          onCheckedChange={(e) =>
            handleChange("2", !!e.checked)
          }
        />
      </Fieldset>
    </div>
  );
};

export default FieldsetTest;