import React from "react";
import { ToggleLeft, ToggleRight } from "react-feather";
import useHttp from "../../hooks/useHttp";
import { Loading } from "../../components";
import { config } from "../../config";
import { toast } from "react-toastify";

const BannerStatus = (props) => {
  const { isLoading, error, sendRequest } = useHttp();

  const changeStatusHandler = async (e) => {
    e.preventDefault();
    const bannerId = props.id;

    const response = await sendRequest({
      url: config.API_BASE_URL + `/banner/${bannerId}/change-status`,
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
        {props.status === "active" ? (
          <ToggleRight opacity={4} />
        ) : (
          <ToggleLeft />
        )}
      </a>
      {isLoading && <Loading />}
    </>
  );
};

export default BannerStatus;
