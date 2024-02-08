import React, { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import ContentWrapper from "../base/ContentWrapper";
import Input from "../../components/UI/Input";
import Select from "../../components/UI/Select";
import Button from "../../components/UI/Button";
import { Loading, Radio } from "../../components";
import { config } from "./../../config/index";
import { useNavigate } from "react-router-dom";
import useHttp from "../../hooks/useHttp";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  ConvertDateIntoUTC,
  bannerUsedInOptions,
  bannerTypeOption,
  sportTypeOption,
  screenIdOption,
} from "./utility.banner";

const CreateBanner = (props) => {
  const { title = "Create Banner", description = "Form For Create Banner" } =
    props;
  const navigate = useNavigate();
  const [usedIn, setUsesdIn] = useState(null);
  const [screenId, setScreenId] = useState(null)

  console.log("usedIn:: ", usedIn);

  const { isLoading, error, response, sendRequest: createAdminAPI } = useHttp();

  const createBanner = useCallback(
    async (requestObject) => {
      await createAdminAPI({
        url: "http://localhost:1351/api/banner/create",
        method: "POST",
        headers: {
          "Content-Type": "multipart/form-data",
        },
        body: requestObject,
        contentType: "form-data",
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
    const formData = new FormData();
    const startDate = ConvertDateIntoUTC(data.startDate);
    const endDate = ConvertDateIntoUTC(data.endDate);

    formData.append("banner_name", data.name);
    formData.append("banner_type", +data.bannerType);
    formData.append("start_date", startDate);
    formData.append("end_date", endDate);
    formData.append("banner_used_in", +data.usedIn);
    formData.append("image", data.image[0]);

    +(data.usedIn) === 0 ? formData.append(data.url) : formData.append(data.screenId)

    console.log("req obj: ", formData);

    await createBanner(formData);
  };

  if (!isLoading && !error && response) {
    toast.success(response.message, config.TOAST_UI);
    navigate("/banner/list");
  }

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
                showLabel={true}
                placeholder="Banner Name"
                label="Banner Name"
                divStyle="form-group col-md-6"
                {...register("name", {
                  required: "Banner Name is required",
                })}
                error={errors.name?.message}
              />
              <Select
                id="usedIn"
                className={`form-control ${errors.usedIn ? "is-invalid" : ""}`}
                label="Banner Used In : "
                showLabel={true}
                divStyle="form-group col-md-6"
                options={bannerUsedInOptions}
                {...register("usedIn", {
                  required: "Banner Name is required",
                  onChange: (e) => setUsesdIn(parseInt(e.target.value)),
                  validate: {
                    isValidValue: (v) =>
                      ["0", "1"].includes(v) || "please select banner used in",
                  },
                })}
                error={errors.usedIn?.message}
              />
            </div>
            <div className="">
              <h5>Banner Duration: </h5>
            </div>
            <div className="form-row">
              <Input
                id="startDate"
                className={`form-control ${
                  errors.startDate ? "is-invalid" : ""
                }`}
                type="date"
                placeholder="Start Date"
                showLabel={true}
                label="Start Date: "
                divStyle="form-group col-md-6"
                {...register("startDate", {
                  required: "Start Date is required",
                  valueAsDate: true,
                })}
                error={errors.startDate?.message}
              />
              <Input
                id="endDate"
                className={`form-control ${errors.endDate ? "is-invalid" : ""}`}
                type="date"
                placeholder="End Date"
                showLabel={true}
                label="End Date: "
                divStyle="form-group col-md-6"
                {...register("endDate", {
                  required: "End Date is required",
                  valueAsDate: true,
                })}
                error={errors.endDate?.message}
              />
            </div>
            <div className="form-row">
              <Select
                id="bannerType"
                className={`form-control ${
                  errors.bannerType ? "is-invalid" : ""
                }`}
                showLabel={true}
                label="Banner Type:"
                divStyle="form-group col-md-6"
                options={bannerTypeOption}
                {...register("bannerType", {
                  validate: {
                    isValidValue: (v) =>
                      ["0", "1"].includes(v) || "please select banner type",
                  },
                })}
                error={errors.bannerType?.message}
              />
              <Input
                id="image"
                type="file"
                placeholder="Image"
                className={`ml-2 ${
                  errors.image ? "form-control is-invalid" : ""
                }`}
                showLabel={true}
                labelStyle={"form-label w-100 ml-2"}
                label="Banner Image:"
                divStyle="form-group"
                {...register("image", {
                  required: "Please Select image",
                })}
                error={errors.image?.message}
              />
            </div>
            <div className="form-row">
              {usedIn === 0 && (
                <Input
                  id="url"
                  className={`form-control ${errors.url ? "is-invalid" : ""}`}
                  type="text"
                  placeholder="URL"
                  showLabel={true}
                  label="Banner URL: "
                  divStyle="form-group col-md-6"
                  {...register("url", {
                    required: "URL is Required",
                  })}
                  error={errors.url?.message}
                />
              )}
              {usedIn === 1 && (
                <>
                <Select
                  id="screenId"
                  className={`form-control ${
                    errors.screenId ? "is-invalid" : ""
                  }`}
                  showLabel={true}
                  label="Screen ID:"
                  divStyle="form-group col-md-6"
                  options={screenIdOption}
                  {...register("screenId", {
                    onChange: (e) =>  setScreenId(parseInt(e.target.value)),
                    validate: {
                      isValidValue: (v) =>
                        ["1","2","3","4"].includes(v) ||
                        "please select screen id",
                    },
                  })}
                  error={errors.screenId?.message}
                />
                {(screenId === 3 || screenId === 4 ) && <Select
                id="sportType"
                className={`form-control ${
                  errors.sportType ? "is-invalid" : ""
                }`}
                showLabel={true}
                label="Sport Type:"
                divStyle="form-group col-md-6"
                options={sportTypeOption}
                {...register("sportType", {
                  validate: {
                    isValidValue: (v) =>
                      ["1", "2"].includes(v) ||
                      "please select sport type",
                  },
                })}
                error={errors.sportType?.message}
              />}
              </>
                
              )}
            </div>
            <div className="form-row">
              <div className="form-group col-md-6 mt-2">
                <div className="">Status:</div>
                <Radio
                  id="status1"
                  name="status"
                  className={`form-check-input ${
                    errors.status ? "is-invalid" : ""
                  }`}
                  type="radio"
                  label="Active"
                  checked
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
                  label="InActive"
                  labelStyle="form-check form-check-inline"
                  value="0"
                  {...register("status", {
                    required: "field is required",
                  })}
                  error={errors.status?.message}
                />
              </div>
            </div>
            <div className="d-flex justify-content-center">
              <Button type="submit" className="btn btn-primary w-40">
                Save Banner
              </Button>
            </div>
          </form>
        </div>
      </div>
    </ContentWrapper>
  );
};

export default CreateBanner;
