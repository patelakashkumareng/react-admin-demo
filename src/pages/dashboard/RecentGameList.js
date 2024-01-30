import React from "react";
import { Table } from "../../components";

const RecentGameList = (props) => {
  const columns = [
    { accessor: "GameID", label: "ID" },
    { accessor: "GameName", label: "GameName" },
    { accessor: "MinEntry", label: "MinEntry" },
    { accessor: "MaxEntry", label: "MaxEntry" },
    { accessor: "TotalEntry", label: "TotalEntry" },
    { accessor: "ScheduleDate", label: "ScheduleDate" },
  ];

  const recentGames = props.response?.data?.recent_games;

  const rows = recentGames?.map((game) => ({
    GameID: game.GameID,
    GameName: game.GameName,
    MinEntry: game.MinEntry,
    MaxEntry: game.MaxEntry,
    TotalEntry: game.TotalEntry,
    ScheduleDate: game.ScheduleDate,
  }));

  console.log("recent rows: ", rows);

  return (
    <div className="flex-column ml-5">
      <div className="card-header">
        <h5 className="card-title">{props.title}</h5>
      </div>
      <div className="row">
        <div className="col-12 col-xl-12" style={{ flexGrow: 1}}>
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

export default RecentGameList;
