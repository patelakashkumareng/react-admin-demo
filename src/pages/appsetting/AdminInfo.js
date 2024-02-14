import React from "react";
import { Button, Input } from "../../components";

const AdminInfo = (props) => {
  const data = props.data || null;
  return (
    
      <div className="tab-content">
        <div className="tab-pane fade active show" id="account" role="tabpanel">
          <div className="card">
            <div className="card-header">
              <h5 className="card-title mb-0">Admin info</h5>
            </div>
            <div className="card-body">
              <form>
                <div className="row">
                  <div className="col-md-8">
                    <Input
                      type={"text"}
                      className="form-control"
                      label={"Username"}
                      showLabel={true}
                      divStyle={"form-group"}
                      id="username"
                      value={data?.username}
                      readOnly
                    />
                    <div className="form-row">
                      <Input
                        type="text"
                        className="form-control"
                        divStyle={"form-group col-md-6"}
                        label={"FirstName"}
                        showLabel={true}
                        id="firstname"
                        defaultValue={data?.firstname}
                      />
                      <Input
                        type="text"
                        className="form-control"
                        divStyle={"form-group col-md-6"}
                        label={"LastName"}
                        showLabel={true}
                        id="lastname"
                        defaultValue={data?.lastname}
                      />
                    </div>
                    <Input
                      type="email"
                      className="form-control"
                      divStyle={"form-group"}
                      label={"Email"}
                      showLabel={true}
                      id="email"
                      defaultValue={data?.email}
                    />
                    <Input
                      type="text"
                      className="form-control"
                      divStyle={"form-group"}
                      label={"Mobile"}
                      showLabel={true}
                      id="mobile"
                      defaultValue={data?.mobile}
                    />
                  </div>
                  <div className="col-md-4">
                    <div className="text-center">
                      <img
                        alt="Chris Wood"
                        src="img\avatars\avatar.jpg"
                        className="rounded-circle img-responsive mt-2"
                        width="128"
                        height="128"
                      />
                      <div className="mt-2">
                        <span className="btn btn-primary">
                          <i className="fas fa-upload"></i> Upload
                        </span>
                      </div>
                      <small>
                        For best results, use an image at least 128px by 128px
                        in .jpg format
                      </small>
                    </div>
                  </div>
                </div>

                <Button type="submit" className="btn btn-primary">
                  Update changes
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
  );
};

export default AdminInfo;
