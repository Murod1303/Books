/* eslint-disable react/prop-types */

export const SearchList = ({ search }) => {
  return (
    <>
      <ul className="card flex items-center justify-center flex-wrap gap-5 mt-[120px]">
        {search.map((item) => (
          <li key={item.id} className="card__item w-[295px] overflow-hidden">
            <img
              src={`http://localhost:5000/${item.image}`}
              alt=""
              className="w-full h-[224px]"
            />
            <div className="card__inner px-4 pt-3 pb-[63px]">
              <h4 className="card__name mb-2">
                {item.first_name + "-" + item.last_name}
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
