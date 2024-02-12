import "./search.scss";
import { BiSearchAlt } from "react-icons/bi";
export const Search = () => {
  return (
    <>
      <div className="search__wrapper absolute bottom-[-100px] bg-black">
        <h4 className="seach__title">Qidirish</h4>
        <form className="search__inner flex items-center justify-start gap-[14px]">
          <input
            className="search__input"
            type="text"
            name="search"
            placeholder="Adiblar, kitoblar, audiolar, maqolalar..."
          />
          <button className="search__btn flex items-center justify-center">
            <BiSearchAlt className="mt-[4px]" />
            <span>Izlash</span>
          </button>
        </form>
      </div>
    </>
  );
};
