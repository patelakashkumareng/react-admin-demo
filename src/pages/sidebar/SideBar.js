import React from "react";
import SideBarGroup from "./SideBarGroup";
import SidebarItems from "./SidebarItems";

import { Sliders, User } from "react-feather";

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
          <SidebarItems
            itemLink="/"
            title="DashBoard"
            icon={<Sliders />}
          />
          <SideBarGroup
            title={"Users"}
            icon={<User />}
            navLink={"/#"}
            value={"users"}
          >
            <SidebarItems itemLink="/admin/list" title="Admin" />
            <SidebarItems itemLink="/admin/create" title="Create Admin" />
          </SideBarGroup>
        </ul>
      </div>
    </nav>
  );
};

export default SideBar;
