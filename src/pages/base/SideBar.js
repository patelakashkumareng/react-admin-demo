import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Users, Sliders } from "react-feather";

const SideBar = () => {
  const location = useLocation();
  const getNavLinkClass = (path) => {
    return location.pathname === path ? "sidebar-item active" : "sidebar-item";
  };

  return (
    <nav id="sidebar" className="sidebar">
      <div className="sidebar-content ">
        <a className="sidebar-brand" href="?#">
          <i className="align-middle" data-feather="box"></i>
          <span className="align-middle">AppStack</span>
        </a>

        <ul className="sidebar-nav">
          <li className="sidebar-header">Main</li>
          <li className={getNavLinkClass("/")}>
            <NavLink
              to={`/`}
              className="sidebar-link"
            >
              <i className="align-middle" data-feather="sliders"></i>{" "}
              <span className="align-middle">
                <Sliders />
                Dashboard
              </span>
            </NavLink>
          </li>
          <li className="sidebar-item">
            <a
              href="/#"
              data-toggle="collapse"
              className="sidebar-link"
            >
              <i className="align-middle" data-feather="sliders"></i>{" "}
              <span className="align-middle">
                <Users />
                Users
              </span>
            </a>
            <ul
              id="dashboards"
              className="sidebar-dropdown list-unstyled collapse show"
              data-parent="#sidebar"
            >
              <li className={getNavLinkClass("/admin/list")}>
                <NavLink className="sidebar-link" to={`/admin/list`}>
                  Admin
                </NavLink>
              </li>
              <li className={getNavLinkClass("/admin/create")}>
                <NavLink className="sidebar-link" to={`/admin/create`}>
                  Create Admin
                </NavLink>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default SideBar;
