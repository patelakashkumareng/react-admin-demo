import React, { useState } from "react";
import { Sliders, User } from "react-feather";
import { NavLink } from "react-router-dom";
const SideBarGroup = ({
  title = "Dashboard",
  icon = "Sliders",
  navLink = "/",
  dataToggle= false,
  ...props
}) => {
  const [showActive, setShowActive] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const onClickHandler = (e) => {
    e.preventDefault();
    // setShowActive(true);
    setExpanded((prev) => !prev);
};
console.log('Show Active', showActive);
  return (
    <>
      <li className={`sidebar-item ${expanded && "active"}`}>
        <a
          href={navLink}
          className="sidebar-link"
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
        </a>
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
