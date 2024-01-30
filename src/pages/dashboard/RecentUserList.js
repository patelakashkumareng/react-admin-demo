import React from "react";
import { Table } from "../../components";

const RecentUserList = (props) => {
  const columns = [
    { accessor: "id", label: "ID" },
    { accessor: "username", label: "Name" },
    { accessor: "mobile", label: "Mobile" },
    { accessor: "createdAt", label: "Created At" },
  ];

  const recentUsers = props.response?.data?.recent_users;

  const rows = recentUsers?.map((user) => ({
    id: user.UserID,
    username: user.Username,
    mobile: user.Mobile,
    createdAt: user.DateCreated,
  }));

  console.log("recent rows: ", rows);

  return (
    <div className="flex-column" style={{ flexGrow: 1}}>
      <div className="card-header">
        <h5 className="card-title">{props.title}</h5>
      </div>
      <div className="row">
        <div className="col-12 col-xl-12" style={{"flexGrow": 1}}>
          <div className="card">
            <Table
              columns={columns}
              rows={rows}
              showSerialNumber="true"
              showActions="false"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentUserList;
