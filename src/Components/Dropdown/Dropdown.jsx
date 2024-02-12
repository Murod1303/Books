import { useState } from "react";
import "./dropdown.scss";
import { IoIosArrowDown } from "react-icons/io";
export const Dropdown = () => {
  const [open, setOpen] = useState(false);
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
          <a className="dropdown__item" href="#">
            Profile
          </a>
        </li>
        <li className="w-full">
          <a className="dropdown__item" href="#">
            Add author
          </a>
        </li>
        <li className="w-full">
          <a className="dropdown__item" href="#">
            Add book
          </a>
        </li>
        <li className="w-full">
          <button className="dropdown__item" type="button">
            Log out
          </button>
        </li>
      </ul>
    </div>
  );
};
