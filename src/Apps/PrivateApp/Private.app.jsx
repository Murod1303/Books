import { Route, Routes } from "react-router-dom";
import { Books } from "../../Pages/Private/Books/Books";
import { AuthorsAdd } from "../../Pages/Private/AuthorsAdd/AuthorsAdd";
import { BooksAdd } from "../../Pages/Private/BooksAdd/BooksAdd";
import { Authors } from "../../Pages/Private/Authors/Authors";
import { Header } from "../../Components/Header/Header";

export const PrivateApp = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/*" element={<Authors />} />
        <Route path={"/books"} element={<Books />} />
        <Route path={"/addauthor"} element={<AuthorsAdd />} />
        <Route path={"/addbook"} element={<BooksAdd />} />
        <Route path="*" element={"404"} />
      </Routes>
    </>
  );
};
