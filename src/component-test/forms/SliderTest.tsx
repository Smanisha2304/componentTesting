import { useState } from "react";
import { Field, Slider } from "ai-ui-kit";
// import "ai-ui-kit/dist/style.css";

const SliderTest = () => {
  const [values, setValues] = useState<number[]>([50]);
 
  return (
    <div style={{ maxWidth: 400, padding: 20 }}>
      <p>Slider</p>
      <Field label="Select a value" helperText="Drag the slider">
        <Slider
          value={values}
          onValueChange={(details) => setValues(details.value)}
          min={0}
          max={100}
          step={1}
          showValue
          style={{ width: "100%" }}
        />
        <p>Selected Value: {values[0]}</p>
      </Field>
    </div>
  );
};

export default SliderTest;
