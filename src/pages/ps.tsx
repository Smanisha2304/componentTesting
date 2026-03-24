import EmptyStateTest from "../component-test/core/EmptyStateTest"
import ErrorStateTest from "../component-test/core/ErrorStateTest"
import LayoutShellTest from "../component-test/core/LayoutShellTest"
import LoaderTest from "../component-test/core/LoaderTest"
// import AvatarTest from "../component-test/data-display/AvatarTest"

const PS = () => {
  return (
    <>
      {/* Core Components */}
      <LoaderTest />
      <ErrorStateTest />
      <EmptyStateTest />
      <LayoutShellTest />

      {/* Display Components */}
      {/* <AvatarTest /> */}
    </>
  )
}

export default PS