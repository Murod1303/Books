/* eslint-disable react/prop-types */
import { useContext } from "react";
import { TokenContext } from "../../../Components/Context/tokenContext";
import * as Yup from "yup" 
import { ErrorMessage, Field, Form, Formik } from "formik";
import {  MeProvider } from "../../../Components/Context/Me";

export const ProfileAuthor = () => {
  const { token } = useContext(TokenContext);
  const formData = new FormData();
  const {me, setUpdate} = useContext(MeProvider)
  return (
    <>
      <div className="w-full pt-10 h-full">
        <Formik
          className="profile__inner w-[1000px] mx-auto "
          enableReinitialize={true}
          initialValues={{
            first_name: me.first_name,
            last_name: me.last_name,
            phone: me.phone,
            image: undefined,
          }}
          validationSchema={Yup.object({
            first_name: Yup.string().min(2, "short!").max(50, "maximum 50 characters").required("Required"),
            last_name: Yup.string().min(2, "short!").max(50, "maximum 50 characters").required("Required"),
            phone: Yup.string().min(9, "must be 9 character!").max(9, "maximum 9 characters").required("Required"),
            // image: Yup.mixed().required("Required"),
          })}
          onSubmit={(values) => {
            console.log(values);
            formData.append("first_name", values.first_name);
            formData.append("last_name", values.last_name);
            formData.append("phone", values.phone);
            formData.append("image", values.file);
            console.log(values);
            fetch("http://localhost:5000/user/account", {
              method: "PUT",
              headers: {
                Authorization: token,
              },
              body: formData,
            })
              .then((res) => res.json())
              .then((data) => {console.log(data), setUpdate((e)=>{e+1})})
              .catch((err) => console.log(err));
          }}
        >
          {(formik) => {
            return (
              <Form className="flex items-start justify-start gap-[100px]">
                <label htmlFor="userImg">
                  <img
                    src={`http://localhost:5000/${me.image}`}
                    alt={me.first_name}
                    width={175}
                    height={175}
                    className="rounded-full h-[175px]"
                  />
                </label>
                <Field
                  id="userImg"
                  type="file"
                  hidden
                  name="image"
                  onChange={(event) => {
                    formik.setFieldValue("file", event.currentTarget.files[0]);
                  }}
                />
                <div className="profile__content w-[612px]">
                  <h3 className="text-[#DEDEDE] text-xl font-medium mb-3">
                    My profile
                  </h3>
                  <label className="mb-5 inline-block w-full relative">
                    <span className="label__title text-[#F3F6F9] text-[12px] inline-block mb-1">
                      First Name
                    </span>
                    <Field
                      className="changeInput w-full mb-1 inline-block p-3 rounded-md text-[14px]"
                      type="text"
                      name="first_name"
                    />
                    <span className="absolute left-0 top-[100%] input__error text-[#Ff0000cc] font-medium text-[12px] inline-block ">
                      <ErrorMessage name="first_name"/>
                    </span>
                  </label>
                  <label className="mb-5 inline-block w-full relative">
                    <span className="label__title text-[#F3F6F9] text-[12px] inline-block mb-1">
                      Last Name
                    </span>
                    <Field
                      className="changeInput w-full mb-1 inline-block p-3 rounded-md text-[14px]"
                      type="text"
                      name="last_name"
                    />
                    <span className="absolute left-0 top-[100%] input__error text-[#Ff0000cc] font-medium text-[12px] inline-block ">
                      <ErrorMessage name="last_name"/> 
                    </span>
                  </label>
                  <label className="mb-5 inline-block w-full relative">
                    <span className="label__title text-[#F3F6F9] text-[12px] inline-block mb-1">
                      Phone number
                    </span>
                    <Field
                      className="changeInput w-full mb-1 inline-block p-3 rounded-md text-[14px]"
                      type="tel"
                      name="phone"
                    />
                    <span className="absolute left-0 top-[100%] input__error text-[#Ff0000cc] font-medium text-[12px] inline-block ">
                      <ErrorMessage name="phone"/>
                    </span>
                  </label>
                  <button
                    className="w-[150px] block ml-auto rounded-md p-3 bg-[#F1F6FF] text-[#0d0d0d] font-semibold text-[13px]"
                    type="submit"
                  >
                    Save Changes
                  </button>
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>
    </>
  );
};
