import React from "react";
import ContentWrapper from "../base/ContentWrapper";
import ProfileDetaills from "./ProfileDetails";
import { useSelector } from 'react-redux'

const AppSetting = () => {

    const adminData = useSelector((state) => state.auth.userData)

    const data = {
        id: adminData?.AdminID,
        username: adminData?.username,
        firstname: adminData?.FirstName,
        lastname: adminData?.LastName,
        role: adminData?.Role,
        mobile: adminData?.Mobile,
        email: adminData?.Email,
        permission: adminData?.Permission,
        status: adminData?.Status,
        password: adminData?.Password,
        isMasterAdmin: adminData?.MasterAdmin,
        dateCreated: adminData?.DateCreated,
        dateModified: adminData?.DateModified
    }

    console.log('admin-data: ',data);
  return (
    <ContentWrapper>
      <div className="container-fluid p-0">
        <h1 className="h3 mb-3">Profile</h1>

        <div className="row">
          <ProfileDetaills adminData={data}/>
          <div class="col-md-6 col-xl-6">
            <div class="tab-content">
              <div
                class="tab-pane fade active show"
                id="account"
                role="tabpanel"
              >
                <div class="card">
                  <div class="card-header">
                    <h5 class="card-title mb-0">Public info</h5>
                  </div>
                  <div class="card-body">
                    <form>
                      <div class="row">
                        <div class="col-md-8">
                          <div class="form-group">
                            <label htmlFor="username">Username</label>
                            <input
                              type="text"
                              class="form-control"
                              id="username"
                              placeholder="Username"
                            />
                          </div>
                          <div className="form-row">
                          <div class="form-group col-md-6">
                            <label htmlFor="firstname">First name</label>
                            <input
                              type="text"
                              class="form-control"
                              id="firstname"
                              placeholder="First name"
                            />
                          </div>
                          <div class="form-group col-md-6">
                            <label htmlFor="lastname">Last name</label>
                            <input
                              type="text"
                              class="form-control"
                              id="lastname"
                              placeholder="Last name"
                            />
                          </div>
                          </div>

                          <div class="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                              type="email"
                              class="form-control"
                              id="email"
                              placeholder="Please Enter Email"
                            />
                          </div>
                          <div class="form-group">
                            <label htmlFor="phone">Phone</label>
                            <input
                              type="text"
                              class="form-control"
                              id="phone"
                              placeholder="Please Enter Email"
                            />
                          </div>
                        </div>
                        <div class="col-md-4">
                          <div class="text-center">
                            <img
                              alt="Chris Wood"
                              src="img\avatars\avatar.jpg"
                              class="rounded-circle img-responsive mt-2"
                              width="128"
                              height="128"
                            />
                            <div class="mt-2">
                              <span class="btn btn-primary">
                                <i class="fas fa-upload"></i> Upload
                              </span>
                            </div>
                            <small>
                              For best results, use an image at least 128px by
                              128px in .jpg format
                            </small>
                          </div>
                        </div>
                      </div>

                      <button type="submit" class="btn btn-primary">
                        Save changes
                      </button>
                    </form>
                  </div>
                </div>

                <div class="card">
                  <div class="card-header">
                    <h5 class="card-title mb-0">Private info</h5>
                  </div>
                  <div class="card-body">
                    <form>
                      <div class="form-row">
                        <div class="form-group col-md-6">
                          <label htmlFor="inputFirstName">First name</label>
                          <input
                            type="text"
                            class="form-control"
                            id="inputFirstName"
                            placeholder="First name"
                          />
                        </div>
                        <div class="form-group col-md-6">
                          <label htmlFor="inputLastName">Last name</label>
                          <input
                            type="text"
                            class="form-control"
                            id="inputLastName"
                            placeholder="Last name"
                          />
                        </div>
                      </div>
                      <div class="form-group">
                        <label htmlFor="inputEmail4">Email</label>
                        <input
                          type="email"
                          class="form-control"
                          id="inputEmail4"
                          placeholder="Email"
                        />
                      </div>
                      <div class="form-group">
                        <label htmlFor="inputAddress">Address</label>
                        <input
                          type="text"
                          class="form-control"
                          id="inputAddress"
                          placeholder="1234 Main St"
                        />
                      </div>
                      <div class="form-group">
                        <label htmlFor="inputAddress2">Address 2</label>
                        <input
                          type="text"
                          class="form-control"
                          id="inputAddress2"
                          placeholder="Apartment, studio, or floor"
                        />
                      </div>
                      <div class="form-row">
                        <div class="form-group col-md-6">
                          <label htmlFor="inputCity">City</label>
                          <input
                            type="text"
                            class="form-control"
                            id="inputCity"
                          />
                        </div>
                        <div class="form-group col-md-4">
                          <label htmlFor="inputState">State</label>
                          <select id="inputState" class="form-control">
                            <option selected="">Choose...</option>
                            <option>...</option>
                          </select>
                        </div>
                        <div class="form-group col-md-2">
                          <label htmlFor="inputZip">Zip</label>
                          <input
                            type="text"
                            class="form-control"
                            id="inputZip"
                          />
                        </div>
                      </div>
                      <button type="submit" class="btn btn-primary">
                        Save changes
                      </button>
                    </form>
                  </div>
                </div>
              </div>
              <div class="tab-pane fade" id="password" role="tabpanel">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">Password</h5>

                    <form>
                      <div class="form-group">
                        <label htmlFor="inputPasswordCurrent">
                          Current password
                        </label>
                        <input
                          type="password"
                          class="form-control"
                          id="inputPasswordCurrent"
                        />
                        <small>
                          <a href="/#">Forgot your password?</a>
                        </small>
                      </div>
                      <div class="form-group">
                        <label htmlFor="inputPasswordNew">New password</label>
                        <input
                          type="password"
                          class="form-control"
                          id="inputPasswordNew"
                        />
                      </div>
                      <div class="form-group">
                        <label htmlFor="inputPasswordNew2">Verify password</label>
                        <input
                          type="password"
                          class="form-control"
                          id="inputPasswordNew2"
                        />
                      </div>
                      <button type="submit" class="btn btn-primary">
                        Save changes
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ContentWrapper>
  );
};

export default AppSetting;
