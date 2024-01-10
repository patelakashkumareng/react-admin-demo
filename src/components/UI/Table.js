import React from "react";

const Table = ({ title, description, tableData}) => {
    const data = {
        title: title || '',
        description: description || '',
        table:{
            header: tableData.header || [],
            row: tableData.row || [],
        }
    }

    const tableHeader = data.table?.header?.map((data) => {
        return (
            <th key={data.uiName}>{data.uiName}</th>
        );
      });
  const tableBody = data.table?.row?.map((data) => {
    return (
      <tr key={data.id}>
        <td>{data.id}</td>
        <td>{data.name}</td>
        <td>{data.phone}</td>
      </tr>
    );
  });
  return (
    <div className="row">
      <div className="col-12 col-xl-12">
        <div className="card">
            {title && description && 
                <div className="card-header">
                <h5 className="card-title">{title}</h5>
                <h6 className="card-subtitle text-muted">
                {description}
                </h6>
              </div>
            }
          
          <table className="table table-bordered">
            <thead>
              <tr>
                {tableHeader}
              </tr>
            </thead>
            <tbody>{tableBody}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Table;
