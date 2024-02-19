/* eslint-disable react/prop-types */
import { Field, Form, Formik } from "formik";
import "./search.scss";
import { BiSearchAlt } from "react-icons/bi";
import axios from "axios";
export const Search = ({ setSearch, name }) => {
  return (
    <Formik
      className=""
      initialValues={{
        search: "",
      }}
      onSubmit={(values) => {
        console.log(values);
        axios
          .get(`http://localhost:5000/${name}/search?${name}=${values.search}`)
          .then((res) => res.status === 201 && setSearch(res.data))
          .catch((err) => console.log(err));
      }}
    >
      <div className="search__wrapper absolute bottom-[-100px] bg-black">
        <h4 className="seach__title">Qidirish</h4>
        <Form className="search__inner flex items-center justify-center gap-[14px]">
          <Field
            className="search__input"
            type="text"
            name="search"
            placeholder="Adiblar, kitoblar..."
          />
          <button
            className="search__btn flex items-center justify-center"
            type="submit"
          >
            <BiSearchAlt className="mt-[4px]" />
            <span>Izlash</span>
          </button>
        </Form>
      </div>
    </Formik>
  );
};
