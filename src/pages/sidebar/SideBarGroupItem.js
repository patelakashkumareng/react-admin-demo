import React from "react";
import { useDispatch } from "react-redux";
import {useNavigate, useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { UIActions } from "../../store/admin/UISlice";

const SideBarGroupItem = (props) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { itemLink = "/admin/list", title = "Admin", icon = "" } = props;
  const { pathname } = useLocation();
  const sideBarLinkClass =
    pathname === itemLink ? "sidebar-item active" : "sidebar-item";

    const clickHandler = (e, value) => {
      e.preventDefault()
      dispatch(UIActions.changeActiveNavBarMenu(""))
      dispatch(UIActions.changeToggleSideBar())
      navigate(value)
    }

  return (
    <>
      <li className={sideBarLinkClass}>
        <NavLink className="sidebar-link" to={itemLink} onClick={(e) => {clickHandler(e, itemLink)}}>
          <i className="align-middle" data-feather="sliders"></i> {icon && icon}
          {title}
        </NavLink>
      </li>
    </>
  );
};

export default SideBarGroupItem;
