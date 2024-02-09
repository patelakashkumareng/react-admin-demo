import React from "react";
import SideBarGroup from "./SideBarGroup";
import SideBarItem from "./SideBarItem";
import SideBarGroupItem from "./SideBarGroupItem";

import { Sliders, User, Image } from "react-feather";
import { useTranslation } from 'react-i18next'

const SideBar = () => {
  const { t } = useTranslation();
  return (
    <nav id="sidebar" className="sidebar">
      <div className="sidebar-content ">
        <a className="sidebar-brand" href="?#">
          <i className="align-middle" data-feather="box"></i>
          <span className="align-middle">AppStack</span>
        </a>

        <ul className="sidebar-nav">
          <li className="sidebar-header">{t('main', {ns: 'glossary'})}</li>
          <SideBarItem
            itemLink="/"
            title={t('dasboard', {ns: 'glossary'})}
            icon={<Sliders />}
          />
          <SideBarGroup
            title={t('users', {ns: 'glossary'})}
            icon={<User />}
            navLink={"/#"}
            value={"users"}
          >
            <SideBarGroupItem itemLink="/admin/list" title={t('admin', {ns: 'glossary'})} />
            <SideBarGroupItem itemLink="/admin/create" title={t('admin', {ns: 'glossary'}) + " " + t('create', {ns: 'glossary'})} />
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
