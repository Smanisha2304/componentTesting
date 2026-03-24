import { PromptEditor } from "ai-ui-kit"

const PromptEditorTest = () => {

     const handleSavePrompt = (config: any) => console.log("Saved prompt:", config)
  const handleCancelPrompt = () => console.log("Cancelled prompt editor")
  return (
    <div>
      <b><p>PromptEditor</p></b>

      <section style={{ marginTop: "30px" }}>
        <PromptEditor
          onSave={handleSavePrompt}
          onCancel={handleCancelPrompt}
          initialValue={{
            title: "Example Prompt",
            description: "This is a sample description",
            prompt: "Write a short."
          }}
        />
      </section>
    </div>
  )
}

export default PromptEditorTest
