import React, { useEffect, useState, useCallback } from "react";
import { useForm } from "react-hook-form";
import ContentWrapper from "../base/ContentWrapper";
import Input from "../../components/UI/Input";
import Select from "../../components/UI/Select";
import Button from "../../components/UI/Button";
import Radio from "../../components/UI/Radio";
import CheckBox from "../../components/UI/CheckBox";
import { Loading } from "../../components";
import { config } from "./../../config/index";
import { useNavigate } from "react-router-dom";

import useHttp from "../../hooks/useHttp";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CreateBanner = (props) => {
  const { title = "Create Admin", description = "Form For Create Admin" } =
    props;
  const navigate = useNavigate();
  const { isLoading, error, response, sendRequest: createAdminAPI } = useHttp();

  const createAdmin = useCallback(
    async (requestObject) => {
      await createAdminAPI({
        url: config.API_BASE_URL + "/banner/create",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: requestObject,
      });
    },
    [createAdminAPI]
  );
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const requestObject = {
      username: data.username,
      firstname: data.firstname,
      lastname: data.lastname,
      email: data.email,
      mobile: data.mobile,
      password: data.password,
      status: data.status,
      is_master_admin: data.isMasterAdmin ? 1 : 0,
      role: data.role,
    };

    await createAdmin(requestObject);
  };

  if (!isLoading && !error && response) {
    toast.success(response.message, config.TOAST_UI);
    navigate("/banner/list");
  }
  const bannerUsedInOptions = [
    { label: "Select Banner used in" },
    {
      value: 1,
      label: "Web",
    },
    { value: 2, label: "App" },
  ];

  return (
    <ContentWrapper>
      <div className="card">
        {isLoading && <Loading />}
        <div className="card-header">
          <h5 className="card-title">{title}</h5>
          <h6 className="card-subtitle text-muted">{description}</h6>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-row">
              <Input
                id="name"
                className={`form-control ${errors.name ? "is-invalid" : ""}`}
                type="text"
                name="name"
                placeholder="Banner Name"
                label="Banner Name"
                divStyle="form-group col-md-6"
                {...register("name", {
                  required: "Banner Name is required",
                })}
                error={errors.name?.message}
              />
              <Input
                id="type"
                className={`form-control ${
                  errors.lastname ? "is-invalid" : ""
                }`}
                type="text"
                name="type"
                placeholder="Banner Type"
                label="Banner Type"
                divStyle="form-group col-md-6"
                {...register("type", {
                  required: "Banner Type is required",
                })}
                error={errors.lastname?.message}
              />
              <Select
                id="usedIn"
                className="form-control"
                label="usedIn"
                divStyle="form-group col-md-6"
                options={bannerUsedInOptions}
                {...register("usedIn")}
              />
              <Input
                id="username"
                className={`form-control ${
                  errors.username ? "is-invalid" : ""
                }`}
                type="text"
                name="duration"
                placeholder="Banner Duration:"
                label="duration"
                divStyle="form-group col-md-6"
                {...register("duration", {
                  required: "Banner is required",
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
              <div className="form-group col-md-6">
                <Radio
                  id="status1"
                  name="status"
                  className={`form-check-input ${
                    errors.status ? "is-invalid" : ""
                  }`}
                  type="radio"
                  label="Active"
                  labelStyle="form-check form-check-inline"
                  value="1"
                  {...register("status", {
                    required: "field is required",
                  })}
                  error={errors.status?.message}
                />

                <Radio
                  id="status0"
                  name="status"
                  className={`form-check-input ${
                    errors.status ? "is-invalid" : ""
                  }`}
                  type="radio"
                  label="In active"
                  labelStyle="form-check form-check-inline"
                  value="0"
                  {...register("status", {
                    required: "field is required",
                  })}
                  error={errors.status?.message}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <CheckBox
                  className="custom-control-input"
                  labelStyle="custom-control custom-checkbox m-0"
                  text="Is Master Admin.?"
                  {...register("isMasterAdmin")}
                />
              </div>
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

export default CreateBanner;
