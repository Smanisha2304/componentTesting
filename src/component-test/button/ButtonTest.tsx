import { Button } from "ai-ui-kit"
import { LuPlus, LuArrowRight } from "react-icons/lu"

const ButtonTest = () => {
  return (
    <>
      <div>ButtonTest</div>

      <Button
        variant="solid"
        size="md"
        colorPalette="blue"
        isLoading={false}
        disabled={false}
        leftIcon={<LuPlus />}
        rightIcon={<LuArrowRight />}
        className="m-2"
        onClick={() => console.log("clicked")}
      >
        Click Me
      </Button>

    </>
  )
}

export default ButtonTest