import { CloseButton } from "ai-ui-kit"
import { LuX } from "react-icons/lu"

const CloseButtonTest = () => {
  return (
    <>
      <div>CloseButtonTest</div>

      <CloseButton
        size="sm"
        variant="outline"
        colorPalette="red"
        isLoading={false}
        icon={<LuX />}
        disabled={false}
        className="m-2"
        onClick={() => console.log("close")}
      />

    </>
  )
}

export default CloseButtonTest