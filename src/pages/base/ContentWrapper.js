import React from "react";
import SideBar from "../sidebar/SideBar";

const ContentWrapper = ({ children }) => {
  return (
    <div className="wrapper">
      <SideBar />
      <div className="main">
        <nav className="navbar navbar-expand navbar-light bg-white">
          <a className="sidebar-toggle d-flex mr-2" href="/#">
            <i className="hamburger align-self-center"></i>
          </a>

          <form className="form-inline d-none d-sm-inline-block">
            <input
              className="form-control form-control-no-border mr-sm-2"
              type="text"
              placeholder="Search projects..."
              aria-label="Search"
            />
          </form>
        </nav>

        <main className="content">
          <div className="container-fluid p-0">{children}</div>
        </main>
      </div>
    </div>
  );
};

export default ContentWrapper;
