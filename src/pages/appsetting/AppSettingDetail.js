import React, { useState } from "react";
import useHttp from "../../hooks/useHttp";
import { config } from "../../config";
import Modal from "../../components/UI/Modal";
import ViewTable from "../../components/UI/ViewTable";
import { Loading } from "../../components";
import { Eye } from "react-feather";

const AppSettingDetail = (props) => {
  const { response, error, sendRequest, isLoading } = useHttp();
  const [show, setShow] = useState(true);
  const onCloseHandler = () => {
    setShow(false);
  };
  const viewHandler = async (event) => {
    try {
      event.preventDefault();
      const id = props.id;

      const response = await sendRequest({
        url: config.API_BASE_URL + `/app-setting/${id}/details`,
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response || response.status !== 200) {
        return;
      }

      setShow(true);
    } catch (error) {
      console.log("error: ", error);
    }
  }

  if(typeof(response?.data?.Data) === "object"){
    response.data.Data = JSON.stringify(response?.data?.Data)
  }
  return (
    <div>
      <a href="/#" onClick={viewHandler}>
        <Eye />
      </a>
      {response && show && !isLoading && (
        <Modal title="Banner Detail" onClose={onCloseHandler}>
          <ViewTable
            headColumn={["Properties", "value"]}
            rows={response?.data}
            isShowTabularUI={true}
          />
        </Modal>
      )}
      {isLoading && <Loading />}
      {error && <p className="error">Error In View Details {error} </p>}
    </div>
  );
};

export default AppSettingDetail;
