import React, { useCallback, useEffect, useMemo, useState } from 'react'
import BannerListFilter from './BannerListFilter'
import { useSearchParams } from 'react-router-dom'
import useHttp from '../../hooks/useHttp';
import { PER_PAGE, CRICKET_SPORTS_ID } from '../../config/constant';
import { config } from '../../config';

const BannerList = (props) => {

    const [data, setData] = useState(null)

    const getQueryParams = (searchParams) => {
        const result = Object.fromEntries([...searchParams]);
        return result;
      };

    const parseBannerStatusToApp = (status) => {
        return status ? 'active' : 'inactive'
    }

      const parseBannerStatusToAPI = (status) => {
            let apiStatus = null

            if(status === "active"){
                apiStatus = true
            } else {
                apiStatus =  false
            }

            return apiStatus
      }
    const { isLoading, error, sendRequest } = useHttp();
    let [searchParams, setSearchParams] = useSearchParams();

    const PageTitle = props.title;


  const queryParams = useMemo(
    () => getQueryParams(searchParams),
    [searchParams]
    );


    const fetchBanner = useCallback (async () => {
        const per_page = queryParams.per_page || PER_PAGE;
        const sports_id = queryParams.sports_id || CRICKET_SPORTS_ID
        const keyword = queryParams.keyword;
        const status = parseBannerStatusToAPI(queryParams.status);
        const page = queryParams.page;

        const apiRequestParams = {
            per_page,
            sports_id,
            keyword,
            status,
            page
          };

          const response = await sendRequest({
            url: config.API_BASE_URL + "/banner/list",
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
              id: data.BannerID,
              type: data.Type,
              sportType: data.SportType,
              sportsId: data.SportsID,
              bannerName: data.Name,
              bannerImage: data.BannerImage,
              bannerUsedIn: data.BannerUsedIn,
              status: parseBannerStatusToApp(data.Status)
            };

        });
        setData(data)

    }, [sendRequest])

    useEffect(() => {
        fetchBanner(queryParams);
      }, [fetchBanner, queryParams]);

      const applyFilterHandler = (filterParams) => {
        const { keyword, status } = filterParams;
        setSearchParams({ keyword, status, per_page: data.perPage, page: 1 });
      };
  return (


        <p>BannerList</p>
  )
}

export default BannerList