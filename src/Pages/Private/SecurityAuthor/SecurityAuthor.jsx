import { useContext } from "react";
import { TokenContext } from "../../../Components/Context/tokenContext";
import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { MeProvider } from "../../../Components/Context/Me";

export const SecurityAuthor = () => {
  const { token } = useContext(TokenContext);
  const { me, setUpdate } = useContext(MeProvider);
  const emailRegExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  return (
    <>
      <div className="w-full pt-10 h-full">
        <Formik
          className="profile__inner w-[1000px] mx-auto "
          enableReinitialize={true}
          initialValues={{
            email: me.email,
            currentPassword: "",
            newPassword: "",
          }}
          validationSchema={Yup.object({
            email: Yup.string()
              .min(10, "short")
              .max(100, "")
              .matches(emailRegExp, "email is invalid")
              .required("Required"),
            currentPassword: Yup.string()
              .min(3, "minimal 8 character")
              .max(50, "maximum 50 character")
              .required("Required"),
            newPassword: Yup.string()
              .min(7, "minimal 8 character")
              .max(50, "maximum 50 character")
              .required("Required"),
          })}
          onSubmit={(values, actions) => {
            console.log(values);
            fetch("http://localhost:5000/user/security", {
              method: "PUT",
              headers: {
                Authorization: token,
                "Content-Type": "application/json",
              },
              body: JSON.stringify(values),
            })
              .then((res) => res.json())
              .then((data) => {
                console.log(data),
                  setUpdate((e) => {
                    e + 1;
                  });
              })
              .catch((err) => console.log(err));
            actions.resetForm({
              currentPassword: "",
              newPassword: "",
            });
          }}
        >
          {() => {
            return (
              <Form className="flex items-center justify-center gap-[100px]">
                <div className="profile__content w-[612px]">
                  <h3 className="text-[#DEDEDE] text-xl font-medium mb-3">
                    Change Or Recover Your Password:
                  </h3>
                  <label className="mb-5 inline-block w-full relative">
                    <span className="label__title text-[#F3F6F9] text-[12px] inline-block mb-1">
                      Email
                    </span>
                    <Field
                      className="changeInput w-full mb-1 inline-block p-3 rounded-md text-[14px]"
                      type="email"
                      name="email"
                    />
                    <span className="absolute left-0 top-[100%] input__error text-[#Ff0000cc] font-medium text-[12px] inline-block ">
                      <ErrorMessage name="email" />
                    </span>
                  </label>
                  <label className="mb-5 inline-block w-full relative">
                    <span className="label__title text-[#F3F6F9] text-[12px] inline-block mb-1">
                      Current password
                    </span>
                    <Field
                      className="changeInput w-full mb-1 inline-block p-3 rounded-md text-[14px]"
                      type="text"
                      name="currentPassword"
                      placeholder="*********"
                    />
                    <span className="absolute left-0 top-[100%] input__error text-[#Ff0000cc] font-medium text-[12px] inline-block ">
                      <ErrorMessage name="currentPassword" />
                    </span>
                  </label>
                  <label className="mb-5 inline-block w-full relative">
                    <span className="label__title text-[#F3F6F9] text-[12px] inline-block mb-1">
                      newPassword
                    </span>
                    <Field
                      className="changeInput w-full mb-1 inline-block p-3 rounded-md text-[14px]"
                      type="tel"
                      name="newPassword"
                      placeholder="********"
                    />
                    <span className="absolute left-0 top-[100%] input__error text-[#Ff0000cc] font-medium text-[12px] inline-block ">
                      <ErrorMessage name="newPassword" />
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
