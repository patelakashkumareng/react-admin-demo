import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const SidebarItems = ({ expanded = false, itemLink = '/admin/list', title='Admin'}) => {
  const [showActive, setShowActive] = useState(false)

  const onClickHandler = (e) => {
    e.preventDefault()
    setShowActive(false)
  }
  return (
    <>
      <li className={`slidebar-item ${showActive && "active"}`}>
        <NavLink className="sidebar-link" to={itemLink} onClick={(e) => onClickHandler(e)}>
          {title}
        </NavLink>
      </li>
    </>
  );
};

export default SidebarItems;
