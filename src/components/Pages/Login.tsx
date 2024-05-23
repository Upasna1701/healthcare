
import { useState } from "react";
import * as Yup from "yup";
import clsx from "clsx";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { useAuth } from "../auth/Auth";
import axios from "axios";
import Header from "../Header";
import LoginFooter from "./LoginFooter";

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Wrong email format")
    .min(3, "Minimum 3 symbols")
    .max(50, "Maximum 50 symbols")
    .required("Email is required"),
  password: Yup.string()
    .min(3, "Minimum 3 symbols")
    .max(50, "Maximum 50 symbols")
    .required("Password is required"),
});

const initialValues = {
  email: "",
  password: "",
};

const clientId =
  "379984849927-0qsvtk5bcid9gp2rf5f1lui4it5drhbt.apps.googleusercontent.com";

export function Login() {
  const [loading, setLoading] = useState(false);
  const [gauthLoading, setGauthLoading] = useState(false);
  const { saveAuth, setCurrentUser } = useAuth();
  const userData = useAuth();

  const formik = useFormik({
    initialValues,
    validationSchema: loginSchema,
    onSubmit: async (values, { setStatus, setSubmitting }) => {
      let payload = {
        email: values.email,
        password: values.password,
      };

      const login = await axios.post(
        `${process.env.REACT_APP_BACKEND_BASEURL}/user/auth/login`,
        payload
      );
      if (login.data.status == "SUCCESS") {
        const user = await axios.get(
          `${process.env.REACT_APP_BACKEND_BASEURL}/user/auth/getUserByToken`,
          {
            headers: {
              ctk: login.headers.ctk,
            },
          }
        );
        if (user.data.status == "SUCCESS") {
          let auth = {
            api_token: login.headers.ctk,
          };
          saveAuth(auth);
          setCurrentUser(user.data.data);
        }
      }
    },
  });
  return (
    <>
      <Header />
      <div className="relative">
        <div className="flex items-center justify-center px-[24px] pt-[100px] pb-[600px] lg:pb-[500px] 2xl:pb-[550px] relative z-20">
          <form className="form w-50" onSubmit={formik.handleSubmit} noValidate id="kt_login_signin_form">
            <div className="row g-3 mb-9">
              <div className="col-md-12 d-flex justify-content-center">
                {gauthLoading && (
                  <div className="spinner-border text-primary" role="status">
                    <span className="sr-only">Loading...</span>
                  </div>
                )}
              </div>

              <div className="col-md-6">
              </div>
            </div>

            <div className="text-center border-b border-[#1C304A85] pb-[25px] mb-[25px]">
              <h2 className="text-h2font lg:text-[39px] text-lightblack font-bold">Sign Up</h2>
              <p className="text-[15px] lg:text-[19px] text-[#4F4F4F]">Lorem Ipsum dorsit lem ulatres denoa tums</p>
            </div>

            {formik.status ? (
              <div className="mb-lg-15 alert alert-danger">
                <div className="alert-text font-weight-bold">{formik.status}</div>
              </div>
            ) : (
              <div>
              </div>
            )}
            <div className="flex flex-col gap-[4px] mb-[10px]">
              <label className="text-pfont text-lightblack font-semibold">Email</label>
              <input placeholder="Example@gmail.com" 
              {...formik.getFieldProps("email")} className={clsx(
                  "form-control bg-transparent border border-[#abbed1] py-[4px] px-[12px] rounded-[5px]",
                  { "is-invalid": formik.touched.email && formik.errors.email },
                  {
                    "is-valid": formik.touched.email && !formik.errors.email,
                  }
                )}
                type="email"
                name="email"
                autoComplete="off"
              />
              {formik.touched.email && formik.errors.email && (
                <div className="fv-plugins-message-container">
                  <div className="fv-help-block">
                    <span role="alert" className="text-[11px] text-[#E02B1D] font-medium mb-0">{formik.errors.email}</span>
                  </div>
                </div>
              )}
            </div>
            <div className="flex flex-col gap-[4px] mb-[10px]">
              <label className="text-pfont text-lightblack font-semibold">
                Password
              </label>
              <input
                type="password"
                autoComplete="off"
                placeholder="Password"
                {...formik.getFieldProps("password")}
                className={clsx(
                  "form-control bg-transparent border border-[#abbed1] py-[4px] px-[12px] rounded-[5px]",
                  {
                    "is-invalid": formik.touched.password && formik.errors.password,
                  },
                  {
                    "is-valid": formik.touched.password && !formik.errors.password,
                  }
                )}
              />
              {formik.touched.password && formik.errors.password && (
                <div className="fv-plugins-message-container">
                  <div className="fv-help-block">
                    <span role="alert" className="text-[11px] text-[#E02B1D] font-medium mb-0">{formik.errors.password}</span>
                  </div>
                </div>
              )}
            </div>
            <div className="d-flex flex-stack flex-wrap gap-3 fs-base fw-semibold mb-8">
              <div />

              <Link to="/auth/forgot-password" className="text-[#277CFB]">
                Forgot Password ?
              </Link>
            </div>

            <div className="d-grid mb-[25px]">
              <button
                type="submit"
                id="kt_sign_in_submit"
                className="bg-pc border border-pc text-white rounded-full w-[100%] text-pfont font-medium py-[8px] cursor-pointer group hover:bg-white"
                disabled={formik.isSubmitting || !formik.isValid}
              >
                {!loading && <span className="indicator-label group-hover:text-pc">Continue</span>}
                {loading && (
                  <span className="indicator-progress" style={{ display: "block" }}>
                    Please wait...
                    <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
                  </span>
                )}
              </button>
            </div>

            <div className="text-[#277CFB] text-center cursor-pointer">
              Not a Member yet?{" "}
              <Link to="/auth/registration" className="link-primary">
                Sign up
              </Link>
            </div>
          </form>
        </div>
        <LoginFooter/>
      </div>
    </>
  );
}
