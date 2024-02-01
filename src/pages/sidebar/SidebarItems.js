import React from "react";
import { useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";

const SidebarItems = ({ itemLink = '/admin/list', title='Admin'}) => {
  const { pathname } = useLocation()
  const classes = (pathname === itemLink) ? "sidebar-item active" : "sidebar-item"

  return (
    <>
      <li className={classes}>
        <NavLink className="sidebar-link" to={itemLink}>
          {title}
        </NavLink>
      </li>
    </>
  );
};

export default SidebarItems;
