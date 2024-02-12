import React from "react";
import { Table } from "../../components";

const RecentGameList = (props) => {
  const columns = [
    { accessor: "id", label: "ID" },
    { accessor: "gameName", label: "GameName" },
    { accessor: "minEntry", label: "MinEntry" },
    { accessor: "maxEntry", label: "MaxEntry" },
    { accessor: "totalEntry", label: "TotalEntry" },
    { accessor: "scheduleDate", label: "ScheduleDate" },
  ];

  const recentGames = props.response?.data?.recent_games;

  const rows = recentGames?.map((game) => ({
    id: game.GameID,
    gameName: game.GameName,
    minEntry: game.MinEntry,
    maxEntry: game.MaxEntry,
    totalEntry: game.TotalEntry,
    scheduleDate: game.ScheduleDate,
  }));

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
