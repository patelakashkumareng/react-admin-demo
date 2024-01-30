import React from "react";

const Table = ({
  title = "",
  description = "",
  columns = [],
  rows = [],
  perPageRecords = 0,
  currentPage = 1,
  showSerialNumber = false,
}) => {

  console.log('Table Component Called');
  console.log('column:: ', columns);
  const tableHeader = (
    <tr>
      {showSerialNumber && <th>Sr No</th>}
      {columns.map((column) => {
        if(column.className){
          return <th className={column.className}  key={column.accessor}>{column.label}</th>;
        }
        return <th key={column.accessor}>{column.label}</th>;
      })}
    </tr>
  );

  let srNumber = perPageRecords * (currentPage - 1);
  let headerLength = columns.length + (showSerialNumber ? 1 : 0)

  let tableBody = <tr><td colSpan={headerLength} className="text-center">No records found</td></tr>;

  if(rows.length > 0){
    tableBody = rows.map((row) => {
      srNumber++;
      return (
        <tr key={row.id}>
          {showSerialNumber && <td>{srNumber}</td>}
          {columns.map((column) => {
            if (column.format) {
              return (
                <td key={column.accessor}>
                  {column.format(row[column.accessor])}
                </td>
              );
            }
            if(column.className){
              return <td className={column.className} key={column.accessor}>{row[column.accessor]}</td>;
            }
            return <td key={column.accessor}>{row[column.accessor]}</td>;
          })}
        </tr>
      );
    });
  }
  
  return (
    <div className="row">
    <div className="col-12 col-xl-12">
    <>
      {(title || description) && (
        <div className="card-header">
          {title && <h5 className="card-title">{title}</h5>}
          {description && (
            <h6 className="card-subtitle text-muted">{description}</h6>
          )}
        </div>
      )}

      <div className="table-responsive">
      <table className="table table-striped table-hover">
        <thead>{tableHeader}</thead>
        <tbody>{tableBody}</tbody>
      </table>
      </div>

      
    </>
    </div>
    </div>
  );
};

export default Table;
