import React from "react";
import { Trash } from "react-feather";
import useHttp from "../../hooks/useHttp";
import { config } from "../../config";
import { toast } from "react-toastify";
import { Loading } from "../../components";

const RemoveBanner = (props) => {
  const { isLoading, sendRequest, error } = useHttp();
  const removeAdminHandler = async (e) => {
    e.preventDefault();

    const bannerId = props.id;

    const response = await sendRequest({
      url: config.API_BASE_URL + `/banner/${bannerId}/delete`,
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

export default RemoveBanner;
