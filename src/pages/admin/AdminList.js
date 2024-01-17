import React, { useEffect, useState, useMemo, useCallback } from "react";
import { useSearchParams } from "react-router-dom";
import ContentWrapper from "../../pages/base/ContentWrapper";
import Table from "../../components/UI/Table";
import useHttp from "../../hooks/useHttp";
import Pagination from "../../components/UI/Pagination";
import AdminListFilter from "./AdminListFilter";
import Loading from "../../components/UI/Loading";

import { PER_PAGE } from "../../config/constant";

const parseAdminStatusToApp = (status) => {
  return status ? "active" : "inactive";
};

const parseAdminStatusToApi = (status) => {
  let apiStatus = null;
  if (status === "inactive") {
    apiStatus = 0;
  } else if (status === "active") {
    apiStatus = 1;
  }
  return apiStatus;
};

const AdminList = (props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(PER_PAGE);
  const [adminList, setAdminList] = useState([]);
  const [totalRecords, settotalRecords] = useState(0);

  const { isLoading, error, sendRequest: fetchData } = useHttp();

  let [searchParams, setSearchParams] = useSearchParams();

  const PageTitle = props.title;

  const recordsInCurrentPage = adminList.length;

  const getQueryParams = useCallback((searchParams) => {
    const result = Object.fromEntries([...searchParams]);
    return result;
  }, []);

  const queryParams = useMemo(
    () => getQueryParams(searchParams),
    [searchParams, getQueryParams]
  );

  useEffect(() => {
    const per_page = queryParams.per_page || PER_PAGE;
    const keyword = queryParams.keyword;
    const status = parseAdminStatusToApi(queryParams.status);
    const page = queryParams.page;

    const apiRequestParams = {
      filters: {},
      per_page,
    };

    if (keyword) {
      apiRequestParams["filters"]["keyword"] = keyword;
    }

    if (status != null) {
      apiRequestParams["filters"]["status"] = status;
    }

    if (page) {
      apiRequestParams["page"] = page;
    }

    const fetchList = async () => {
      const response = await fetchData({
        url: "http://nodeadmin-api.twelfthman.io/api/admin/list",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: apiRequestParams,
      });

      if (response.status !== 200) {
        return;
      }

      const apiData = response.data;
      const total_records = parseInt(response.total_records) || 0;

      const data = apiData.map((data) => {
        return {
          id: data.AdminID,
          username: data.Username,
          mobile: data.Mobile,
          role: data.Role,
          email: data.Email,
          createdAt: data.DateCreated,
          isMasterAdmin: data.MasterAdmin,
          status: parseAdminStatusToApp(data.Status),
          action: "",
        };
      });

      setAdminList(data);
      settotalRecords(total_records);
      setCurrentPage(page);
      setPerPage(per_page);
    };

    fetchList();
  }, [fetchData, queryParams]);

  const applyFilterHandler = (filterParams) => {
    setCurrentPage(1);
    const { keyword, status } = filterParams;
    setSearchParams({ keyword, status, per_page: perPage, page: 1 });
  };

  const clearFilterHandler = () => {
    setCurrentPage(1);
    setPerPage(PER_PAGE);
    setSearchParams();
  };

  const perPageChangeHandler = (per_page) => {
    setCurrentPage(1);
    setPerPage(per_page);
    setSearchParams({ ...queryParams, per_page, page: 1 });
  };

  const setCurrentPageHandler = (page) => {
    setCurrentPage(page);
    setSearchParams({ ...queryParams, page });
  };

  const columns = [
    { accessor: "id", label: "ID" },
    { accessor: "username", label: "Name" },
    { accessor: "email", label: "Email" },
    { accessor: "mobile", label: "Mobile" },
    { accessor: "createdAt", label: "Created At" },
    {
      accessor: "isMasterAdmin",
      label: "Is Master Admin",
      format: (value) => (value ? "Yes" : "No"),
    },
    { accessor: "status", label: "Status" },
    { accessor: "action", label: "Action" },
  ];
  const rows = adminList;

  return (
    <ContentWrapper>
      {PageTitle && <h1 className="h3 mb-3">{PageTitle}</h1>}
      <div className="card-header">
        <h5 className="card-title">
          Basic Table
          <button className="btn btn-primary float-right">
            Create {PageTitle}
          </button>
        </h5>
        <AdminListFilter
              onApplyFilter={applyFilterHandler}
              onClearFilter={clearFilterHandler}
            />
      </div>
      
      <div className="row">
        <div className="col-12 col-xl-12">
          <div className="card">
            {!isLoading && (
              <Table
                columns={columns}
                rows={rows}
                perPageRecords={perPage}
                currentPage={currentPage}
                showSerialNumber="true"
              />
            )}
            {isLoading && <Loading />}
            {!isLoading && error && <p className="text-danger">{error}</p>}

            <div className="card-footer">
                <Pagination
                  currentPage={currentPage}
                  perPage={perPage}
                  totalRecords={totalRecords}
                  recordsInCurrentPage={recordsInCurrentPage}
                  onPerPageChange={perPageChangeHandler}
                  onPageChange={(page) => setCurrentPageHandler(page)}
                />
              </div>
          </div>
        </div>
      </div>
    </ContentWrapper>
  );
};

export default AdminList;
