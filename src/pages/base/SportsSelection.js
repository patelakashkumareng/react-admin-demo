import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBaseballBatBall, faBasketball, faFutbol } from "@fortawesome/free-solid-svg-icons";
import { Button } from "../../components";

function SportsSelection() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={`settings ${isOpen ? "open" : ""}`}>
      <div className="settings-toggle toggle-settings" >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          onClick={(e) => setIsOpen((prev) => !prev)}
          className="feather feather-settings align-middle"
        >
          <circle cx="12" cy="12" r="3"></circle>
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
        </svg>
      </div>


      <div className="settings-panel " style={{ top: "100px", height:"40%" }}>
        <div className="settings-content js-simplebar" data-simplebar="init">
          <div className="simplebar-wrapper" style={{ margin: "0px" }}>
            <div className="simplebar-height-auto-observer-wrapper">
              <div className="simplebar-height-auto-observer"></div>
            </div>
            <div className="simplebar-mask">
              <div
                className="simplebar-offset"
                style={{ right: "0px", bottom: "0px" }}
              >
                <div
                  className="simplebar-content-wrapper"
                  style={{ height: "100%", overflow: "hidden" }}
                >
                  <div className="simplebar-content" style={{ padding: "0px" }}>
                    <div className="settings-title">
                      <button
                        type="button"
                        className="close float-right toggle-settings"
                        aria-label="Close"
                        onClick={(e) => setIsOpen(false)}
                      >
                        <span aria-hidden="true">×</span>
                      </button>

                      <h4>Sports List</h4>
                    </div>

                    <div className="settings-section">
                      <small className="d-block text-uppercase font-weight-bold text-muted mb-2">
                        Sports
                      </small>

                      <ul className="settings-layouts">
                        <li>
                            <div className="">
                            <FontAwesomeIcon icon={faBaseballBatBall} className="pr-2"/>
                            <a
                            className="settings-layouts-item"
                            href="layouts-sidebar-sticky.html"
                          >               

                            Cricket
                            
                          </a>
                            </div>
            
      
                        </li>
                        <li>
                        <FontAwesomeIcon icon={faFutbol} className="pr-2"/>
                          <a
                            className="settings-layouts-item"
                            href="layouts-sidebar-collapsed.html"
                          >
                            Football
                          </a>
                        </li>
                        <li>
                        <FontAwesomeIcon icon={faBasketball} className="pr-2"/>
                          <a
                            className="settings-layouts-item"
                            href="layouts-boxed.html"
                          >
                            Basketball
                          </a>
                        </li>
                      </ul>
                    </div>

                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default SportsSelection;
