import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
export const ListBooks = ({ id }) => {
  const navigate = useNavigate();
  const [books, setBooks] = useState([]);
  // const [bookAuthor, setBookAuthor] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/book/genreId/${id}`)
      .then((res) => res.status === 201 && setBooks(res.data))
      .catch((err) => console.log(err));
  }, [id]);
  return (
    <>
      <ul className="card flex items-center justify-center flex-wrap gap-5">
        {books.map((item) => (
          <li
            onClick={() => navigate(`/book/${item.id}`)}
            key={item.id}
            className="card__item w-[320px] overflow-hidden"
          >
            <img
              src={`http://localhost:5000/${item.image}`}
              alt=""
              className="w-full h-[275px]"
            />
            <div className="card__inner px-4 pt-3 pb-[13px]">
              <h4 className="card__name mb-2">{item.title}</h4>
              <span className="card__year">1878-1934</span>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};
