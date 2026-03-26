import { TableComponent } from "ai-ui-kit";

type User = {
    id: number;
    name: string;
    age: number;
    status: "active" | "inactive";
};

const fullData: User[] = Array.from({ length: 25 }).map((_, i) => ({
    id: i + 1,
    name: `User ${i + 1}`,
    age: 20 + (i % 10),
    status: i % 2 === 0 ? "active" : "inactive",
}));

const TableKitTest = () => {


    return (
        <>
            <p>Table Component Test</p>
            <TableComponent
                data={fullData}

                /* ✅ root props (TableRootProps) */
                variant="outline"
                size="sm"
                striped


                /* ✅ caption */
                caption="User Management Table"
                captionProps={{
                    textAlign: "center",
                    fontWeight: "bold",
                }}

                /* ✅ columns */
                columns={[
                    {
                        key: "id",
                        header: "ID",
                        headerProps: { textAlign: "center" },
                        cellProps: { textAlign: "center" },
                    },
                    {
                        key: "name",
                        header: "Name",
                        render: (value) => <b>{value}</b>,
                    },
                    {
                        key: "age",
                        header: "Age",
                        render: (value) => `${value} yrs`,
                    },
                    {
                        key: "status",
                        header: "Status",
                        render: (value) => (
                            <span
                                style={{
                                    color: value === "active" ? "green" : "red",
                                    fontWeight: 600,
                                }}
                            >
                                {value}
                            </span>
                        ),
                    },
                ]}

                /* ✅ section props */
                headerProps={{
                    bg: "gray.100",
                }}
                bodyProps={{
                    bg: "white",
                }}
                rowProps={{
                    _hover: { bg: "gray.50" },
                }}

                /* ✅ scroll */
                scrollProps={{
                    maxH: "250px",
                    borderWidth: "1px",
                }}



            /> </>
    );
};

export default TableKitTest;