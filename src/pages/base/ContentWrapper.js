import React from "react";
import SideBar from "../sidebar/SideBar";
import NavBar from "../navbar/NavBar";
import SportsSelection from "./SportsSelection";

const ContentWrapper = ({ children }) => {
  return (
   
    <div className="wrapper">
      <SideBar />
      <div className="main">
        <NavBar />

        <main className="content">
          <div className="container-fluid p-0">{children}</div>
        </main>
      </div>
      <SportsSelection/>
    </div>
   
    
  );
};

export default ContentWrapper;
