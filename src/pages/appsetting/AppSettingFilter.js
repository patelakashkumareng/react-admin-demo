import React, { useRef } from 'react'
import { Button, Input } from '../../components'
import { useTranslation } from 'react-i18next';


const AppSettingFilter = (props) => {
  const { t } = useTranslation()
  const keywordRef = useRef()


  const submitSearchHandler = (event) => {    
    event.preventDefault();

    const keyword = keywordRef.current.value


    if(keyword.trim().length > 0 ){
      //submit data
      props.onApplyFilter({
        keyword
      })
    }
  };

  const clearSearchHandler = () => {
    props.onClearFilter()
    keywordRef.current.value = ""
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

export default AppSettingFilter