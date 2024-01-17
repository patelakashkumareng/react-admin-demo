import React from "react";
const PageItem = ({
  useIcon = false,
  val = 0,
  iconClass = "",
  active = false,
  disable = false,
  onPageLinkClick
}) => {
  let liClassName = `page-item`
  if(active){
    liClassName = liClassName.concat(' active')
  }
  if(disable){
    liClassName = liClassName.concat(' disabled')
  }

  const pageClickHandler = (e) => {
    e.preventDefault()
    onPageLinkClick(val)
  }
  return (
    <li className={liClassName}>
      <a className="page-link" href="/#" onClick={pageClickHandler}>
        {useIcon && <i className={iconClass}></i>}
        {!useIcon && val}
      </a>
    </li>
  );
};

const PageLink = (props) => {
  const {first, prev, current, next, last} = props.pageObject;
  
  return (
    <nav aria-label="Page navigation example" className="float-right">
      <ul className="pagination pagination-md">
        {<PageItem val={first} useIcon={true} disable={current === first || first === 0} iconClass="fas fa-angle-left" onPageLinkClick={props.onPageChange} />}
        {prev > 0 && <PageItem val={prev} onPageLinkClick={props.onPageChange}/>}
        {current && <PageItem val={current} active={true} onPageLinkClick={props.onPageChange}/>}
        {next > 0 && <PageItem val={next} onPageLinkClick={props.onPageChange}/>}
        {<PageItem val={last} useIcon={true} iconClass="fas fa-angle-right" onPageLinkClick={props.onPageChange} disable={current === last || last === 0} />}
      </ul>
    </nav>
  );
};

export default PageLink;
