
import "../styles/PageAxios.css";
import AxiosService from "../service/AxiosService";
import { Modal } from "../components/axios/Modal";
import { List } from "../components/axios/List";
import { v4 as uuidv4 } from "uuid";
import { useEffect, useState } from "react";
import { Form } from "../components/axios/Form";

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
      const { id } = response.data;
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
      <List
        contactsList={contactsList}
        setDataToEdit={setDataToEdit}
        handleDeleteData={handleDeleteData}
      />
      {/* form  */}
      <Form
        formData={formData}
        handleCreateData={handleCreateData}
        handleFormInputs={handleFormInputs} />
      {/* Modal  */}
      <Modal
        dataToEdit={dataToEdit}
        handleUpdateData={handleUpdateData}
        handleModalInputs={handleModalInputs}
      />
    </div>
  );
};

export default PageAxios;
