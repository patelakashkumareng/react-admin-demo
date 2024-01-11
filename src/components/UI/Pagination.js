import React from "react";

const Pagination = () => {
  return (
    <div className="form-row">
      <div className="form-group col-md-1">
         <select id="role" className="form-control">
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
      </div>
      <div className="form-group col-md-8 text-center">
        Showing 1 to 10 of 57 entries
      </div>

      <div className="form-group col-md-3">
        <nav aria-label="Page navigation example" className="float-right">
          <ul className="pagination pagination-md">
            <li className="page-item">
              <a className="page-link" href="/#">
                <i className="fas fa-angle-left"></i>
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="/#">
                1
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="/#">
                2
              </a>
            </li>
            <li className="page-item active">
              <a className="page-link" href="/#">
                3
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="/#">
                4
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="/#">
                <i className="fas fa-angle-right"></i>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Pagination;
