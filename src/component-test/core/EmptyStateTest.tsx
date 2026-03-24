import { EmptyState } from "ai-ui-kit"
import { FiInbox } from "react-icons/fi"

const EmptyStateTest = () => {
  return (
    <>
      <p>EmptyState Test</p>

      <EmptyState
        title="No data found"
        description="Create new item to see it here"
        icon={FiInbox}
        actionLabel="Create"
        onAction={() => alert("clicked")}
      />

    </>
  )
}

export default EmptyStateTest