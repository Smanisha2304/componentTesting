import  { useState } from "react";
import { Input } from "ai-ui-kit";

const PasswordInputTest = () => {
  const [password, setPassword] = useState("test123"); // pre-filled password
 
  return (
    <div style={{ maxWidth: 300, padding: 20 }}>
      <p>PasswordInput</p>
      <Input
        value={password}                   // controlled value
        onChange={(e) => setPassword(e.target.value)}
        isPassword                          // enables show/hide toggle
        clearable                            // adds clear button
        placeholder="Enter password"
      />
    </div>
  );
};

export default PasswordInputTest;