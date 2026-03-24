import { Clipboard } from "ai-ui-kit"

const ClipboardTest = () => {
  return (
    <>
      <div>ClipboardTest</div>

      <Clipboard
        value="https://example.com"
        type="button"
        buttonLabel="Copy link"
        timeout={3000}
      />

      <Clipboard
        value="Some text"
        type="input"
        label="Copy value"
      />

      <Clipboard
        value="https://google.com"
        type="link"
        linkAppearance
      />

    </>
  )
}

export default ClipboardTest