import { Eye } from "react-feather";
import { config } from "../../config";
import Modal from "../../components/UI/Modal";
import { Loading } from "../../components";
import { useState } from "react";
import useHttp from "../../hooks/useHttp";
import ViewTable from "../../components/UI/ViewTable";

const ViewDetail = (props) => {
  const { isLoading, error: viewError, sendRequest, response } = useHttp();

  const data = response?.data || null;

  const [show, setShow] = useState(true);
  const onCloseHandler = () => {
    setShow(false);
  };

  const viewHandler = async (event) => {
    try {
      event.preventDefault();
      const id = props.id;

      const response = await sendRequest({
        url: config.API_BASE_URL + `/banner/${id}/details`,
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response || response.status !== 200) {
        return;
      }

      console.log('res: ', response);

      setShow(true);
    } catch (error) {
      //
      console.log(error)
    }
  };
  return (
    <>
      <a href="/#" onClick={viewHandler}>
        <Eye />
      </a>
      {data && show && !isLoading && (
        <Modal title="Banner Detail" onClose={onCloseHandler}>
          <ViewTable headColumn={["Properties", "value"]} rows={response?.data}/>
        </Modal>
      )}
      {isLoading && <Loading />}
      {viewError && <p>Error In View {viewError} </p>}
    </>
  );
};

export default ViewDetail;
