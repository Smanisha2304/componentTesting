import { DataList } from "ai-ui-kit"

const DataListTest = () => {
  return (
    <>
      <div>DataListTest</div>

      <DataList
        items={[
          { label: "Name", value: "Punit" },
          { label: "Role", value: "Developer" },
          { label: "Status", value: "Active" },
        ]}
      />

    </>
  )
}

export default DataListTest