import React from "react";
import { Check, XCircle } from "react-feather";
import useHttp from "../../hooks/useHttp";
import { Loading } from "../../components";
import { config } from "../../config";
import { toast } from "react-toastify";

const AdminStatus = (props) => {
  const { isLoading, error, sendRequest } = useHttp();

  console.log("props: ", props);

  const changeStatusHandler = async (e) => {
    e.preventDefault();
    const adminId = props.adminId;

    const response = await sendRequest({
      url: config.API_BASE_URL + `/admin/${adminId}/change-status`,
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response || response.status !== 200) {
      return;
    }

    if (!isLoading && error) {
      toast.error(error, config.TOAST_UI);
    }
    if (!isLoading && !error && response) {
      toast.success(response.message, config.TOAST_UI);
      props.onStatusChange();
    }
  };
  return (
    <>
      <a className="btn text-primary" href="/#" onClick={changeStatusHandler}>
        {props.status === "active" ? <XCircle /> : <Check />}
      </a>
      {isLoading && <Loading />}
    </>
  );
};

export default AdminStatus;
