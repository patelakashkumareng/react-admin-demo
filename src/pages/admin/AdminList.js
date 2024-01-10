import React, { useEffect, useState } from "react";
import ContentWrapper from "../../pages/base/ContentWrapper";
import Table from "../../components/UI/Table";
import useHttp from "../../hooks/useHttp";

const AdminList = () => {
  const [adminList, setAdminList] = useState([]);
  const {
    isLoading,
    error,
    sendRequest: fetchData,
  } = useHttp();

  

  useEffect(() => {
    const transformTask = (taskObj) => {
      setAdminList(taskObj);
    };
    fetchData({url: "https://jsonplaceholder.typicode.com/users"}, transformTask)
  }, [fetchData]);

  const tableObject = {
    header: [
      {
        fieldName: "name",
        uiName: "Name",
        order: 1,
      },
      {
        fieldName: "mobile",
        uiName: "Mobile",
        order: 2,
      },
      {
        fieldName: "actions",
        uiName: "Actions",
        order: 3,
      },
    ],
    row: adminList,
  };

  return (
    <ContentWrapper>
      <h1 className="h3 mb-3">Tables</h1>
      {!isLoading && adminList.length > 0 && <Table tableData={tableObject} />}
      {isLoading && <p>Loading...</p>}
      {!isLoading && error && <p>{error}</p>}
    </ContentWrapper>
  );
};

export default AdminList;
