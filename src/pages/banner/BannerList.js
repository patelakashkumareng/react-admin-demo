import React, { useCallback, useEffect, useMemo, useState } from "react";
import BannerListFilter from "./BannerListFilter";
import { useSearchParams } from "react-router-dom";
import useHttp from "../../hooks/useHttp";
import { PER_PAGE, CRICKET_SPORTS_ID } from "../../config/constant";
import { config } from "../../config";
import { Loading, Pagination, Table } from "../../components";

const BannerList = (props) => {
  const [data, setData] = useState([]);
  const [perPage, setPerPage] = useState(1);
  const [pageNo, setPageNo] = useState(1);
  const [totalRecord, setTotalRecord] = useState(5);

  const getQueryParams = (searchParams) => {
    const result = Object.fromEntries([...searchParams]);
    return result;
  };

  const parseBannerStatusToApp = (status) => {
    return status ? "active" : "inactive";
  };

  const parseBannerStatusToAPI = (status) => {
    let apiStatus = null;

    if (status === "active") {
      apiStatus = true;
    } else {
      apiStatus = false;
    }

    return apiStatus;
  };
  const { isLoading, error, sendRequest } = useHttp();
  let [searchParams, setSearchParams] = useSearchParams();

  const PageTitle = props.title;

  const queryParams = useMemo(
    () => getQueryParams(searchParams),
    [searchParams]
  );

  const fetchBanner = useCallback(async () => {
    const per_page = queryParams.per_page || PER_PAGE;
    const sports_id = queryParams.sports_id || CRICKET_SPORTS_ID;
    const keyword = queryParams.keyword;
    const status = parseBannerStatusToAPI(queryParams.status);
    const page = queryParams.page;

    const apiRequestParams = {
      per_page,
      sports_id,
      keyword,
      status,
      page,
    };

    const response = await sendRequest({
      url: config.API_BASE_URL + "/banner/list",
      method: "GET",
      params: apiRequestParams,
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response || response.status !== 200) {
      return;
    }

    const apiData = response?.data;
    const total_record = parseInt(response.total_record) || 0;

    const data = apiData?.map((data) => {
      return {
        id: data.BannerID,
        type: data.Type,
        sportType: data.SportType,
        sportsId: data.SportsID,
        bannerName: data.Name,
        bannerImage: data.BannerImage,
        bannerUsedIn: data.BannerUsedIn,
        status: parseBannerStatusToApp(data.Status),
      };
    });
    setData(data);
    setTotalRecord(total_record);
    setPerPage(per_page);
    setPageNo(page);
  }, [sendRequest, queryParams]);

  useEffect(() => {
    fetchBanner(queryParams);
  }, [fetchBanner, queryParams]);

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
    { accessor: "type", label: "Type" },
    { accessor: "sportType", label: "SportType" },
    { accessor: "sportsId", label: "SportsId" },
    { accessor: "status", label: "Status" },
    { accessor: "bannerName", label: "Name" },
    { accessor: "bannerImage", label: "Image" },
    { accessor: "bannerUsedIn", label: "UsedIn" },
    // { accessor: "action", label: "Action", className: "text-center" },
  ];
  
  return (
    <>
      <p>BannerList</p>
      <div className="row">
        <div className="col-12 col-xl-12">
          <div className="card">
            {!isLoading && (
              <Table
                columns={columns}
                rows={data}
                perPageRecords={perPage}
                currentPage={pageNo}
                showSerialNumber="true"
                showActions="false"
              />
            )}
            {isLoading && <Loading />}
            {!isLoading && error && <p className="text-danger">{error}</p>}

            <div className="card-footer">
              <Pagination
                currentPage={pageNo}
                perPage={perPage}
                totalRecords={totalRecord}
                recordsInCurrentPage={data?.length}
                onPerPageChange={perPageChangeHandler}
                onPageChange={(page) => setCurrentPageHandler(page)}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BannerList;
