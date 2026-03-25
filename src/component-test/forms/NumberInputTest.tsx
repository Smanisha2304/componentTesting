import  { useState } from "react";
import { Input } from "ai-ui-kit";

const NumberInputTest = () => {
  const [number, setNumber] = useState(42); // pre-filled value
  

  return (
    <div style={{ maxWidth: 300, padding: 20 }}>
       <p>NumberInput</p>
      <Input
        type="number"                   // makes it a number input
        value={number}
        onChange={(e) => setNumber(Number(e.target.value))}
        placeholder="Enter a number"
        clearable                       // optional clear button
      />
    </div>
  );
};

export default NumberInputTest;