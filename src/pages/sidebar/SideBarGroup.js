import React, { useState } from "react";
import { Sliders, User } from "react-feather";
import { NavLink, useLocation } from "react-router-dom";
const SideBarGroup = ({
  title = "Dashboard",
  icon = "Sliders",
  navLink = "/",
  dataToggle= false,
  ...props
}) => {
  // const [showActive, setShowActive] = useState(false);
  const [expanded, setExpanded] = useState(false);

      //assigning location variable
      const location = useLocation();

      //destructuring pathname from location
      const { pathname } = location;

  const onClickHandler = (e) => {
    e.preventDefault();
    setExpanded((prev) => !prev);
};
console.log('pathname', pathname);
  return (
    <>
      <li className={`sidebar-item ${pathname === navLink && "active"}`}>
        <NavLink
          href={navLink}
          className={`sidebar-link ${ !expanded && "collapsed"}`}
          onClick={(e) => onClickHandler(e)}
          aria-expanded={expanded ? true : false}
          data-toggle={dataToggle && "collapse"}
        >
          <i className="align-middle" data-feather="sliders"></i>{" "}
          <span className="align-middle">
            {icon === "Sliders" && <Sliders />}
            {icon === "Users" && <User />}
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
