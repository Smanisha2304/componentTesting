import { IconButton } from "ai-ui-kit"
import { LuHeart } from "react-icons/lu"

const IconButtonTest = () => {
  return (
    <>
      <div>IconButtonTest</div>

      <IconButton
        size="md"
        variant="solid"
        colorPalette="blue"
        isLoading={false}
        icon={<LuHeart />}
        disabled={false}
        className="m-2"
        onClick={() => console.log("click")}
      />

    </>
  )
}

export default IconButtonTest