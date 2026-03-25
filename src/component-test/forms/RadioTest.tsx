import { useState } from "react";
import { Field, RadioGroup } from "ai-ui-kit";

const RadioTest = () => {
  const [selected, setSelected] = useState<string | null>("option1");

  return (
    <div>
       <p>Radio</p>
    <Field
      label="Choose an option"
      helperText="Select one of the options below"
    >
      <RadioGroup
        value={selected}
        onValueChange={(details) => setSelected(details.value)}
        direction="column"
        gap={8}
        options={[
          { label: "Option 1", value: "option1" },
          { label: "Option 2", value: "option2" },
          { label: "Option 3", value: "option3" },
        ]}
      />

      <p>Selected: {selected ?? "none"}</p>
    </Field>
    </div>
  );
};

export default RadioTest;
