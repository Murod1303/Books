import { NavLink } from "react-router-dom";
import { Dropdown } from "../Dropdown/Dropdown";
import "./header.scss";
export const Header = () => {
  return (
    <header>
      <div className="header__wrapper max-w-[1356px] m-auto py-8 flex items-center justify-between">
        <h2 className="header__title">Badiiyat</h2>
        <div className="header__links-wrapper flex items-center gap-8">
          <nav className="header__navbar">
            <ul className="haeder__list flex items-center gap-3">
              <li className="header__item">
                <NavLink
                  className="header__link"
                  style={({ isActive }) => {
                    return isActive ? { color: "#fff" } : {};
                  }}
                  to="/"
                >
                  Bosh sahifa
                </NavLink>
              </li>
              <li className="header__item">
                <NavLink
                  className="header__link"
                  style={({ isActive }) => {
                    return isActive ? { color: "#fff" } : {};
                  }}
                  to="/books"
                >
                  Kitoblar
                </NavLink>
              </li>
            </ul>
          </nav>
          <Dropdown />
        </div>
      </div>
    </header>
  );
};
