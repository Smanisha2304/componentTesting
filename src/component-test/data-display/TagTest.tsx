import { Tag } from "ai-ui-kit"
import { LuUser, LuCheck } from "react-icons/lu"

const TagTest = () => {
  return (
    <>
      <div>TagTest</div>

      <Tag
        label="Default"
      />

      <Tag
        label="Solid"
        variant="solid"
        colorPalette="blue"
      />

      <Tag
        label="With icon"
        startIcon={<LuUser />}
      />

      <Tag
        label="End icon"
        endIcon={<LuCheck />}
      />

      <Tag
        label="Closable"
        isClosable
        onClose={() => console.log("closed")}
      />

      <Tag
        label="Large"
        size="lg"
        variant="outline"
        colorPalette="green"
      />

    </>
  )
}

export default TagTest