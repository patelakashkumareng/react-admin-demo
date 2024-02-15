import React from "react";
import useHttp from "../../hooks/useHttp";
import { Button, Input } from "../../components";
import { useForm } from "react-hook-form";
import { config } from "../../config";
import { toast } from "react-toastify";

const Password = () => {
  const { response, error, sendRequest, isLoading } = useHttp();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const updatePassword = async (body) => {
    const response = await sendRequest({
      url: config.API_BASE_URL + `/auth/update-password`,
      method: "POST",
      body,
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response || response.status !== 200) {
      return;
    }


  }

  const onPasswordSubmit = async (data) => {
    if(String(data.newPassword.trim()) !== String(data.verifyPassword.trim())){
      toast.error("please enter correct password", config.TOAST_UI);
      return
    }
    const apiBodyData = {
      current_password: data.currentPassword,
      new_password: data.newPassword,
    };
    updatePassword(apiBodyData)
  };

  if (!isLoading && !error && response) {
    toast.success(response.message, config.TOAST_UI);
  }

  if (error) {
    toast.error(response.message, config.TOAST_UI);
  }

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Update Password</h5>

        <form onSubmit={handleSubmit(onPasswordSubmit)}>
          <div className="form-group">
            <Input
              type={"password"}
              className="form-control"
              label={"Current Password"}
              showLabel={true}
              id="currentPassword"
              {...register("currentPassword", {
                required: "this field is required",
              })}
              error={errors.currentPassword?.message}
            />
            <small>
              <a href="#/">Forgot your password?</a>
            </small>
          </div>
          <Input
            type={"password"}
            className="form-control"
            label={"New Password"}
            divStyle={"form-group"}
            showLabel={true}
            id="newPassword"
            {...register("newPassword", {
              required: "this field is required",
            })}
            error={errors.newPassword?.message}
          />
          <Input
            type={"password"}
            className="form-control"
            label={"Verify Password"}
            divStyle={"form-group"}
            showLabel={true}
            id="verifyPassword"
            {...register("verifyPassword", {
              required: "this field is required",
            })}
            error={errors.verifyPassword?.message}
          />
          <Button type="submit" className="btn btn-primary">
            Save changes
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Password;
