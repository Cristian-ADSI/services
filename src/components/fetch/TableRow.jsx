export const TableRow = ({ setDataToEdit, deleteData, company, handleDelete }) => {
  let {
    id,
    companyname,
    location,
    email,
    contact: { contactname, contactemail, contactphone },
  } = company;

  const handleContact = () => {
    setDataToEdit({
      id: id,
      companyname: companyname,
      location: location,
      contact: {
        contactname: contactname,
        contactemail: contactemail,
        contactphone: contactphone,
      },
      watch: true,
    });
  };

  return (
    <tr>
      <td>{companyname}</td>
      <td>{location}</td>
      <td>{email}</td>

      <td className="d-flex justify-content-evenly">
        <button
          data-bs-toggle="modal"
          data-bs-target="#editCompany"
          className="btn btn-primary me-1 ms-1"
          onClick={() => handleContact()}
        >
          Contact
        </button>
        <button
          data-bs-toggle="modal"
          data-bs-target="#editCompany"
          className="btn btn-success me-1 ms-1"
          onClick={() => setDataToEdit(company)}
        >
          Update
        </button>
        <button
          className="btn btn-danger me-1 ms-1"
          onClick={() => handleDelete(id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};
