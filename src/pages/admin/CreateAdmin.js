import React from "react";
import { useForm } from "react-hook-form";
import ContentWrapper from "../base/ContentWrapper";
import Input from "../../components/UI/Input";
import Select from "../../components/UI/Select";
import Button from "../../components/UI/Button";
import Radio from "../../components/UI/Radio";
import CheckBox from "../../components/UI/CheckBox";

const CreateAdmin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log('data', data);
  }

  const roleList = [
    { id: 1, name: "Maintainer" },
    { id: 2, name: "Owner" },
    { id: 3, name: "Developer" },
  ];

  return (
    <ContentWrapper>
      <div className="card">
        <div className="card-header">
          <h5 className="card-title">Form row</h5>
          <h6 className="card-subtitle text-muted">Bootstrap column layout.</h6>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-row">
              <Input
                id="username"
                className={`form-control ${
                  errors.username ? "is-invalid" : ""
                }`}
                type="text"
                name="username"
                placeholder="Username"
                label="Username"
                divStyle="form-group col-md-6"
                {...register("username", {
                  required: "Username is required"
                })}
                error={errors.username?.message}
              />
              <Input
                id="password"
                className={`form-control ${
                  errors.password ? "is-invalid" : ""
                }`}
                type="password"
                placeholder="Password"
                label="Password"
                divStyle="form-group col-md-6"
                {...register("password", {
                  required: "Password is required",
                })}
                error={errors.password?.message}
              />
            </div>
            <div className="form-row">
              <Input
                id="email"
                className={`form-control ${errors.email ? "is-invalid" : ""}`}
                type="text"
                placeholder="Email"
                label="Email"
                divStyle="form-group col-md-6"
                {...register("email", {
                  required: "Email is required",
                  validate: {
                    matchPatern: (value) =>
                      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
                        value
                      ) || "Email address must be a valid address",
                  },
                })}
                error={errors.email?.message}
              />
              <Input
                id="mobile"
                className={`form-control ${errors.mobile ? "is-invalid" : ""}`}
                type="text"
                placeholder="Mobile"
                label="Mobile"
                divStyle="form-group col-md-6"
                {...register("mobile", {
                  required: "Mobile number is required",
                })}
                error={errors.mobile?.message}
              />
            </div>
            <div className="form-row">
              <Select
                id="role"
                className="form-control"
                label="Role"
                divStyle="form-group col-md-6"
                options={roleList}
              />
              <div className="card-body">
                <div>
                  <Radio
                    id="status1"
                    name="status"
                    className="form-check-input"
                    type="radio"
                    label="Active"
                    labelStyle="form-check form-check-inline"
                    value="1"
                  />

                  <Radio
                    id="status0"
                    name="status"
                    className="form-check-input"
                    type="radio"
                    label="In active"
                    labelStyle="form-check form-check-inline"
                    value="0"
                  />
                </div>
              </div>
            </div>
            <div className="form-group">
              <CheckBox
                className="custom-control-input"
                labelStyle="custom-control custom-checkbox m-0"
                text="Is Master Admin.?"
              />
            </div>
            <Button type="submit" className="btn btn-primary">
              Submit
            </Button>
          </form>
        </div>
      </div>
    </ContentWrapper>
  );
};

export default CreateAdmin;
