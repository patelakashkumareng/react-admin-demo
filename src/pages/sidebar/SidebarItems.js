import React from "react";
import { NavLink } from "react-router-dom";

const SidebarItems = ({ itemLink = '/admin/list', title='Admin'}) => {


  return (
    <>
      <li className={`slidebar-item ${"active"}`}>
        <NavLink className="sidebar-link" to={itemLink}>
          {title}
        </NavLink>
      </li>
    </>
  );
};

export default SidebarItems;
