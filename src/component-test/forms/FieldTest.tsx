import { Field } from "ai-ui-kit";
import { Input } from "@chakra-ui/react"

const FieldTest = () => {

    const fieldProps = {
  label: "Username",
  helperText: "Your username must be unique",
  required: true,
};

  return (
    <div>
      
<Field {...fieldProps}>
  <Input placeholder="Username" />
</Field>
    </div>
  )
}

export default FieldTest
