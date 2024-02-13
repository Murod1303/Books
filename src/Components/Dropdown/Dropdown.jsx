import { useContext, useState } from "react";
import "./dropdown.scss";
import { IoIosArrowDown } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { TokenContext } from "../tokenContext/tokenContext";
export const Dropdown = () => {
  const [open, setOpen] = useState(false);
  const {setToken} = useContext(TokenContext)
  const hanleRemoveLocalStorage = () => {
    localStorage.removeItem("token")
    setToken("")
  }
  const handleOpen = () => {
    setOpen(!open);
    console.log("open");
  };
  return (
    <div className="flex items-center justify-center flex-col relative">
      <button
        onClick={() => handleOpen()}
        className=" flex items-center justify-center gap-3 relative z-[30]"
        type="button"
      >
        <img className="dropdown__image relative z-[2]" src="" alt="" />
        <IoIosArrowDown />
      </button>

      <ul
        className={
          open
            ? "dropdown__list absolute open-dropdown"
            : "dropdown__list absolute "
        }
      >
        <li className="w-full">
          <NavLink className="dropdown__item" to="/">
            Profile
          </NavLink>
        </li>
        <li className="w-full">
          <NavLink className="dropdown__item" to="/addauthor">
            Add author
          </NavLink>
        </li>
        <li className="w-full">
          <NavLink className="dropdown__item" to="/addbook">
            Add book
          </NavLink>
        </li>
        <li className="w-full">
          <button onClick={()=> hanleRemoveLocalStorage()} className="dropdown__item" type="button">
            Log out
          </button>
        </li>
      </ul>
    </div>
  );
};
