import React, { useCallback, useEffect, useMemo, useState } from "react";
import BannerListFilter from "./BannerListFilter";
import { Link, useSearchParams } from "react-router-dom";
import useHttp from "../../hooks/useHttp";
import { PER_PAGE } from "../../config/constant";
import { config } from "../../config";
import { Loading, Pagination, Table } from "../../components";
import { useTranslation } from "react-i18next";

import {
  parseBannerUsedIn,
  parseBannerType,
  parseBannerSportType,
  parseBannerStatusToApp,
  parseBannerStatusToAPI,
} from "./utility.banner";
import ViewDetail from "./ViewDetail";
import { Edit2 } from "react-feather";
import BannerStatus from "./BannerStatus";
import RemoveBanner from "./RemoveBanner";

const BannerList = (props) => {
  const { t } = useTranslation();
  const { description = t("filters", { ns: "glossary" }) } = props;
  const [data, setData] = useState([]);
  const [perPage, setPerPage] = useState(1);
  const [pageNo, setPageNo] = useState(1);
  const [totalRecord, setTotalRecord] = useState(5);

  const getQueryParams = (searchParams) => {
    const result = Object.fromEntries([...searchParams]);
    return result;
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
    const sports_id = queryParams.sports_id || 0;
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
        type: parseBannerType(data.Type),
        sportType: parseBannerSportType(data.SportType),
        sportsId: data.SportsID,
        bannerName: data.Name,
        bannerImage: data.BannerImage ? (
          <div>
            <a
              href={`https://twelfthman-dev.s3.ap-south-1.amazonaws.com/upload/banner/${data?.BannerImage}`}
              target="__blank"
            >
              <img
                src={`https://twelfthman-dev.s3.ap-south-1.amazonaws.com/upload/banner/${data?.BannerImage}`}
                alt={`${data?.BannerImage}`}
                style={{ maxWidth: "250px", maxHeight: "75px" }}
              />
            </a>
          </div>
        ) : (
          "-"
        ),
        bannerUsedIn: parseBannerUsedIn(data.BannerUsedIn),
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
    { accessor: "action", label: "Action", className: "text-center" },
  ];

  const onStatusChange = () => {
    fetchBanner(queryParams);
  };

  //Action Button code
  const row = data.map((item) => {
    return {
      ...item,
      action: (
        <>
          <ViewDetail id={item.id} />
          <a
            className="btn text-primary"
            href="/#"
            onClick={(e) => console.log("clicked")}
          >
            <Edit2 />
          </a>
          <RemoveBanner
            id={item.id}
            onDeleteHandler={() => fetchBanner(queryParams)}
          />
          <BannerStatus
            id={item.id}
            status={item.status}
            onStatusChange={onStatusChange}
          />
        </>
      ),
    };
  });

  return (
    <>
      {PageTitle && (
        <h1 className="h3 mb-3">{t(`${PageTitle}`, { ns: "glossary" })}</h1>
      )}
      <div className="card-header">
        <h5 className="card-title">
          {description}
          <Link to={"/banner/create"} className="btn btn-primary float-right">
            {t(`${PageTitle}`, { ns: "glossary" }) +
              " " +
              t("create", { ns: "glossary" })}
          </Link>
        </h5>
        <BannerListFilter
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
                rows={row}
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
