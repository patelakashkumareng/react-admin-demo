import React, { useRef } from 'react'
import { Button, Input, Select } from '../../components'
import { useTranslation } from 'react-i18next';


const BannerListFilter = (props) => {
  const { t } = useTranslation()
  const keywordRef = useRef()
  const statusRef = useRef()


  const statusList = [
    { value: "all", label: t("all", {ns: "glossary"})},
    { value: "active", label: t("active", {ns: "glossary"}) },
    { value: "inactive", label:t("inactive", {ns: "glossary"}) }
  ];

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
        placeholder={t("keyword", {ns:"glossary"})}
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
          {t('search', {ns: 'glossary'})}
        </Button>
        <Input type="button" className="btn btn-primary mr-1" value={t('clear', {ns: 'glossary'})} hideDiv={true} onClick={clearSearchHandler}/>
      </div>
    </div>
  </form>
  )
}

export default BannerListFilter