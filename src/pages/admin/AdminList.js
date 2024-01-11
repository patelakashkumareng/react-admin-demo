import React, { useEffect, useState } from "react";
import ContentWrapper from "../../pages/base/ContentWrapper";
import Table from "../../components/UI/Table";
import useHttp from "../../hooks/useHttp";
import Pagination from "../../components/UI/Pagination";
import AdminListFilter from "./AdminListFilter";
import Loading from "../../components/UI/Loading";

const AdminList = (props) => {
  const PageTitle = props.title;
  const [adminList, setAdminList] = useState([]);
  const { isLoading, error, sendRequest: fetchData } = useHttp();

  const transformTask = (response) => {
    if(response.status !== 200){
      return
    }

    const apiData = response.data

    const data = apiData.map((data) => {
      return {
        username: data.Username,
        mobile: data.Mobile,
        role: data.Role,
        id: data.AdminID
      }
    })

    setAdminList(data);

  };

  useEffect(() => {
    fetchData(
      { url: "http://nodeadmin-api.twelfthman.io/api/admin/list",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: {}
      },
      transformTask
    );
  }, [fetchData]);

  const applyFilterHandler = (filterParams) => {
    const { keyword, status } = filterParams;
    let apiStatus = null;
    if (status === "INACTIVE") {
      apiStatus = 0;
    } else if (status === "ACTIVE") {
      apiStatus = 1;
    }
    console.log("filterParams", filterParams);
    fetchData(
      {
        url: "http://nodeadmin-api.twelfthman.io/api/admin/list",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: {
          filters: {
            keywords: keyword,
            status: apiStatus,
          },
        },
      },
      transformTask
    );
  };

  const tableObject = {
    header: [
      {
        fieldName: "id",
        uiName: "ID",
        order: 1,
      },
      {
        fieldName: "username",
        uiName: "Name",
        order: 2,
      },
      {
        fieldName: "mobile",
        uiName: "Mobile",
        order: 3,
      },
      {
        fieldName: "role",
        uiName: "Role",
        order: 4,
      },
    ],
    row: adminList,
  };

  return (
    <ContentWrapper>
      {PageTitle && <h1 className="h3 mb-3">{PageTitle}</h1>}
      <div className="row">
        <div className="col-12 col-xl-12">
          <div className="card">
            <div className="card-header">
              <h5 className="card-title">
                Basic Table
                <button className="btn btn-primary float-right">
                  Create {PageTitle}
                </button>
              </h5>
            </div>
            <div className="card-body">
              <AdminListFilter onApplyFilter={applyFilterHandler} />

              {/* <div className="card-header"></div> */}

              {!isLoading && adminList.length > 0 && (
                <Table tableData={tableObject} />
              )}
              {isLoading && <Loading />}
              {!isLoading && error && <p className="text-danger">{error}</p>}

              <div className="card-footer">
                <Pagination />
              </div>
            </div>
          </div>
        </div>
      </div>
    </ContentWrapper>
  );
};

export default AdminList;
