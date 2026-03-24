import { ModelEditor } from "ai-ui-kit" 

const ModelEditorTest = () => {


const handleSaveModel = (config: any) => console.log("Saved model config:", config)
  const handleCancelModel = () => console.log("Cancelled model editor")
  return (
    <div>
      <b><p>ModelEditor</p></b>

      <section style={{ marginTop: "30px" }}>
        <ModelEditor
          onSave={handleSaveModel}
          onCancel={handleCancelModel}
        />
      </section>
    </div>
  )
}

export default ModelEditorTest;
