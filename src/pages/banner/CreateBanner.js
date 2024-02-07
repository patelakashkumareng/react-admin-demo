import React, { useCallback } from "react";
import { useForm } from "react-hook-form";
import ContentWrapper from "../base/ContentWrapper";
import Input from "../../components/UI/Input";
import Select from "../../components/UI/Select";
import Button from "../../components/UI/Button";
import { Loading } from "../../components";
import { config } from "./../../config/index";
import { useNavigate } from "react-router-dom";
import useHttp from "../../hooks/useHttp";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  ConvertDateIntoUTC,
  bannerUsedInOptions,
  bannerTypeOption,
} from "./utility.banner";

const CreateBanner = (props) => {
  const { title = "Create Admin", description = "Form For Create Admin" } =
    props;
  const navigate = useNavigate();
  const { isLoading, error, response, sendRequest: createAdminAPI } = useHttp();

  const createBanner = useCallback(
    async (requestObject) => {
      console.log("req obj just before api call: ", requestObject);
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
