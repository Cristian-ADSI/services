import { TableRow } from "./TableRow"
export const Table = ({ tableData ,handleDelete,setDataToEdit }) => {
    return (
        <div>

            <div className=" container mt-3">
                <h3>Tabla de Datos</h3>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Location</th>
                            <th>Email</th>
                            <th className="text-center">Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {tableData.length === 0 ? (
                            <tr>
                                <td className="text-center" colSpan={12}>
                                    sin datos
                                </td>
                            </tr>
                        ) : (
                            tableData.map((company, index) => (
                                <TableRow
                                    key={company.id}
                                    company={company}
                                    setDataToEdit={setDataToEdit}
                                    handleDelete={handleDelete}
                                />
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
