import React from "react";
import Select from "./Select";
import PageLink from "./PageLink";

const createPagination = ({ totalRecords, perPage, current = 1 }) => {
  let totalPages = Math.ceil(totalRecords / parseInt(perPage));
  const first = (totalPages > 0) ? 1 : 0;
  const last = totalPages;
  const prev = current > first ? current - 1 : 0;
  const next = current < last ? current + 1 : 0;

  return {
    total: totalRecords,
    perPage,
    first,
    prev,
    current,
    next,
    last,
  };
};

const Pagination = ({ currentPage = 1, perPage, totalRecords = 0, recordsInCurrentPage = 0, onPerPageChange, onPageChange }) => {
  currentPage = parseInt(currentPage)
  perPage = parseInt(perPage)
  const perPageList = [
    { value: "1", label: "1" },
    { value: "2", label: "2" },
    { value: "5", label: "5" },
    { value: "10", label: "10" },
    { value: "15", label: "15" },
    { value: "20", label: "20" },
  ];

  const pageObject = createPagination({
    totalRecords,
    perPage,
    current: currentPage,
  });

  let entryShowingsFrom = currentPage === 1 ? (totalRecords ? 1 : 0) : perPage * (currentPage - 1) + 1;
  let entryShowingTo = totalRecords ? ((entryShowingsFrom + recordsInCurrentPage) - 1) : 0;

  const perPageChangeHandler = (event) => {
    onPerPageChange(event.target.value)
  }

  const pageChangeHandler = (page) => {
    onPageChange(page)
  }

  return (
    <div className="form-row">
      <Select
        id="role"
        className="form-control"
        divStyle="form-group col-md-1"
        options={perPageList}
        value={perPage}
        onChange={perPageChangeHandler}
      />

      {<div className="form-group col-md-8 text-center">
        Showing {entryShowingsFrom} to {entryShowingTo} of {totalRecords} entries
      </div>}

      <div className="form-group col-md-3">
        <PageLink pageObject={pageObject} onPageChange={pageChangeHandler}/>
      </div>
    </div>
  );
};

export default Pagination;
