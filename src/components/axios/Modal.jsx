export const Modal = ({ handleUpdateData, dataToEdit, handleModalInputs }) => {
    return (
        <div
            className="modal fade"
            id="editContact"
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
                            Edit <span>Contact</span>
                        </h5>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>
                    </div>
                    <div className="modal-body">
                        <form action="">
                            {/* Name  */}
                            <div className="input__text">
                                <i className="fa-solid fa-user"></i>
                                <input
                                    name="name"
                                    onChange={handleModalInputs}
                                    placeholder="Set the name"
                                    required
                                    type="text"
                                    value={dataToEdit.name}
                                />
                            </div>
                            {/* Email  */}
                            <div className="input__text">
                                <i className="fa-solid fa-envelope"></i>
                                <input
                                    name="email"
                                    onChange={handleModalInputs}
                                    placeholder="Presonal email"
                                    type="email"
                                    required
                                    value={dataToEdit.email}
                                />
                            </div>
                            {/* Phone  */}
                            <div className="input__text">
                                <i className="fa-solid fa-phone"></i>
                                <input
                                    name="phone"
                                    onChange={handleModalInputs}
                                    placeholder="Phone"
                                    required
                                    type="text"
                                    value={dataToEdit.phone}
                                />
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button
                            type="button"
                            className="btn btn-danger"
                            data-bs-dismiss="modal"
                        >
                            Close
                        </button>
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
