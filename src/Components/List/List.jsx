import "./list.scss";
export const List = () => {
  return (
    <section className="max-w-[1356px] w-full m-auto">
      <div className="list__wrapper mt-[150px] pb-8">
        <h4 className="list__title">Asosiy kategoriyalar</h4>
        <ul className="flex items-center justify-center gap-[34px] mb-8">
          <li className="list__item">
            <a className="list__link" href="#">
              Temuriylar davri
            </a>
          </li>
          <li className="list__item">
            <a className="list__link" href="#">
              Temuriylar davri
            </a>
          </li>
          <li className="list__item">
            <a className="list__link" href="#">
              Temuriylar davri
            </a>
          </li>
          <li className="list__item">
            <a className="list__link" href="#">
              Temuriylar davri
            </a>
          </li>
        </ul>
        <ul className="card flex items-center justify-center flex-wrap gap-5">
          <li className="card__item w-[295px] overflow-hidden">
            <img src="" alt="" className="w-full h-[224px]" />
            <div className="card__inner px-4 pt-3 pb-[63px]">
              <h4 className="card__name mb-2">Abdulla Avloniy</h4>
              <span className="card__year">1878-1934</span>
            </div>
          </li>
          <li className="card__item w-[295px] overflow-hidden">
            <img src="" alt="" className="w-full h-[224px]" />
            <div className="card__inner px-4 pt-3 pb-[63px]">
              <h4 className="card__name mb-2">Abdulla Avloniy</h4>
              <span className="card__year">1878-1934</span>
            </div>
          </li>
          <li className="card__item w-[295px] overflow-hidden">
            <img src="" alt="" className="w-full h-[224px]" />
            <div className="card__inner px-4 pt-3 pb-[63px]">
              <h4 className="card__name mb-2">Abdulla Avloniy</h4>
              <span className="card__year">1878-1934</span>
            </div>
          </li>
          <li className="card__item w-[295px] overflow-hidden">
            <img src="" alt="" className="w-full h-[224px]" />
            <div className="card__inner px-4 pt-3 pb-[63px]">
              <h4 className="card__name mb-2">Abdulla Avloniy</h4>
              <span className="card__year">1878-1934</span>
            </div>
          </li>
          <li className="card__item w-[295px] overflow-hidden">
            <img src="" alt="" className="w-full h-[224px]" />
            <div className="card__inner px-4 pt-3 pb-[63px]">
              <h4 className="card__name mb-2">Abdulla Avloniy</h4>
              <span className="card__year">1878-1934</span>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
