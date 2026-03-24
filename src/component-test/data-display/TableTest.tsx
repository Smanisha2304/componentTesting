// import { Table } from "ai-ui-kit"

// const TableComponentTest = () => {
//   const data = [
//     { id: 1, name: "Punit", role: "Dev", salary: 5000 },
//     { id: 2, name: "Rahul", role: "Tester", salary: 4000 },
//     { id: 3, name: "Amit", role: "Manager", salary: 8000 },
//   ]

//   const columns = [
//     {
//       key: "id",
//       header: "ID",
//     },
//     {
//       key: "name",
//       header: "Name",
//     },
//     {
//       key: "role",
//       header: "Role",
//     },
//     {
//       key: "salary",
//       header: "Salary",
//       render: (value: number) => `$${value}`,
//     },
//   ]

//   return (
//     <>
//       <div>TableComponentTest</div>

//       <Table
//         data={data}
//         columns={columns}
//         caption="Employee Table"
//         striped
//         highlightOnHover
//         scrollProps={{ maxW: "600px" }}
//         pagination={{
//           page: 1,
//           pageSize: 2,
//           total: 6,
//           onPageChange: (p) => console.log(p),
//         }}
//       />

//     </>
//   )
// }

// export default TableComponentTest