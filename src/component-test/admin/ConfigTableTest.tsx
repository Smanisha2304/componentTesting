import { ConfigTable } from 'ai-ui-kit'

const ConfigTableTest = () => {

    const columns = [
    { key: "name", label: "Name" },
    { key: "model", label: "Model" },
    { key: "temperature", label: "Temperature" },
  ]

  const data = [
    { name: "Chat Bot", model: "gpt-4", temperature: 0.7 },
    { name: "Code AI", model: "gpt-4.1", temperature: 0.2 },
  ]


   const handleEdit = (row: any) => console.log("Edit:", row)
  const handleDelete = (row: any) => console.log("Delete:", row)
  return (
    <div>
      <b><p>ConfigTable</p></b>
      <br />

      <section>
        <ConfigTable
          columns={columns}
          data={data}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </section>
    </div>
  )
}

export default ConfigTableTest