import React, { useEffect, useMemo, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AdminListAction } from "../../store/admin/AdminSlice";
import { Link, useSearchParams } from "react-router-dom";
import ContentWrapper from "../../pages/base/ContentWrapper";
import { Table, Pagination, Loading } from "../../components/index";
// import { isEmptyObject } from "./../../helpers/functions";
import { config } from "../../config";
import { Eye } from 'react-feather';

import useHttp from "../../hooks/useHttp";
import AdminListFilter from "./AdminListFilter";

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

const getQueryParams = (searchParams) => {
  const result = Object.fromEntries([...searchParams]);
  return result;
};

const View = (props) => {
  const viewHandler = (event) => {
    event.preventDefault()
    const id = props.id
  }
  return(
    <a href="/#" onClick={viewHandler}><Eye /></a> 
  )
}

const AdminList = (props) => {
  const dispatch = useDispatch();

  const currentPage = useSelector((state) => state.admin.currentPage);
  const list = useSelector((state) => state.admin.list);
  const perPage = useSelector((state) => state.admin.perPage);
  const totalRecords = useSelector((state) => state.admin.totalRecords);

  const { isLoading, error, sendRequest } = useHttp();

  let [searchParams, setSearchParams] = useSearchParams();

  const PageTitle = props.title;
  const recordsInCurrentPage = list.length;

  const queryParams = useMemo(
    () => getQueryParams(searchParams),
    [searchParams]
  );

  const fetch = useCallback(
    async (queryParams) => {
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

      const response = await sendRequest({
        url: config.API_BASE_URL + "/admin/list",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: apiRequestParams,
      });

      if (!response || response.status !== 200) {
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
          action: (<View id={data.AdminID}/>),
        };
      });

      dispatch(
        AdminListAction.fetchList({
          list: data,
          perPage: per_page,
          currentPage: page,
          totalRecords: total_records,
        })
      );
    },
    [sendRequest, dispatch]
  );

  useEffect(() => {
    fetch(queryParams);
  }, [fetch, queryParams]);

  const applyFilterHandler = (filterParams) => {
    const { keyword, status } = filterParams;
    setSearchParams({ keyword, status, per_page: perPage, page: 1 });
  };

  const clearFilterHandler = () => {
    setSearchParams();
  };

  const perPageChangeHandler = (per_page) => {
    setSearchParams({ ...queryParams, per_page, page: 1 });
  };

  const setCurrentPageHandler = (page) => {
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

  return (
    <ContentWrapper>
      {PageTitle && <h1 className="h3 mb-3">{PageTitle}</h1>}
      <div className="card-header">
        <h5 className="card-title">
          {PageTitle}
          <Link to={"/admin/create"} className="btn btn-primary float-right">
            Create {PageTitle}
          </Link>
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
                rows={list}
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
