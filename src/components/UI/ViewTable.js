import React from "react";

const ViewTable = (props) => {
  const {
    headColumn = ["Properties", "Value"],
    rows,
    isShowTabularUI = true,
    divStyle = "",
  } = props;

  const totalRecord = Object.keys(rows).length;

  return totalRecord > 10 || !isShowTabularUI ? (
    <div className="card-body">
      <div className="form-row border  border-dark p-2 ">
        {Object.keys(rows).map((prop, index) => {
          return (
            <div
              className={`form-group col-md-6  border bg-dark text-white ${divStyle}`}
              key={index}
            >
              <div className={"d-flex flex-wrap"}>
                <label className="ml-2 font-weight-bolder">{prop}:</label>{" "}
                <label className="ml-2 font-weight-light">{rows[prop]}</label>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  ) : (
    <div className={"col-12 col-xl-15"}>
      <div className="card">
        <table className="table table-bordered">
          <thead>
            <tr>
            {headColumn.map((col, index) => (   
                <th
                  className={"font-weight-bolder h4"}
                  style={{ width: "40%" }}
                  key={index}
                >
                  {col}
                </th>     
            ))}
            </tr>
          </thead>
          <tbody>
            {Object.keys(rows).map((prop, index) => {
              return (
                <tr key={index}>
                  <td className={"font-weight-bolder"}>{prop}:</td>
                  <td className={"d-none d-md-table-cell ml-2"}>
                    {rows[prop]}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewTable;
