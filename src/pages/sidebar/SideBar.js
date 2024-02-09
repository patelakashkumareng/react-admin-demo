import React from "react";
import SideBarGroup from "./SideBarGroup";
import SideBarItem from "./SideBarItem";
import SideBarGroupItem from "./SideBarGroupItem";

import { Sliders, User, Image } from "react-feather";

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
          <SideBarItem
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
            <SideBarGroupItem itemLink="/admin/list" title="Admin" />
            <SideBarGroupItem itemLink="/admin/create" title="Create Admin" />
          </SideBarGroup>
          <SideBarGroup
            title={"Banners"}
            icon={<Image />}
            navLink={"/#"}
            value={"banners"}
          >
            <SideBarGroupItem itemLink="/banner/list" title="Banners" />
            <SideBarGroupItem itemLink="/banner/create" title="Create Banner" />
          </SideBarGroup>
        </ul>
      </div>
    </nav>
  );
};

export default SideBar;
