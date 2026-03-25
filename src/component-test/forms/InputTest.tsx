import { useState } from "react";
import { Input } from "ai-ui-kit";

const InputTest = () => {
   
  const [text, setText] = useState("test"); // <-- default value "test"

  return (
    <div style={{ maxWidth: 300 }}>
      <p>Input</p>
      <Input
        value={text}                       // controlled value
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something..."
        clearable
      />
    </div>
  );
};

export default InputTest;