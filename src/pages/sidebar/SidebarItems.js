import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

const SidebarItems = ({ itemLink = '/admin/list', title='Admin'}) => {
        //assigning location variable
        const location = useLocation();

        //destructuring pathname from location
        const { pathname } = location;

  return (
    <>
      <li className={`slidebar-item ${pathname === itemLink && "active"}`}>
        <NavLink className="sidebar-link" to={itemLink}>
          {title}
        </NavLink>
      </li>
    </>
  );
};

export default SidebarItems;
