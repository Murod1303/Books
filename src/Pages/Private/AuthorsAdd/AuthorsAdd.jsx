import { TokenContext } from "../../../Components/Context/tokenContext";
import { HiOutlinePlusSm } from "react-icons/hi";
import { useContext, useEffect, useState } from "react";
import { useFormik } from "formik";
import "./authoradd.scss";
import axios from "axios";
// import * as Yup from "yup";
export const AuthorsAdd = () => {
  const { token } = useContext(TokenContext);
  const [genre, setGenre] = useState([]);
  const forData = new FormData();

  useEffect(() => {
    axios
      .get("http://localhost:5000/genre")
      .then((res) => {
        if (res.status === 201) {
          setGenre(res.data);
        }
      })
      .catch((err) => console.log(err));
  }, []);
  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      date_of_birth: "",
      date_of_death: "",
      country: "",
      genre_id: "",
      bio: "",
      image: null,
    },
    onSubmit: (values, actions) => {
      console.log(values);
      forData.append("first_name", values.first_name);
      forData.append("last_name", values.last_name);
      forData.append("date_of_birth", values.date_of_birth);
      forData.append("date_of_death", values.date_of_death);
      forData.append("country", values.country);
      forData.append("genre_id", values.genre_id);
      forData.append("bio", values.bio);
      forData.append("image", values.file);

      fetch("http://localhost:5000/author", {
        headers: {
          authorization: token,
        },
        method: "POST",
        body: forData,
      })
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch((err) => console.log(err));
      actions.resetForm({
        values: {
          first_name: "",
          last_name: "",
          date_of_birth: "",
          date_of_death: "",
          country: "",
          genre_id: "",
          bio: "",
          image: null,
        },
      });
    },
  });
  return (
    <div className="AddAuthor__wrapper ">
      <div className="container px-5 m-auto w-[1356px]">
        <form
          onSubmit={formik.handleSubmit}
          onReset={formik.handleReset}
          className="form__addAuthor flex items-center justify-center  py-6"
        >
          <div className="w-1/2 flex items-center justify-center">
            <label className="fileInput" htmlFor="fileOwnImage">
              <span className="fileLabel__inner w-[170px] text-center flex items-center justify-center flex-col">
                <HiOutlinePlusSm className="w-16 h-16  stroke-white opacity-30" />
                <span className="fileInput__text text-[#fff] opacity-30">
                  Click or drag file to this area to upload
                </span>
              </span>
            </label>
          </div>

          <input
            className="hidden"
            id="fileOwnImage"
            accept=".jpg, .png, .jpeg"
            name="file"
            type="file"
            onChange={(event) => {
              formik.setFieldValue("file", event.currentTarget.files[0]);
            }}
          />
          <div className="form__inner w-1/2">
            <h4 className="addInput__title">Add author</h4>
            <div className="list flex gap-4 flex-col mb-11">
              <label className="addlable">
                <input
                  className="addinput"
                  type="text"
                  placeholder="First Name"
                  name="first_name"
                  onChange={formik.handleChange}
                  value={formik.values.first_name}
                />
              </label>
              <label className="addlable">
                <input
                  className="addinput"
                  type="text"
                  placeholder="Last Name"
                  name="last_name"
                  onChange={formik.handleChange}
                  value={formik.values.last_name}
                />
              </label>
              <label className="addlable">
                <input
                  className="addinput"
                  type="number"
                  placeholder="Date of birth"
                  name="date_of_birth"
                  onChange={formik.handleChange}
                  value={formik.values.date_of_birth}
                />
              </label>
              <label className="addlable">
                <input
                  className="addinput"
                  type="number"
                  placeholder="Date of death"
                  name="date_of_death"
                  onChange={formik.handleChange}
                  value={formik.values.date_of_death}
                />
              </label>
              <label className="addlable">
                <input
                  className="addinput"
                  type="text"
                  placeholder="Country"
                  name="country"
                  onChange={formik.handleChange}
                  value={formik.values.country}
                />
              </label>
              <label className="addlable">
                <select
                  name="genre_id"
                  className="addinput"
                  onChange={formik.handleChange}
                  value={formik.values.genre_id}
                >
                  <option defaultValue="" hidden>
                    Genre
                  </option>
                  {genre.map((item) => {
                    return (
                      <option key={item.id} value={item.id}>
                        {item.name}
                      </option>
                    );
                  })}
                </select>
              </label>
              <label className="addlable">
                <textarea
                  className="addinput resize-none h-20"
                  type="text"
                  placeholder="Bio"
                  name="bio"
                  onChange={formik.handleChange}
                  value={formik.values.bio}
                />
              </label>
            </div>
            <button className="addBtn" type="submit">
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
