import { NavLink } from "react-router-dom";
import "./list.scss";
export const ListNavLink = () => {
  return (
    <section className="max-w-[1356px] w-full m-auto">
      <div className="list__wrapper mt-[20px] pb-8">
        <h4 className="list__title">Asosiy kategoriyalar</h4>
        <ul className="flex items-center justify-center gap-[34px] mb-8">
          <li className="list__item">
            <NavLink
              className="list__link "
              style={({ isActive }) => {
                return isActive ? { color: "#fff" } : {};
              }}
              to="temuriylar"
            >
              Temuriylar davri
            </NavLink>
          </li>
          <li className="list__item">
            <NavLink
              className="list__link"
              to="jadid"
              style={({ isActive }) => {
                return isActive ? { color: "#fff" } : {};
              }}
            >
              Jadid adabiyoti
            </NavLink>
          </li>
          <li className="list__item">
            <NavLink
              className="list__link"
              to="sovet"
              style={({ isActive }) => {
                return isActive ? { color: "#fff" } : {};
              }}
            >
              Sovet davri
            </NavLink>
          </li>
          <li className="list__item">
            <NavLink
              className="list__link"
              to="mustaqil"
              style={({ isActive }) => {
                return isActive ? { color: "#fff" } : {};
              }}
            >
              Mustaqillik davri
            </NavLink>
          </li>
        </ul>
      </div>
    </section>
  );
};
