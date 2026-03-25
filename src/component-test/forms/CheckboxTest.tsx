import { Checkbox } from "ai-ui-kit";
import { useState } from "react";
import { FiCheckCircle } from "react-icons/fi";

const CheckboxTest = () => {

     const [agree, setAgree] = useState(false);
  return (
    <div>
 <p>CheckBox</p>
      <Checkbox
      label="I accept Terms & Conditions"
      description="Required to continue"
      checked={agree}
      onCheckedChange={(e) => setAgree(!!e.checked)}
       icon={<FiCheckCircle size={20} color="green" />}
    />
    </div>
  )
}

export default CheckboxTest
