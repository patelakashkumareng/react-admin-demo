import { Eye } from "react-feather";
import { config } from "../../config";
import Modal from "../../components/UI/Modal";
import { Loading } from "../../components";
import { useState } from "react";
import useHttp from "../../hooks/useHttp";

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
      const id = props.adminId;

      const response = await sendRequest({
        url: config.API_BASE_URL + `/admin/${id}/details`,
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
      console.log("Error In Catch Block");
      console.log(error);
    }
  };
  return (
    <>
      <a href="/#" onClick={viewHandler}>
        <Eye />
      </a>
      {data && show && !isLoading && (
        <Modal title="Admin Detail" onClose={onCloseHandler}>
          <div className={"col-12 col-xl-15"}>
            <div className="card">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th
                      className={"font-weight-bolder h4"}
                      style={{ width: "40%" }}
                    >
                      Properties
                    </th>
                    <th
                      className={"font-weight-bolder h4"}
                      style={{ width: "25%" }}
                    >
                      Detail
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className={"font-weight-bolder"}>AdminID</td>
                    <td className={"d-none d-md-table-cell"}>{data.AdminID}</td>
                  </tr>
                  <tr>
                    <td className={"font-weight-bolder"}>Username</td>
                    <td className={"d-none d-md-table-cell"}>
                      {data.Username}
                    </td>
                  </tr>
                  <tr>
                    <td className={"font-weight-bolder"}>Mobile</td>
                    <td className={"d-none d-md-table-cell"}>{data.Mobile}</td>
                  </tr>
                  <tr>
                    <td className={"font-weight-bolder"}>Email</td>
                    <td className={"d-none d-md-table-cell"}>{data.Email}</td>
                  </tr>
                  <tr>
                    <td className={"font-weight-bolder"}>FirstName</td>
                    <td className={"d-none d-md-table-cell"}>
                      {data.FirstName}
                    </td>
                  </tr>
                  <tr>
                    <td className={"font-weight-bolder"}>LastName</td>
                    <td className={"d-none d-md-table-cell"}>
                      {data.LastName}
                    </td>
                  </tr>
                  <tr>
                    <td className={"font-weight-bolder"}>MasterAdmin</td>
                    <td className={"d-none d-md-table-cell"}>
                      {data.MasterAdmin ? "Yes" : "No"}
                    </td>
                  </tr>
                  <tr>
                    <td className={"font-weight-bolder"}>Role</td>
                    <td className={"d-none d-md-table-cell"}>{data.Role}</td>
                  </tr>
                  <tr>
                    <td className={"font-weight-bolder"}>Status</td>
                    <td className={"d-none d-md-table-cell"}>
                      {data.Status ? "Active" : "Inactive"}
                    </td>
                  </tr>
                  <tr>
                    <td className={"font-weight-bolder"}>DateCreated</td>
                    <td className={"d-none d-md-table-cell"}>
                      {data.DateCreated}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </Modal>
      )}
      {isLoading && <Loading />}
      {viewError && <p>Error In View {viewError} </p>}
    </>
  );
};

export default ViewDetail;
