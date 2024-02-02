import React from "react";
import { useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";

const SideBarGroupItem = (props) => {
  const { itemLink = "/admin/list", title = "Admin", icon = "" } = props;
  const { pathname } = useLocation();
  const sideBarLinkClass =
    pathname === itemLink ? "sidebar-item active" : "sidebar-item";

  return (
    <>
      <li className={sideBarLinkClass}>
        <NavLink className="sidebar-link" to={itemLink} >
          <i className="align-middle" data-feather="sliders"></i> {icon && icon}
          {title}
        </NavLink>
      </li>
    </>
  );
};

export default SideBarGroupItem;
