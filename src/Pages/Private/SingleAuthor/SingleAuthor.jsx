import { useContext, useEffect, useState } from "react";
import { TokenContext } from "../../../Components/Context/tokenContext";
import { useParams } from "react-router-dom";

export const SingleAuthor = () => {
  const token = useContext(TokenContext);
  const [books, setBooks] = useState([]);
  const [authorName, setAuthorName] = useState("");
  const [authorData, setAuthorData] = useState("");
  const param = useParams();
  useEffect(() => {
    fetch(`http://localhost:5000/author/books/${param.id}`, {
      headers: {
        authorization: token.token,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setBooks(data);
      })
      .catch((err) => console.log(err));
    fetch(`http://localhost:5000/author/authorId/${param.id}`, {
      headers: {
        authorization: token.token,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setAuthorName(`${data.first_name} ${data.last_name}`),
          setAuthorData(data);
      })
      .catch((err) => console.log(err));
  }, [param.id]);
  return (
    <div className="container">
      <div className="single__wrappper pb-[60px]">
        <div className="single__inner flex items-start justify-center gap-16 mb-[100px] ">
          <img
            src={`http://localhost:5000/${authorData.image}`}
            alt=""
            className="w-[500px] h-[580px] inline-block rounded-3xl"
          />
          <div className="single__content pt-11">
            <h3 className="text-[#c9ac8c] text-5xl mb-2">{authorName}</h3>
            <p className="w-[671px] mb-11 text-[#fff] text-opacity-80">
              Oʻtkir Hoshimov 1941 yil Toshkent viloyatining Zangiota (hozirgi
              Chilonzor) tumanidagi Doʻmbiravot mavzeida tugʻildi. Oʻ. Hoshimov
              mehnat faoliyatini erta boshladi. Toshkent Davlat universiteti
              (hozirgi Oʻzbekiston Milliy universiteti)ning jurnalistika
              kulliyotida oʻqish bilan baravar gazeta tahririyatida ishladi.
              1959 yildan 1963 yilgacha “Temiryoʻlchi”, “Qizil Oʻzbekiston”,
              “Transportniy rabochiy” gazetalarida xat tashuvchi, mussaxhih,
              tarjimon boʻlib ishladi. Soʻng “Toshkent haqiqati” gazetasida
              adabiy xodim (1963–1966), “Toshkent oqshomi” gazetasida boʻlim
              mudiri (1966–1982), Gʻ. Gʻulom nomidagi Adabiyot va sanʼat
              nashriyotida bosh muharrir oʻrinbosari (1982–1985) boʻldi.
              1985–1995 yillarda “Sharq yulduzi” jurnaliga bosh muharrirlik
              qildi. 1995 yildan 2005 yilgacha Oʻzbekiston Respublikasi Oliy
              Majlisining Matbuot va axborot qoʻmitasi raisi lavozimida ishladi.
              2005 yildan “Teatr“ jurnalida bosh muharrir boʻlib ishladi.
              {authorData.bio}
            </p>
            <div className="year__wrapper flex items-center gap-4">
              <div className="birth__yeaer flex flex-col items-start">
                <span className="text-xs text-[#fffc] tracking-wide">
                  Tavallud sanasi
                </span>
                <strong className="text-4xl leading-[56px] text-[#c9ac8c]">
                  {authorData.date_of_birth}
                </strong>
                <span className="text-xs text-[#fffc] tracking-wide">
                  {authorData.country}
                </span>
              </div>
              <span className="inline-block w-6 h-1 bg-[#C9AC8C]"></span>
              <div className="death__year flex flex-col items-start">
                <span className="text-xs text-[#fffc] tracking-wide">
                  Vafot etgan sana
                </span>
                <strong className="text-4xl leading-[56px] text-[#c9ac8c]">
                  {authorData.date_of_death}
                </strong>
                <span className="text-xs text-[#fffc] tracking-wide">
                  {authorData.country}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="caruselBook__wrapper max-w-[1356px] w-full mx-auto">
          <strong className="text-3xl text-[#c9ac8c] mb-8 inline-block">
            Asarlari
          </strong>
          <div className="caruselBook__wrapper">
            <ul className="caruselBook_list flex items-center gap-3 overflow-x-scroll">
              {books.length &&
                books.map((item) => (
                  <li
                    key={item.id}
                    className="card__item w-[220px] overflow-hidden"
                  >
                    <img
                      src={`http://localhost:5000/${item.image}`}
                      alt=""
                      className="w-full h-[255px]"
                    />
                    <div className="card__inner px-4 pt-3 pb-[13px]">
                      <h4 className="card__name text-sm mb-2">{item.title}</h4>
                      <span className="card__year text-sm">{authorName}</span>
                    </div>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
