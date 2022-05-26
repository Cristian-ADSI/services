import EmptyUser from "../assets/emptyuser.png";
import "../styles/PageAxios.css";
import { useEffect, useState } from "react";
import AxiosService from "../service/AxiosService";
import { v4 as uuidv4 } from "uuid";

const initalFormData = {
  name: "",
  email: "",
  phone: "",
  photo: "",
};

const PageAxios = () => {
  const [contactsList, setContactsList] = useState([]);
  const [formData, setFormData] = useState(initalFormData);
  const [dataToEdit, setDataToEdit] = useState(initalFormData);

  const handleFormInputs = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleModalInputs = (e) => {
    setDataToEdit({
      ...dataToEdit,
      [e.target.name]: e.target.value,
    });
  };

  const handleGetData = async () => {
    try {
      const response = await AxiosService.get("/contacts");
      return response.data;
    } catch (error) {
      console.warn(error);
    }
  };
  const handleCreateData = async (contact) => {
    const data = {
      id: uuidv4(),
      ...contact,
    };

    try {
      const response = await AxiosService.post("/contacts", data);
      setContactsList([...contactsList, response.data]);
    } catch (err) {
      console.warn(err);
    }

    setFormData(initalFormData);
  };
  const handleDeleteData = async (id) => {
    try {
      await AxiosService.delete(`/contacts/${id}`);
      const newContactList = contactsList.filter((contact) => {
        return contact.id !== id;
      });
      setContactsList(newContactList);
    } catch (err) {
      console.warn(err);
    }
  };
  const handleUpdateData = async (contact) => {
    try {
      const response = await AxiosService.put(
        `/contacts/${contact.id}`,
        contact
      );
      setContactsList([...contactsList, response.data]);
      const { id, name, email, phone } = response.data;
      setContactsList(
        contactsList.map((contact) => {
          return contact.id === id ? { ...response.data } : contact;
        })
      );
    } catch (err) {
      console.warn(err);
    }

    setDataToEdit(initalFormData);
  };

  useEffect(() => {
    const getContacts = async () => {
      const contactsData = await handleGetData();
      contactsData && setContactsList(contactsData);
    };
    getContacts();
  }, []);

  useEffect(() => {
    formData.id ? setDataToEdit(formData) : setFormData(initalFormData);
  }, [dataToEdit]);

  return (
    <div className="axios__page">
      {/* List  */}
      <div className="contact__list">
        <h1>
          Contact <span className="list">List</span>{" "}
        </h1>

        {contactsList.length !== 0 ? (
          contactsList.map((contact) => (
            <div key={contact.id} className="contact__card">
              {contact.photo ? (
                <img src={contact.photo} alt="" />
              ) : (
                <img src={EmptyUser} alt="" />
              )}
              <div className="data">
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
              </div>
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
          ))
        ) : (
          <h2 className="empty__list-text">Not contacts added yet</h2>
        )}
      </div>
      {/* form  */}
      <div className="contact__form">
        <h1>
          Add <span className="form">New Contact</span>{" "}
        </h1>
        <form action="">
          {/* Name  */}
          <div className="input__text">
            <i className="fa-solid fa-user"></i>
            <input
              name="name"
              onChange={handleFormInputs}
              placeholder="Set the name"
              required
              type="text"
              value={formData.name}
            />
          </div>
          {/* Email  */}
          <div className="input__text">
            <i className="fa-solid fa-envelope"></i>
            <input
              name="email"
              onChange={handleFormInputs}
              placeholder="Presonal email"
              type="email"
              required
              value={formData.email}
            />
          </div>
          {/* Phone  */}
          <div className="input__text">
            <i className="fa-solid fa-phone"></i>
            <input
              name="phone"
              onChange={handleFormInputs}
              placeholder="Phone"
              required
              type="text"
              value={formData.phone}
            />
          </div>

          <button type="button" onClick={() => handleCreateData(formData)}>
            <span>Save</span>
          </button>
        </form>
      </div>
      {/* Modal  */}
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
    </div>
  );
};

export default PageAxios;
