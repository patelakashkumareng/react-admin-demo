import { Input, Button } from "../../components/index";
import useHttp from "../../hooks/useHttp";
import { useForm } from "react-hook-form";

import { config } from "../../config";
import { LOCAL_STORAGE } from "../../config/constant"

import { Loading } from "../../components/index";
import { toast } from "react-toastify";
import { useNavigate, useLocation } from "react-router-dom";

import { useDispatch } from "react-redux"
import { AuthAction } from "../../store/admin/AuthSlice";

import { useTranslation } from 'react-i18next'

export default function Login() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { state } = useLocation();
  const dispatch = useDispatch();
  const { isLoading, error, response, sendRequest } = useHttp();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitHandler = async (data) => {
    await sendRequest({
      url: config.API_BASE_URL + "/admin/login",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: {
        username: data.username,
        password: data.password,
      },
    });
  };

  if (!isLoading && error) {
    toast.error(error, config.TOAST_UI);
  }

  if (!isLoading && !error && response) {
    toast.success(response.message, config.TOAST_UI);
    dispatch(AuthAction.login(response.data))
    localStorage.setItem(LOCAL_STORAGE.AUTH_TOKEN, response.data.UserToken)
    localStorage.setItem(LOCAL_STORAGE.USER_DATA, JSON.stringify(response.data))
    setTimeout(() => {
      navigate(state?.path || "/");
    }, 0)
  }

  return (
    <main className="main d-flex w-100">
      <div className="container d-flex flex-column">
        <div className="row h-100">
          <div className="col-sm-10 col-md-8 col-lg-6 mx-auto d-table h-100">
            <div className="d-table-cell align-middle">
              <div className="text-center mt-4">
                <h1 className="h2">{t('welcome-back', {ns: 'glossary'})}, Twelfthman</h1>
                <p className="lead">Sign in to your account to continue</p>
              </div>

              <div className="card">
                <div className="card-body">
                  <div className="m-sm-4">
                  <div className="text-center">
										<img src="img\brands\logo.svg" alt="Twelfthman" className={"img-fluid"} style={{width:"125px"}} />
									</div>
                    {isLoading && <Loading />}
                    <form onSubmit={handleSubmit(submitHandler)}>
                      <Input
                        id="username"
                        className={`form-control form-control-lg ${
                          errors.username ? "is-invalid" : ""
                        }`}
                        type="text"
                        name="username"
                        placeholder="Enter your username"
                        label="Username"
                        showLabel={true}
                        divStyle="form-group"
                        {...register("username", {
                          required: "Username is required",
                        })}
                        error={errors.username?.message}
                      />

                      <Input
                        id="password"
                        className={`form-control form-control-lg ${
                          errors.password ? "is-invalid" : ""
                        }`}
                        type="password"
                        name="password"
                        placeholder="Enter your password"
                        label="Password"
                        showLabel={true}
                        divStyle="form-group"
                        {...register("password", {
                          required: "Password is required",
                        })}
                        error={errors.password?.message}
                      />

                      <div className="text-center mt-3">
                        <Button
                          type="submit"
                          className="btn btn-lg btn-primary"
                        >
                          {t('signin', {ns: 'glossary'})}
                        </Button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
