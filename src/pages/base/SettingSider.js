import React from "react";

const SettingSider = () => {

    const onclickHandler = (e) => {
        e.preventDefault()

    }
  return (
    <>
    <div className="settings js-settings">
      <div className="settings-toggle">
        <div
          className="settings-toggle-option settings-toggle-option-text js-settings-toggle"
          title="Theme Builder"
        >
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
            className="feather feather-sliders align-middle mb-1"
          >
            <line x1="4" y1="21" x2="4" y2="14" />
            <line x1="4" y1="10" x2="4" y2="3"/>
            <line x1="12" y1="21" x2="12" y2="12"/>
            <line x1="12" y1="8" x2="12" y2="3"/>
            <line x1="20" y1="21" x2="20" y2="16"/>
            <line x1="20" y1="12" x2="20" y2="3"/>
            <line x1="1" y1="14" x2="7" y2="14"/>
            <line x1="9" y1="8" x2="15" y2="8"/>
            <line x1="17" y1="16" x2="23" y2="16"/>
          </svg>
          Builder
        </div>
        <a
          className="settings-toggle-option"
          title="Documentation"
          href="docs-introduction.html"
          target="_blank"
        >
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
            className="feather feather-book-open align-middle"
          >
            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
          </svg>
        </a>
      </div>

      <div className="settings-panel">
        <div className="settings-content">
          <div className="settings-title d-flex align-items-center">
            <button
              type="button"
              className="btn-close float-right js-settings-toggle"
              aria-label="Close"
            ></button>

            <h4 className="mb-0 ms-2 d-inline-block">Theme Builder</h4>
          </div>

          <div className="settings-body">
            <div className="alert alert-primary" role="alert">
              <div className="alert-message">
                <strong>Hey there!</strong> Set your own customized style below.
                Choose the ones that best fits your needs.
              </div>
            </div>

            <div className="mb-3">
              <span className="d-block font-size-lg font-weight-bold">
                Color scheme
              </span>
              <span className="d-block text-muted mb-2">
                The perfect color mode for your app.
              </span>

              <div className="row g-0 text-center mx-n1 mb-2">
                <div className="col">
                  <label className="mx-1 d-block mb-1">
                    <input
                      className="settings-scheme-label"
                      type="radio"
                      name="theme"
                      value="default"
                    />
                    <div className="settings-scheme">
                      <div className="settings-scheme-theme settings-scheme-theme-default"></div>
                    </div>
                  </label>
                  Default
                </div>
                <div className="col">
                  <label className="mx-1 d-block mb-1">
                    <input
                      className="settings-scheme-label"
                      type="radio"
                      name="theme"
                      value="colored"
                    />
                    <div className="settings-scheme">
                      <div className="settings-scheme-theme settings-scheme-theme-colored"></div>
                    </div>
                  </label>
                  Colored
                </div>
              </div>
              <div className="row g-0 text-center mx-n1">
                <div className="col">
                  <label className="mx-1 d-block mb-1">
                    <input
                      className="settings-scheme-label"
                      type="radio"
                      name="theme"
                      value="dark"
                    />
                    <div className="settings-scheme">
                      <div className="settings-scheme-theme settings-scheme-theme-dark"></div>
                    </div>
                  </label>
                  Dark
                </div>
                <div className="col">
                  <label className="mx-1 d-block mb-1">
                    <input
                      className="settings-scheme-label"
                      type="radio"
                      name="theme"
                      value="light"
                    />
                    <div className="settings-scheme">
                      <div className="settings-scheme-theme settings-scheme-theme-light"></div>
                    </div>
                  </label>
                  Light
                </div>
              </div>
            </div>

            <hr />

            <div className="mb-3">
              <span className="d-block font-size-lg font-weight-bold">
                Sidebar position
              </span>
              <span className="d-block text-muted mb-2">
                Toggle the position of the sidebar.
              </span>

              <div>
                <label>
                  <input
                    className="settings-button-label"
                    type="radio"
                    name="sidebarPosition"
                    value="left"
                  />
                  <div className="settings-button">Left</div>
                </label>
                <label>
                  <input
                    className="settings-button-label"
                    type="radio"
                    name="sidebarPosition"
                    value="right"
                  />
                  <div className="settings-button">Right</div>
                </label>
              </div>
            </div>

            <hr />

            <div className="mb-3">
              <span className="d-block font-size-lg font-weight-bold">
                Sidebar behavior
              </span>
              <span className="d-block text-muted mb-2">
                Change the behavior of the sidebar.
              </span>

              <div>
                <label>
                  <input
                    className="settings-button-label"
                    type="radio"
                    name="sidebarBehavior"
                    value="sticky"
                  />
                  <div className="settings-button">Sticky</div>
                </label>
                <label>
                  <input
                    className="settings-button-label"
                    type="radio"
                    name="sidebarBehavior"
                    value="fixed"
                  />
                  <div className="settings-button">Fixed</div>
                </label>
                <label>
                  <input
                    className="settings-button-label"
                    type="radio"
                    name="sidebarBehavior"
                    value="compact"
                  />
                  <div className="settings-button">Compact</div>
                </label>
              </div>
            </div>

            <hr />

            <div className="mb-3">
              <span className="d-block font-size-lg font-weight-bold">Layout</span>
              <span className="d-block text-muted mb-2">
                Toggle container layout system.
              </span>

              <div>
                <label>
                  <input
                    className="settings-button-label"
                    type="radio"
                    name="layout"
                    value="fluid"
                  />
                  <div className="settings-button">Fluid</div>
                </label>
                <label>
                  <input
                    className="settings-button-label"
                    type="radio"
                    name="layout"
                    value="boxed"
                  />
                  <div className="settings-button">Boxed</div>
                </label>
              </div>
            </div>
          </div>

          <div className="settings-footer">
            <div className="d-grid">
              <a
                className="btn btn-primary btn-lg btn-block"
                href="https://themes.getbootstrap.com/product/appstack-responsive-admin-template/"
                target="_blank"
                rel="noreferrer"
              >
                Purchase
              </a>
            </div>
          </div>
        </div>
      </div>
      </div>
      </>
  );
};

export default SettingSider;
