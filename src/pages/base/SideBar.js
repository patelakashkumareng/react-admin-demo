import React from "react";
import { NavLink } from "react-router-dom"

const SideBar = () => {
  return (
    <nav id="sidebar" className="sidebar">
      <div className="sidebar-content ">
        <a className="sidebar-brand" href="?#">
          <i className="align-middle" data-feather="box"></i>
          <span className="align-middle">AppStack</span>
        </a>

        <ul className="sidebar-nav">
          <li className="sidebar-header">Main</li>
          <li className="sidebar-item">
            <a
              href="#dashboards"
              data-toggle="collapse"
              className="sidebar-link"
            >
              <i className="align-middle" data-feather="sliders"></i>{" "}
              <span className="align-middle">Users</span>
            </a>
            <ul
              id="dashboards"
              className="sidebar-dropdown list-unstyled collapse show"
              data-parent="#sidebar"
            >
              <li className="sidebar-item">
                <NavLink className="sidebar-link" to={`/admin/list`}>
                  Admin
                </NavLink>
              </li>
              <li className="sidebar-item">
                <NavLink className="sidebar-link" to={`/admin/create`}>
                  Create Admin
                </NavLink>
              </li>
              <li className="sidebar-item">
                <NavLink className="sidebar-link" to={`/`}>
                  User
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
