import { fetchService } from "../service/FetchService";
import { Modal } from "../components/fetch/Modal";
import { Table } from "../components/fetch/Table";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

export const PageFetch = () => {
  let url = "http://localhost:5000/companies";
  let httpService = fetchService();

  const [tableData, setTableData] = useState();
  const [dataToEdit, setDataToEdit] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchService()
      .get(url)
      .then((resp) => {
        if (resp.err) {
          setError(resp);
          setTableData(null);
        } else {
          console.log(resp);
          setTableData(resp);
          setError(null);
        }
        setTimeout(() => {
          setLoading(false);
        }, 3000);
      });
  }, [url]);

  const handleDelete = (id) => {
    let endpoint = `${url}/${id}`;
    let isDelete = window.confirm(
      `Estas seguro de eliminar el registro ??${id}`
    );

    let options = {
      headers: { "content-type": "application/json" },
    };

    if (isDelete) {
      httpService.del(endpoint, options).then((resp) => {
        // console.log(resp);
        if (resp.err) {
        } else {
          let newData = tableData.filter((e) => e.id !== id);
          setTableData(newData);
        }
      });
    } else {
      return;
    }
  };

  const handleCreateData = (formData) => {
    formData.id = uuidv4();
    const endPoint = url;
    const options = {
      body: formData,
      headers: { "content-type": "application/json" },
    };

    httpService.post(endPoint, options).then((resp) => {
      resp.err ? setError(resp) : setTableData([...tableData, resp]);
    });
  };

  const handleUpdateData = (formData) => {
    const endPoint = `${url}/${formData.id}`;
    const options = {
      body: formData,
      headers: { "content-type": "application/json" },
    };

    httpService.put(endPoint, options).then((resp) => {
      console.log(resp);
      if (resp.err) {
        setError(resp);
      } else {
        const newTablData = tableData.map((company) =>
          company.id === formData.id ? formData : company
        );
        setTableData(newTablData);
      }
    });
  };

  return (
    <div>
      {tableData && (
        <Table
          handleDelete={handleDelete}
          tableData={tableData}
          setDataToEdit={setDataToEdit}
        />
      )}

      <Modal
        dataToEdit={dataToEdit}
        handleUpdateData={handleUpdateData}
        handleCreateData={handleCreateData}
        setDataToEdit={setDataToEdit}
      />
    </div>
  );
};
