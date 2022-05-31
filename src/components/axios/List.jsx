import EmptyUser from "../../assets/emptyuser.png";

export const List = ({ contactsList,handleDeleteData, setDataToEdit }) => {
    console.log(contactsList);
    return (
        <div className="contact__list">
            <h1>
                Contact <span className="list">List</span>{" "}
            </h1>
            {contactsList.map((contact) => (
                <div key={contact.id} className="contact__card">
                    {contact.photo ? (
                        <img src={contact.photo} alt="" />
                    ) : (
                        <img src={EmptyUser} alt="" />
                    )}<div className="data">
                        <p className="name">
                            {contact.name} /{" "}
                            <span>{contact.email ? contact.email : "N/A"}</span>
                        </p>

                        {contact.phone ? (
                            <p className="phone">
                                phone: <span>{contact.phone}</span>
                            </p>
                        ) : (
                            "N/A"
                        )}

                        {/* Edit button  */}
                        <i
                            onClick={() => setDataToEdit(contact)}
                            data-bs-toggle="modal"
                            data-bs-target="#editContact"
                            className="fa-solid fa-pen-to-square edit__icon"
                        ></i>
                        {/* Delete button  */}
                        <i
                            onClick={() => handleDeleteData(contact.id)}
                            className="fa-solid fa-trash delete__icon"
                        ></i>
                    </div>

                </div>
            ))}


        </div>
    )
}
