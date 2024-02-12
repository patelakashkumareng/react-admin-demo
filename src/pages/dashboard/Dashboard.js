import React, { useCallback, useEffect } from "react";
import ContentWrapper from "../base/ContentWrapper";
import RecentUserList from "./RecentUserList";
import useHttp from "../../hooks/useHttp";
import { config } from "../../config";
import { Loading } from "../../components";
import RecentGameList from "./RecentGameList";
import { useTranslation } from "react-i18next";

const Dashboard = (props) => {
  const PageTitle = props.PageTitle;
  const { t } = useTranslation()

  const { isLoading, error, sendRequest, response } = useHttp();
  const fetch = useCallback(async () => {
    const response = await sendRequest({
      url: config.API_BASE_URL + "/dashboard",
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response || response.status !== 200) {
      return;
    }
  }, [sendRequest]);

  useEffect(() => {
    fetch();
  }, [fetch]);
  return (
    <>
    <ContentWrapper>
      {PageTitle && <h1 className="h3 mb-3">{t('dashboard', { ns : "glossary"})}</h1>}
      {isLoading && <Loading />}
      {!isLoading && error && <p className="text-danger">{error}</p>}
    <div className={"d-flex flex-wrap "} >
      {!isLoading && (
        <RecentUserList title={t("recent" , { ns: "glossary"}) + " " +  t("users" , { ns: "glossary"}) } response={response} />
      )}

      {!isLoading && (
        <RecentGameList title={t("recent" , { ns: "glossary"}) + " " +  t("games" , { ns: "glossary"})} response={response} />
      )}

      </div>
    </ContentWrapper>
    </>
  );
};

export default Dashboard;
