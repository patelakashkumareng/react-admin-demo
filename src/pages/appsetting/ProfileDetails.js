import React from "react";

const ProfileDetaills = (props) => {

  const adminData = props.adminData
  return (

      <div className="col-md-4 col-xl-3">
        <div className="card mb-3 position-sticky sticky-top">
          <div className="card-header">
            <div class="card-actions float-right">
              <div class="dropdown show">
                <a href="/#" data-toggle="dropdown" data-display="static">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-more-horizontal align-middle"
                  >
                    <circle cx="12" cy="12" r="1"></circle>
                    <circle cx="19" cy="12" r="1"></circle>
                    <circle cx="5" cy="12" r="1"></circle>
                  </svg>
                </a>

                <div class="dropdown-menu dropdown-menu-right">
                  <a class="dropdown-item" href="/#">
                    Action
                  </a>
                  <a class="dropdown-item" href="/#">
                    Another action
                  </a>
                  <a class="dropdown-item" href="/#">
                    Something else here
                  </a>
                </div>
              </div>
            </div>
            <h5 className="card-title mb-0">Profile Details</h5>
          </div>
          <div className="card-body text-center">
            <img
              src="img\avatars\avatar-4.jpg"
              alt="Stacie Hall"
              className="img-fluid rounded-circle mb-2"
              width="128"
              height="128"
            />
            <h5 className="card-title mb-0">{adminData?.firstname + " " + adminData.lastname}</h5>
            <div className="text-muted mb-2">{adminData?.role}</div>

            <div>
              <button className="btn btn-success btn-sm">{adminData.status ? "active" : "inactive"}</button>
            </div>
          </div>
          <hr className="my-0" />
          <div className="card-body">
            <h5 className="h6 card-title">Skills</h5>
            <a href="/#" className="badge badge-primary mr-1 my-1">
              HTML
            </a>
            <a href="/#" className="badge badge-primary mr-1 my-1">
              JavaScript
            </a>
            <a href="/#" className="badge badge-primary mr-1 my-1">
              Sass
            </a>
            <a href="/#" className="badge badge-primary mr-1 my-1">
              React
            </a>
            <a href="/#" className="badge badge-primary mr-1 my-1">
              Redux
            </a>

          </div>
          <hr className="my-0" />
          <div className="card-body">
            <h5 className="h6 card-title">About</h5>
            <ul className="list-unstyled mb-0">
              <li className="mb-1">
                <span data-feather="home" className="feather-sm mr-1"></span>{" "}
                is Master Admin? <button className="btn btn-info btn-sm rounded ">{adminData.isMasterAdmin ? "yes" : "no"}</button>
              </li>

              <li className="mb-1">
                <span
                  data-feather="briefcase"
                  className="feather-sm mr-1"
                ></span>{" "}
                Works at <a href="/#">GitHub</a>
              </li>
              <li className="mb-1">
                <span data-feather="map-pin" className="feather-sm mr-1"></span>{" "}
                From <a href="/#">Boston</a>
              </li>
            </ul>
          </div>
          <hr className="my-0" />
          <div className="card-body">
            <h5 className="h6 card-title">Elsewhere</h5>
            <ul className="list-unstyled mb-0">
              <li className="mb-1">
                <span className="fas fa-globe fa-fw mr-1"></span>{" "}
                <a href="/#">staciehall.co</a>
              </li>
              <li className="mb-1">
                <span className="fab fa-twitter fa-fw mr-1"></span>{" "}
                <a href="/#">Twitter</a>
              </li>
              <li className="mb-1">
                <span className="fab fa-facebook fa-fw mr-1"></span>{" "}
                <a href="/#">Facebook</a>
              </li>
              <li className="mb-1">
                <span className="fab fa-instagram fa-fw mr-1"></span>{" "}
                <a href="/#">Instagram</a>
              </li>
              <li className="mb-1">
                <span className="fab fa-linkedin fa-fw mr-1"></span>{" "}
                <a href="/#">LinkedIn</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
  );
};

export default ProfileDetaills;
