

export const TableRow = ({ setDataToEdit, deleteData, company }) => {
    let { companyname, location, email, id } = company;
    return (
        <tr>
            <td>{companyname}</td>
            <td>{location}</td>
            <td>{email}</td>

            <td className="d-flex justify-content-evenly">
                <button className="btn btn-primary me-1 ms-1" onClick={() => setDataToEdit(company)}>Contact</button>
                <button
                    data-bs-toggle="modal"
                    data-bs-target="#editCompany"
                    className="btn btn-success me-1 ms-1"
                    onClick={() => setDataToEdit(company)}>Update</button>
                <button className="btn btn-danger me-1 ms-1" onClick={() => deleteData(id)}>Delete</button>
            </td>
        </tr>
    )
}
