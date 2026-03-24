import EmptyStateTest from "../component-test/core/EmptyStateTest"
import ErrorStateTest from "../component-test/core/ErrorStateTest"
import LayoutShellTest from "../component-test/core/LayoutShellTest"
import LoaderTest from "../component-test/core/LoaderTest"

const PS = () => {
  return (<>
    {/* Core Components */}
    <LoaderTest />
    <ErrorStateTest />
    <EmptyStateTest />
    <LayoutShellTest />
  </>
  )
}

export default PS