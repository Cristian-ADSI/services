import { useEffect, useState } from "react";

const initialData = {
  id: null,
  companyname: "",
  location: "",
  email: "",
  contact: {
    contactname: "",
    contactemail: "",
    contactphone: "",
  },
};

export const Modal = ({
  handleUpdateData,
  dataToEdit,
  handleCreateData,
  setDataToEdit,
}) => {
  const [modalForm, setModalForm] = useState(initialData);

  const handleChangeInputs = (e) => {
    if (
      e.target.name === "contactname" ||
      e.target.name === "contactemail" ||
      e.target.name === "contactphone"
    ) {
      setModalForm({
        ...modalForm,
        contact: {
          ...modalForm.contact,
          [e.target.name]: e.target.value,
        },
      });
    } else {
      setModalForm({
        ...modalForm,
        [e.target.name]: e.target.value,
      });
    }
  };
  const handleRestIputs = () => {
    setTimeout(() => {
      setDataToEdit(initialData);
    }, 500);
  };
  const handleSubmitForm = (e) => {
    e.preventDefault();
    const fields = emptyFields();
    if (fields) return "Campos vacios";

    if (modalForm.id) {
      handleUpdateData(modalForm);
    } else {
      handleCreateData(modalForm);
    }
    handleRestIputs();
  };

  const emptyFields = () => {
    const {
      companyname,
      email,
      location,
      contact: { contactname, contactemail, contactphone },
    } = modalForm;
    if (
      companyname &&
      email &&
      location &&
      contactname &&
      contactemail &&
      contactphone
    ) {
      return false;
    } else {
      return true;
    }
  };

  useEffect(() => {
    dataToEdit ? setModalForm(dataToEdit) : setModalForm(initialData);
  }, [dataToEdit]);

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
            {!modalForm.watch && (
              <h5 className="moda__title" id="staticBackdropLabel">
                {modalForm.id ? "Edit " : "Create "}
                <span>Company</span>
              </h5>
            )}
            {/* Close Button  */}
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={() => handleRestIputs()}
            ></button>
          </div>
          <div className={`modal-body ${modalForm.watch}`}>
            <form action="">
              <div className="input-group">
                {/* Name  */}
                <div className="input__text">
                  <input
                    name="companyname"
                    onChange={handleChangeInputs}
                    placeholder="Set the name"
                    required
                    type="text"
                    value={modalForm.companyname}
                  />
                </div>
                {/* Email  */}
                <div className="input__text">
                  <input
                    name="email"
                    onChange={handleChangeInputs}
                    placeholder="Company email"
                    type="email"
                    required
                    value={modalForm.email}
                  />
                </div>
              </div>

              <div className="input-group">
                {/* Location  */}
                <div className="input__text">
                  <input
                    name="location"
                    onChange={handleChangeInputs}
                    placeholder="Location"
                    required
                    type="text"
                    value={modalForm.location}
                  />
                </div>
                {/* Contact Name  */}
                <div className="input__text">
                  <input
                    name="contactname"
                    onChange={handleChangeInputs}
                    placeholder="Contact Name"
                    required
                    type="text"
                    value={modalForm.contact.contactname}
                  />
                </div>
              </div>

              <div className="input-group">
                {/* Contact Email  */}
                <div className="input__text">
                  <input
                    name="contactemail"
                    onChange={handleChangeInputs}
                    placeholder="Contact Email"
                    required
                    type="email"
                    value={modalForm.contact.contactemail}
                  />
                </div>
                {/* Contact phone  */}
                <div className="input__text">
                  <input
                    name="contactphone"
                    onChange={handleChangeInputs}
                    placeholder="Contact Phone"
                    required
                    type="text"
                    value={modalForm.contact.contactphone}
                  />
                </div>
              </div>
            </form>
          </div>
          <div className="modal-footer">
            {/* Footer close btn  */}
            <button
              className="btn btn-danger"
              type="button"
              data-bs-dismiss="modal"
              onClick={() => handleRestIputs()}
            >
              Close
            </button>
            {!modalForm.watch && (
              <button
                className="btn btn-primary"
                data-bs-dismiss="modal"
                onClick={(e) => handleSubmitForm(e)}
                type="submit"
              >
                {modalForm.id ? "Update " : "Create "}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
