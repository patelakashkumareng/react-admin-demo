import React, { useCallback, useEffect, useMemo, useState } from "react";
import useHttp from "../../hooks/useHttp";
import { config } from "../../config";
import { Loading, Pagination, Table } from "../../components";
import { useSearchParams } from "react-router-dom";
import { PER_PAGE } from "../../config/constant";
import AppSettingDetail from "./AppSettingDetail";
import AppSettingFilter from "./AppSettingFilter";

const General = () => {
  const { response, error, sendRequest, isLoading } = useHttp();
  const [data, setData] = useState([]);
  const [perPage, setPerPage] = useState(1);
  const [pageNo, setPageNo] = useState(1);
  const [totalRecord, setTotalRecord] = useState(5);

  const recordsInCurrentPage = data.length || 0;

  const getQueryParams = (searchParams) => {
    const result = Object.fromEntries([...searchParams]);
    return result;
  };
  let [searchParams, setSearchParams] = useSearchParams();

  const queryParams = useMemo(
    () => getQueryParams(searchParams),
    [searchParams]
  );

  const fetchAppSetting = useCallback(async () => {
    const per_page = queryParams.per_page || PER_PAGE;
    const page = queryParams.page;
    const keyword = queryParams.keyword;

    const apiQueryParams = {
      per_page,
      page,
    };
    const apiBody = {
        filters: {
            keyword : keyword
        }
    }
    const response = await sendRequest({
      url: config.API_BASE_URL + "/app-setting/list",
      method: "POST",
      params: apiQueryParams,
      body: apiBody,
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response || response.status !== 200) {
      return;
    }

    const apiData = response?.data;
    const data = apiData.map((data) => {
      return {
        id: data.SettingID,
        name: data.Name,
        key: data.Key,
        value:
          data.Value && data.Value.length < 40
            ? data.Value
            : "Click Detail Button",
        displayOrder: data.DisplayOrder,
      };
    });

    setData(data);
    setPerPage(response?.per_page);
    setTotalRecord(response?.total_record);
    setPageNo(page);
  }, [sendRequest, queryParams]);

  useEffect(() => {
    fetchAppSetting();
  }, [fetchAppSetting, queryParams]);

  const applyFilterHandler = (filterParams) => {
    const { keyword } = filterParams;
    setSearchParams({ keyword, per_page: perPage, page: 1 });
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
    { accessor: "name", label: "Name" },
    { accessor: "key", label: "Key" },
    { accessor: "value", label: "value" },
    { accessor: "action", label: "Action" },
  ];

  const rows = data?.map((item) => ({
    ...item,
    action: (
      <>
        <AppSettingDetail id={item.id} />
      </>
    ),
  }));

  return (
    <>
      {isLoading && <Loading />}
      {!isLoading && error && <p className="text-danger">{error}</p>}
      {response && (
        
        <div className="card">
            <div className="card-header">
            <h5 className="card-title">
            App Setting List
        </h5>
        <h5> Filter</h5>
            <AppSettingFilter
            onApplyFilter={applyFilterHandler}
            onClearFilter={clearFilterHandler}
          />
            </div>

          <Table
            rows={rows}
            columns={columns}
          />
          <Pagination
            perPage={perPage}
            currentPage={pageNo}
            onPageChange={setCurrentPageHandler}
            onPerPageChange={perPageChangeHandler}
            totalRecords={totalRecord}
            recordsInCurrentPage={recordsInCurrentPage}
          />
        </div>
      )}
    </>
  );
};

export default General;
