import React from "react";
import ContentWrapper from "../base/ContentWrapper";

const Dashboard = (props) => {
  const PageTitle = props.PageTitle
  return (
    <ContentWrapper>
      {PageTitle && <h1 className="h3 mb-3">{PageTitle}</h1>}
    </ContentWrapper>
  );
};

export default Dashboard;
