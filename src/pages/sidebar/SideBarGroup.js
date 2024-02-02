import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { UIActions } from "../../store/admin/UISlice";
const SideBarGroup = (props) => {
  const {
    title = "Dashboard",
    icon = "Sliders",
    navLink = "/"
  } = props;

  const dispatch = useDispatch();
  const activeSideMenu = useSelector((state) => state.ui.activeSideMenu);

  let expanded = activeSideMenu === props.value ? true : false;

  const onClickHandler = (e, value) => {
    e.preventDefault();
    dispatch(UIActions.changeActiveSideMenu(value));
  };

  return (
    <>
      <li className={`sidebar-item ${expanded ? "active" : ""}`}>
        <NavLink
          href={navLink}
          className={`sidebar-link ${!expanded && "collapsed"}`}
          onClick={(e) => onClickHandler(e, props.value)}
          aria-expanded={expanded ? true : false}
          data-toggle={"collapse"}
        >
          <i className="align-middle" data-feather="sliders"></i>{" "}
          <span className="align-middle">
            {icon}
            {title}
          </span>
        </NavLink>
        <ul
          id="users"
          className={`sidebar-dropdown list-unstyled collapse ${
            expanded && "show"
          } `}
          data-parent="#sidebar"
        >
          {props.children}
        </ul>
      </li>
    </>
  );
};

export default SideBarGroup;
