import { useEffect, useState } from "react"

const initialData = {
    companyname: "",
    location: "",
    email: "",
    contact: {
        contactname: "",
        contactemail: "",
        contactphone: "",
    }
}

export const Modal = ({ handleUpdateData, dataToEdit }) => {
    const [modalData, setModalData] = useState(initialData)

    const handleModalInputs = (e) => {

        if (e.target.name === "contactname") {
            setModalData({
                ...modalData, contact: {
                    ...modalData.contact,
                    [e.target.name]: e.target.value
                }
            });
        } else {
            setModalData({
                ...modalData,
                [e.target.name]: e.target.value,
            });
        }
    }

    useEffect(() => {
        dataToEdit ? setModalData(dataToEdit) : setModalData(initialData)
    }, [dataToEdit])

    return (
        <div
            className="modal fade"
            id="editCompany"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabIndex="-1"
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
        >
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="moda__title" id="staticBackdropLabel">
                            Edit <span>Company</span>
                        </h5>
                        {/* Close Button  */}
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>
                    </div>
                    <div className="modal-body">
                        <form action="">
                            <div className="input-group">

                                {/* Name  */}
                                <div className="input__text">
                                    <input
                                        name="companyname"
                                        onChange={handleModalInputs}
                                        placeholder="Set the name"
                                        required
                                        type="text"
                                        value={modalData.companyname}
                                    />

                                </div>
                                {/* Email  */}
                                <div className="input__text">
                                    <input
                                        name="email"
                                        onChange={handleModalInputs}
                                        placeholder="Company email"
                                        type="email"
                                        required
                                        value={modalData.email}
                                    />
                                </div>
                            </div>

                            <div className="input-group">
                                {/* Location  */}
                                <div className="input__text">
                                    <input
                                        name="location"
                                        onChange={handleModalInputs}
                                        placeholder="Location"
                                        required
                                        type="text"
                                        value={modalData.location}
                                    />
                                </div>
                                {/* Contact Name  */}
                                <div className="input__text">
                                    <input
                                        name="contactname"
                                        onChange={handleModalInputs}
                                        placeholder="Contact Name"
                                        required
                                        type="text"
                                        value={modalData.contact.contactname}
                                    />
                                </div>
                            </div>

                            <div className="input-group">
                                {/* Contact Email  */}
                                <div className="input__text">
                                    <input
                                        name="phone"
                                        onChange={handleModalInputs}
                                        placeholder="Contact Email"
                                        required
                                        type="text"
                                        value={modalData.contact.contactemail}
                                    />
                                </div>
                                {/* Contact phone  */}
                                <div className="input__text">
                                    <input
                                        name="phone"
                                        onChange={handleModalInputs}
                                        placeholder="Contact Phone"
                                        required
                                        type="text"
                                        value={modalData.contact.contactphone}
                                    />
                                </div>
                            </div>

                        </form>
                    </div>
                    <div className="modal-footer">
                        {/* Footer close btn  */}
                        <button
                            type="button"
                            className="btn btn-danger"
                            data-bs-dismiss="modal"
                        >
                            Close
                        </button>
                        {/* Footer update btn  */}
                        <button
                            data-bs-dismiss="modal"
                            onClick={() => handleUpdateData(dataToEdit)}
                            type="button"
                            className="btn btn-primary"
                        >
                            Update
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
