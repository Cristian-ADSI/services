import { useState, useEffect } from "react"
import { fetchService } from "../service/FetchService";
import { Table } from "../components/fetch/Table";
import { Modal } from "../components/fetch/Modal";
export const PageFetch = () => {
    let url = "http://localhost:5000/companies";
    let httpService = fetchService()

    const [tableData, setTableData] = useState()
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
    return (
        <div>
            {tableData && <Table
                handleDelete={handleDelete}
                tableData={tableData}
                setDataToEdit={setDataToEdit} />
            }

            <Modal dataToEdit={dataToEdit} />

        </div>
    )
}
