import React, { useRef } from 'react'
import { Button, Input, Select } from '../../components'
const statusList = [
  { value: "all", label: "All" },
  { value: "active", label: "Active" },
  { value: "inactive", label: "Inactive" }
];

const BannerListFilter = (props) => {
  const keywordRef = useRef()
  const statusRef = useRef()

  const submitSearchHandler = (event) => {    
    event.preventDefault();

    const keyword = keywordRef.current.value
    const status = statusRef.current.value

    if(keyword.trim().length > 0 || status){
      //submit data
      props.onApplyFilter({
        keyword,
        status
      })
    }
  };

  const clearSearchHandler = () => {
    props.onClearFilter()
    keywordRef.current.value = ""
    statusRef.current.value = "all"
  }
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
        <Input type="button" className="btn btn-primary mr-1" value="Clear" hideDiv={true} onClick={clearSearchHandler}/>
      </div>
    </div>
  </form>
  )
}

export default BannerListFilter