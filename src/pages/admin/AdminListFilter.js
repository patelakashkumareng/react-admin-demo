import React, { useRef } from "react";
import Input from "../../components/UI/Input";
import Select from "../../components/UI/Select";
import Button from "../../components/UI/Button";

const statusList = [
  { id: "ACTIVE", name: "Active" },
  { id: "INACTIVE", name: "Inactive" },
  { id: "ALL", name: "All" },
];

const AdminListFilter = (props) => {
  const keywordRef = useRef('')
  const statusRef = useRef("ALL")

  const submitSearchHandler = (event) => {    
    event.preventDefault();

    const keyword = keywordRef.current.value
    const status = statusRef.current.value

    if(keyword.trim().length > 0 || status !== "ALL"){
      console.log("search");

      //submit data
      props.onApplyFilter({
        keyword,
        status
      })
    }
  };
  return (
    <form onSubmit={submitSearchHandler}>
      <div className="form-row">
        <Input
          type="text"
          className="form-control"
          placeholder="Keyword"
          divStyle="form-group col-md-2"
          ref={keywordRef}
        />

        <Select
          id="role"
          className="form-control"
          divStyle="form-group col-md-2"
          options={statusList}
          ref={statusRef}
        />

        <div className="form-group col-md-8">
          <Button type="submit" className="btn btn-primary mr-1">
            Search
          </Button>
          <Input type="button" className="btn btn-primary mr-1" value="Clear"/>
        </div>
      </div>
    </form>
  );
};

export default AdminListFilter;
