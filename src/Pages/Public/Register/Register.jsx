import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { RegisterBg } from "../../../assets/Images";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import { useContext } from "react";
import { TokenContext } from "../../../Components/Context/tokenContext"
export const Register = () => {
  const { setToken } = useContext(TokenContext);
  const navigate = useNavigate();
  return (
    <>
      <div className="login__wrapper  w-full h-screen flex items-center justify-center m-auto">
        <div className="login__left w-1/2 h-full  px-9 flex items-center justify-center bg-[#C9AC8C]">
          <RegisterBg />
        </div>
        <div className="login__content w-1/2 pl-[135px] p-9">
          <h3 className="login__title mb-[10px]">Sign up</h3>
          <strong className="login__subtitle mb-5">
            Already have an account?
            <NavLink className="login__subtitle--link ml-1" to="/">
              Sign in
            </NavLink>
          </strong>
          <Formik
            initialValues={{
              first_name: "",
              last_name: "",
              phone: "",
              email: "",
              password: "",
            }}
            validationSchema={Yup.object({
              first_name: Yup.string()
                .min(2, "too short")
                .max(20, "very long")
                .required("please fill in the field"),
              last_name: Yup.string()
                .min(2, "too short")
                .max(20, "very long")
                .required("please fill in the field"),
              phone: Yup.string()
                .min(2, "too short")
                .max(20, "very long")
                .required("please fill in the field"),
              email: Yup.string()
                .min(2, "too short")
                .max(50, "very long")
                .required("please fill in the field"),
              password: Yup.string()
                .min(2, "too short")
                .max(20, "very long")
                .required("please fill in the field"),
            })}
            onSubmit={(values) => {
              console.log(values);
              axios
                .post("http://localhost:5000/user/register", values)
                .then((res) => {
                  console.log(res);
                  if (res.status === 201) {
                    localStorage.setItem("token", res?.data?.token);
                    setToken(res.data.token);
                    navigate("/");
                  }
                })
                .catch((err) => console.log(err));
            }}
          >
            <Form>
              <label className="">
                <Field
                  className="styledInput"
                  name="first_name"
                  type="text"
                  placeholder="First name"
                  aria-label="First name"
                />
                <span className="errorMessage text-red-600">
                  {<ErrorMessage name="first_name" />}
                </span>
              </label>

              <label className="">
                <Field
                  className="styledInput"
                  name="last_name"
                  type="text"
                  placeholder="last name"
                  aria-label="last name"
                />
                <span className="errorMessage">
                  {<ErrorMessage name="last_name" />}
                </span>
              </label>
              <label>
                <Field
                  className="styledInput"
                  name="phone"
                  type="tel"
                  placeholder="Phone number"
                  aria-label="Phone number"
                />
                <span className="errorMessage">
                  {<ErrorMessage name="phone" />}
                </span>
              </label>
              <label className="">
                <Field
                  className="styledInput"
                  name="email"
                  type="email"
                  placeholder="email"
                  aria-label="email"
                />
                <span className="errorMessage">
                  {<ErrorMessage name="email" />}
                </span>
              </label>
              <label className="">
                <Field
                  className="styledInput"
                  name="password"
                  type="password"
                  placeholder="password"
                  aria-label="password"
                />
                <span className="errorMessage">
                  {<ErrorMessage name="password" />}
                </span>
              </label>
              <button type="submit" className="form__btn--login">
                Next step
              </button>
            </Form>
          </Formik>
        </div>
      </div>
    </>
  );
};
