import { useContext, useEffect, useState } from "react";
import { TokenContext } from "../../../Components/Context/tokenContext";
import { useParams } from "react-router-dom";
import { IoIosArrowRoundDown } from "react-icons/io";

export const SingleBook = () => {
  const token = useContext(TokenContext);
  const [books, setBooks] = useState([]);
  const [bookData, setBookData] = useState("");
  const param = useParams();
  useEffect(() => {
    async function bookData() {
      try {
        const res = await fetch(
          `http://localhost:5000/book/bookId/${param.id}`,
          {
            headers: {
              authorization: token.token,
            },
          },
        );
        const data = await res.json();
        setBookData(data);
        getGenre(data.genre_id);
      } catch (error) {
        console.log(error);
      }
    }
    bookData();

    async function getGenre(id) {
      try {
        const res = await fetch(`http://localhost:5000/book/genreId/${id}`, {
          headers: {
            authorization: token.token,
          },
        });
        const data = await res.json();
        setBooks(data);
      } catch (error) {
        console.log(error);
      }
    }
  }, [param.id]);
  return (
    <div className="container">
      <div className="single__wrappper pb-[60px]">
        <div className="single__inner flex items-start justify-center gap-16 mb-[100px] ">
          <img
            src={`http://localhost:5000/${bookData.image}`}
            alt=""
            className="w-[500px] h-[580px] inline-block rounded-3xl"
          />
          <div className="single__content pt-11">
            <h3 className="text-[#c9ac8c] text-5xl mb-2">{bookData.title}</h3>
            <ul className="mb-5">
              <li className="flex items-center justify-between p-1">
                <span className="text-[20px] text-[#fff9]">
                  Sahifalar soni:
                </span>
                <span className="text-[20px] text-[#fffc]">{`${bookData.page} pages`}</span>
              </li>
              <li className="flex items-center justify-between p-1">
                <span className="text-[20px] text-[#fff9]">Chop etilgan:</span>
                <span className="text-[20px] text-[#fffc]">{`${bookData.year} years`}</span>
              </li>
              <li className="flex items-center justify-between p-1">
                <span className="text-[20px] text-[#fff9]">Kitob narxi:</span>
                <span className="text-[20px] text-[#fffc]">{`$${bookData.price}`}</span>
              </li>
            </ul>
            <div className="flex items-center justify-start gap-4 mb-3">
              <h4 className="text-[#C9AC8C]">To’liq ma’lumot</h4>
              <IoIosArrowRoundDown className="fill-[#C9AC8C] w-5 h-5" />
              <span className="inline-block grow bg-[#C9AC8C] h-[2px] rounded"></span>
            </div>
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
              {bookData.description}
            </p>
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
                      <span className="card__year text-sm">{item.year}</span>
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
