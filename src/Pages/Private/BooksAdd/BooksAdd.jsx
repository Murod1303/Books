import { useFormik } from "formik";
import "./bookadd.scss";
import { HiOutlinePlusSm } from "react-icons/hi";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { TokenContext } from "../../../Components/tokenContext/tokenContext";

export const BooksAdd = () => {
  const { token } = useContext(TokenContext);
  const formData = new FormData();
  useEffect(() => {
    axios
      .get("http://localhost:5000/genre")
      .then((res) => {
        if (res.status === 201) {
          console.log(res.data);
          setGenre(res.data);
        }
      })
      .catch((err) => console.log(err));
  }, []);
  const [genre, setGenre] = useState([]);
  const [author, setAuthor] = useState([]);
  const [authorID, setAuthorID] = useState(1);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/author/genreId/${authorID}`)
      .then((res) => {
        if (res.status === 201) {
          console.log(res.data);
          setAuthor(res.data);
        }
      })
      .catch((err) => console.log(err));
  }, [authorID]);

  const formik = useFormik({
    initialValues: {
      title: "",
      page: "",
      year: "",
      price: "",
      genre_id: "",
      author_id: "",
      description: "",
      image: null,
    },
    onSubmit: (values, actions) => {
      console.log(values);
      formData.append("title", values.title);
      formData.append("page", values.page);
      formData.append("year", values.year);
      formData.append("price", values.price);
      formData.append("genre_id", values.genre_id);
      formData.append("author_id", values.author_id);
      formData.append("description", values.description);
      formData.append("image", values.imageBook);
      fetch("http://localhost:5000/book", {
        headers: {
          authorization: token,
        },
        method: "POST",
        body: formData,
      })
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch((err) => console.log(err));
        actions.resetForm({
          values:{
            title: "",
            page: "",
            year: "",
            price: "",
            genre_id: "",
            author_id: "",
            description: "",
            image: null,
          }
        })
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
            <label className="fileInput " htmlFor="fileOwnImage">
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
            name="imageBook"
            type="file"
            id="fileOwnImage"
            accept=".jpg, .png, .jpeg"
            onChange={(event) => {
              formik.setFieldValue("imageBook", event.currentTarget.files[0]);
            }}
          />
          <div className="form__inner w-1/2">
            <h4 className="addInput__title">Add book</h4>
            <div className="list flex gap-4 flex-col mb-11">
              <label className="addlable">
                <input
                  className="addinput"
                  type="text"
                  placeholder="Title"
                  name="title"
                  onChange={formik.handleChange}
                  value={formik.values.title}
                />
              </label>
              <label className="addlable">
                <input
                  className="addinput"
                  type="text"
                  placeholder="Pages"
                  name="page"
                  onChange={formik.handleChange}
                  value={formik.values.page}
                />
              </label>
              <label className="addlable">
                <input
                  className="addinput"
                  type="datetime"
                  placeholder="Year"
                  name="year"
                  onChange={formik.handleChange}
                  value={formik.values.year}
                />
              </label>
              <label className="addlable">
                <input
                  className="addinput"
                  type="datetime"
                  placeholder="Price"
                  name="price"
                  onChange={formik.handleChange}
                  value={formik.values.price}
                />
              </label>
              <label className="addlable">
                <select
                  name="genre_id"
                  className="addinput"
                  onChange={(e) => {
                    formik.setFieldValue("genre_id", e.target.value);
                    setAuthorID(e.target.value);
                  }}
                  value={formik.values.genre_id}
                >
                  <option hidden>Genre</option>
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
                <select
                  name="author_id"
                  className="addinput"
                  onChange={formik.handleChange}
                  value={formik.values.author_id}
                >
                  <option hidden>Author</option>
                  {author.map((item) => {
                    return (
                      <option key={item.id} value={item.id}>
                        {item.first_name + " " + item.last_name}
                      </option>
                    );
                  })}
                </select>
              </label>
              <label className="addlable">
                <textarea
                  className="addinput resize-none h-20"
                  type="text"
                  placeholder="description"
                  name="description"
                  onChange={formik.handleChange}
                  value={formik.values.description}
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
