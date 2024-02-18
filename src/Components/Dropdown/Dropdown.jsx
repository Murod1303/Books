/* eslint-disable react/prop-types */
import { useContext } from "react";
import "./dropdown.scss";
import { IoIosArrowDown } from "react-icons/io";
import { NavLink, useNavigate } from "react-router-dom";
import { TokenContext } from "../Context/tokenContext";
import { MeProvider } from "../Context/Me";

export const Dropdown = ({ setOpen, open }) => {
  const {me} =useContext(MeProvider)
  const navigate = useNavigate();

  const { setToken } = useContext(TokenContext);
  const hanleRemoveLocalStorage = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  };
  const handleOpen = () => {
    setOpen(!open);
  };
  const hadleClose = () => {
    setOpen(false);
  };
  return (
    <div className="flex items-center justify-center flex-col relative z-10">
      <button
        onClick={() => handleOpen()}
        className=" flex items-center justify-center gap-3 relative z-[30]"
        type="button"
      >
        <img className="dropdown__image relative z-[2]" src={`http://localhost:5000/${me.image}`} alt="" />
        <IoIosArrowDown className="fill-[#fff]"/>
      </button>

      <ul
        className={
          open
            ? "dropdown__list absolute open-dropdown"
            : "dropdown__list absolute "
        }
      >
        <li className="w-full">
          <NavLink
            className="dropdown__item"
            to="/profile"
            onClick={hadleClose}
          >
            Profile
          </NavLink>
        </li>
        <li className="w-full">
          <NavLink
            className="dropdown__item"
            to="/addauthor"
            onClick={hadleClose}
          >
            Add author
          </NavLink>
        </li>
        <li className="w-full">
          <NavLink
            className="dropdown__item"
            to="/addbook"
            onClick={hadleClose}
          >
            Add book
          </NavLink>
        </li>
        <li className="w-full">
          <button
            onClick={() => hanleRemoveLocalStorage()}
            className="dropdown__item"
            type="button"
          >
            Log out
          </button>
        </li>
      </ul>
    </div>
  );
};
