import React from "react";

const ViewTable = (props) => {
  const headColumn = props.headColumn;
  const rows = props.rows;

  //   const totalRecord = Object.keys(rows).length;

  return (
    <div className="card-body">
      <div className="form-row border  border-dark p-2 ">
        {Object.keys(rows).map((prop, index) => {
          return (
            <div className="form-group col-md-6  border bg-dark text-white">
              <div className={"d-flex flex-wrap"}>
              <label className="ml-2 font-weight-bolder">{prop}:</label>  <label className="ml-2 font-weight-light">{rows[prop]}</label>
              </div>
              
            </div>
          );
        })}
      </div>

      <div className={"col-12 col-xl-15"}>
        <div className="card">
          <table className="table table-bordered">
            <thead>
                <div className="form-row">
                <tr>
                {headColumn.map((col) => (
                  <th
                    className={"font-weight-bolder h4"}
                    style={{ width: "40%" }}
                  >
                    {col}
                  </th>
                ))}
              </tr>
                </div>

            </thead>
            <tbody>
                <div className="form-row col-lg-25">
                {Object.keys(rows).map((prop, index) => {
                    return (
                    //   <tr key={index}>
                    <div className="form-row col-md-6">
                        <label className={"font-weight-bolder"}>{prop}:</label>
                        <label className={"d-none d-md-table-cell ml-2"}>
                          {rows[prop]}
                        </label>
                        </div>
                  
                    );
                  })}
                </div>

            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ViewTable;
