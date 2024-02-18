import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
export const ListAuthors = ({ id }) => {
  const [author, setAuthor] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`http://localhost:5000/author/genreId/${id}`)
      .then((res) => res.status === 201 && setAuthor(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <>
      <ul className="card flex items-center justify-center flex-wrap gap-5">
        {author.map((item) => (
          <li
            key={item.id}
            onClick={() => navigate(`/author/${item.id}`)}
            data-id={item.id}
            className="card__item w-[295px] overflow-hidden"
          >
            <img
              src={`http://localhost:5000/${item.image}`}
              alt=""
              className="w-full h-[224px]"
            />
            <div className="card__inner px-4 pt-3 pb-[63px]">
              <h4 className="card__name mb-2">
                {item.first_name + " " + item.last_name}
              </h4>
              <span className="card__year">
                {item.date_of_birth + "-" + item.date_of_death}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};
