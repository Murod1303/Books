import { NavLink } from "react-router-dom";
import "./list.scss";
export const ListNavLink = () => {
  return (
    <section className="max-w-[1356px] w-full m-auto">
      <div className="list__wrapper mt-[150px] pb-8">
        <h4 className="list__title">Asosiy kategoriyalar</h4>
        <ul className="flex items-center justify-center gap-[34px] mb-8">
          <li className="list__item">
            <NavLink className="list__link" to="/">
              Temuriylar davri
            </NavLink>
          </li>
          <li className="list__item">
            <NavLink className="list__link" to="/jadid">
              Jadid adabiyoti
            </NavLink>
          </li>
          <li className="list__item">
            <NavLink className="list__link" to="/sovet">
              Sovet davri
            </NavLink>
          </li>
          <li className="list__item">
            <NavLink className="list__link" to="/mustaqil">
              Mustaqillik davri
            </NavLink>
          </li>
        </ul>
      </div>
    </section>
  );
};
