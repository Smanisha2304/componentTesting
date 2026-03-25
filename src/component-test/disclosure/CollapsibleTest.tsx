import { Collapsible } from "ai-ui-kit"

const CollapsibleTest = () => {
  return (
    <>
      <div>CollapsibleTest</div>

      <Collapsible
        title="Click me"
        showIndicator
        defaultOpen={false}
      >
        <div>Content inside collapsible</div>
      </Collapsible>

    </>
  )
}

export default CollapsibleTest