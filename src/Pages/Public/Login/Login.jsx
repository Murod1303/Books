import { Field, Form, Formik } from "formik";
import * as Yup from "yup"
import "./login.scss";
import { LoginBG } from "../../../assets/Images";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { useContext } from "react";
import { TokenContext } from "../../../Components/tokenContext/tokenContext";
export const Login = () => {
  const {setToken} = useContext(TokenContext)
  return (
    <>
      <div className="login__wrapper  w-full h-screen flex items-center justify-center m-auto">
        <div className="login__left w-1/2 h-full  px-9 flex items-center justify-center bg-[#C9AC8C]">
          <LoginBG />
        </div>
        <div className="login__content w-1/2 pl-[135px] p-9">
          <h3 className="login__title mb-[10px]">Sign in</h3>
          <strong className="login__subtitle mb-5">
            Do not you have an account?
            <NavLink className="login__subtitle--link ml-1" to="/register">
              Sign up
            </NavLink>
          </strong>
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validationSchema={Yup.object({ 
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
              axios.post("http://localhost:5000/user/login", values).then(res=> {
                console.log(res);
                if(res.status === 201){
                 localStorage.setItem("token", res?.data?.token)
                 setToken(res.data.token) 
                }
              }).catch(err=> console.log(err))
            }}
          >
            <Form>
              <Field
                className="styledInput"
                name="email"
                type="email"
                placeholder="email"
                aria-label="email"
              />
              <Field
                className="styledInput"
                name="password"
                type="password"
                placeholder="password"
                aria-label="password"
              />
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
