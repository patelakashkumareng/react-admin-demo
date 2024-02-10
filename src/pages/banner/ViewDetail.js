import { Eye } from "react-feather";
import { config } from "../../config";
import Modal from "../../components/UI/Modal";
import { Loading } from "../../components";
import { useState } from "react";
import useHttp from "../../hooks/useHttp";
import ViewTable from "../../components/UI/ViewTable";

const ViewDetail = (props) => {
  const [res, setRes] = useState(null);
  const { isLoading, error: viewError, sendRequest } = useHttp();
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

      const data = {
        BannerID: response?.data?.BannerID,
        BannerType: response?.data?.Type,
        BannerName: response?.data?.Name,
        URL: (
          <a
            href={`https://twelfthman-dev.s3.ap-south-1.amazonaws.com/upload/banner/${response?.data?.BannerURL}`}
            target="__blank"
          >
            {response?.data?.BannerURL || "Not required"}
          </a>
        ),
        BannerImage: (
          <div>
            <a
              href={`https://twelfthman-dev.s3.ap-south-1.amazonaws.com/upload/banner/${response?.data?.BannerImage}`}
              target="__blank"
            >
              <img
                src={`https://twelfthman-dev.s3.ap-south-1.amazonaws.com/upload/banner/${response?.data?.BannerImage}`}
                alt={`${response?.data?.BannerImage}`}
                style={{ maxWidth: "250px", maxHeight: "75px" }}
              />
            </a>
          </div>
        ),
        BannerUsedIN: response?.data?.BannerUsedIn,
        Screen: response?.data?.AppScreenID || "Not Required",
        CreatedAt: response?.data?.DateCreated || "",
      };
      setRes(data);
      setShow(true);
    } catch (error) {
      //
      console.log(error);
    }
  };
  return (
    <>
      <a href="/#" onClick={viewHandler}>
        <Eye />
      </a>
      {res && show && !isLoading && (
        <Modal title="Banner Detail" onClose={onCloseHandler}>
          <ViewTable
            headColumn={["Properties", "value"]}
            rows={res}
            isShowTabularUI={false}
          />
        </Modal>
      )}
      {isLoading && <Loading />}
      {viewError && <p className="error">Error In View Details {viewError} </p>}
    </>
  );
};

export default ViewDetail;
