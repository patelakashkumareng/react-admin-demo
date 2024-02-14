import React from "react";
import ContentWrapper from "../base/ContentWrapper";
import ProfileDetaills from "./ProfileDetails";
import { useSelector } from "react-redux";
import AdminInfo from "./AdminInfo";
import Password from "./Password";
import { Button, Table } from "../../components";
import General from "./General";

const AppSetting = () => {
  const adminData = useSelector((state) => state.auth.userData);

  const data = {
    id: adminData?.AdminID,
    username: adminData?.Username,
    firstname: adminData?.FirstName,
    lastname: adminData?.LastName,
    role: adminData?.Role,
    mobile: adminData?.Mobile,
    email: adminData?.Email,
    permission: adminData?.Permission,
    status: adminData?.Status,
    password: adminData?.Password,
    isMasterAdmin: adminData?.MasterAdmin,
    dateCreated: adminData?.DateCreated,
    dateModified: adminData?.DateModified,
  };

  const columns = [
    { accessor: "name", label: "Name" },
    { accessor: "action", label: "Action", className: "text-center" },
  ];

  const rowData = [
    { id: 1, name: "Flush Cache" },
    {
      id: 2,
      name: "Auto Publish",
    },
    {
      id: 3,
      name: "Pull Matches",
    },
  ];

  const rows = rowData.map((row) => {
    return {
      ...row,
      action: (
        <Button className={"btn btn-pill btn-info"} type={"submit"}>
          RUN
        </Button>
      ),
    };
  });

  console.log("admin-data: ", data);
  return (
    <ContentWrapper>
      <div className="container-fluid p-0">
        <h1 className="h3 mb-3">Profile</h1>

        <div className="row">
          <ProfileDetaills adminData={data} />
          <div className="col-md-6 col-xl-6">
            <AdminInfo data={data} />
            <General/>
          </div>
          <div className="col-md-3 col-xl-3">
          <Password />
            <div className="card">
              <Table
                rows={rows}
                columns={columns}
                showSerialNumber="true"
                title="Cron Job"
                description="Run Cron Manually"
              />
            </div>
          </div>
        </div>
      </div>
    </ContentWrapper>
  );
};

export default AppSetting;
