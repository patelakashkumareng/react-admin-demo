import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Users, Sliders, Image } from "react-feather";

const SideBar = () => {
  const [collapsed, setCollapsed] = useState(true);
  const location = useLocation();
  const getNavLinkClass = (path) => {
    return location.pathname === path ? "sidebar-item active" : "sidebar-item";
  };

  const onClickHandler = (e) => {
    e.preventDefault()
    console.log('OnClick Handler Called');

    setCollapsed((prev) => !prev)

  }


  console.log('collepsed: ', collapsed);

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
              className={`sidebar-link ${ collapsed && 'collapsed'}`}
              onClick={onClickHandler}
              aria-expanded={ collapsed ? false : true}
            >
              <i className="align-middle" data-feather="sliders"></i>{" "}
              <span className="align-middle">
                <Users />
                Users
              </span>
            </a>
            <ul
              id="users"
              className={`sidebar-dropdown list-unstyled collapse ${!collapsed && "show"} `}
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
            <NavLink
              to={`/banner/list`}
              className="sidebar-link"
            >
              <i className="align-middle" data-feather="sliders"></i>{" "}
              <span className="align-middle">
                <Image />
                Banners
              </span>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default SideBar;
