import { LayoutShell } from "ai-ui-kit"

const LayoutShellTest = () => {
  return (
    <>
      <div>LayoutShellTest</div>

      <LayoutShell
        header={<div>Header Area</div>}
        sidebar={<div>Sidebar Area</div>}
        sidebarWidth="240px"
      >
        <div>
          Main Content Here
        </div>
      </LayoutShell>

    </>
  )
}

export default LayoutShellTest