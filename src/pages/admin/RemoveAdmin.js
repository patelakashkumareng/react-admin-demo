import React from "react";
import { Trash } from "react-feather";
import useHttp from "../../hooks/useHttp";
import { config } from "../../config";
import { toast } from "react-toastify";
import { Loading } from "../../components";

const RemoveAdmin = (props) => {
  const { isLoading, sendRequest, error } = useHttp();
  const removeAdminHandler = async (e) => {
    e.preventDefault();

    const adminId = props.adminId;

    const response = await sendRequest({
      url: config.API_BASE_URL + `/admin/${adminId}/delete`,
      method: "DELETE",
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
      props.onDeleteHandler();
    }
  };
  return (
    <>
      <a className="btn text-primary" href="/#" onClick={removeAdminHandler}>
        <Trash />
      </a>
      {isLoading && <Loading />}
    </>
  );
};

export default RemoveAdmin;
