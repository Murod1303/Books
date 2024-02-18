import { Route, Routes } from "react-router-dom";
import { Books } from "../../Pages/Private/Books/Books";
import { AuthorsAdd } from "../../Pages/Private/AuthorsAdd/AuthorsAdd";
import { SingleAuthor } from "../../Pages/Private/SingleAuthor/SingleAuthor";
import { BooksAdd } from "../../Pages/Private/BooksAdd/BooksAdd";
import { Authors } from "../../Pages/Private/Authors/Authors";
import { Header } from "../../Components/Header/Header";
import { ListAuthors } from "../../Components/List/ListAuthors";
import { ListBooks } from "../../Components/List/ListBooks";
import { SingleBook } from "../../Pages/Private/SingleBook/SingleBook";
import { ProfileAuthor } from "../../Pages/Private/ProfileAuthor/ProfileAuthor";
import { SecurityAuthor } from "../../Pages/Private/SecurityAuthor/SecurityAuthor";
import { SettingsAuthor } from "../../Pages/Private/SettingsAuthors/SettingsAuthor";
import { ProfileHome } from "../../Pages/Private/ProfileAuthor/ProfileHome";

export const PrivateApp = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Authors />}>
          <Route index element={<ListAuthors id="1" />} />
          <Route path="temuriylar" element={<ListAuthors id="1" />} />
          <Route path="jadid" element={<ListAuthors id="2" />} />
          <Route path="sovet" element={<ListAuthors id="3" />} />
          <Route path="mustaqil" element={<ListAuthors id="4" />} />
        </Route>
        <Route path={"/books"} element={<Books />}>
          <Route index element={<ListBooks id="1" />} />
          <Route path="temuriylar" element={<ListBooks id="1" />} />
          <Route path="jadid" element={<ListBooks id="2" />} />
          <Route path="sovet" element={<ListBooks id="3" />} />
          <Route path="mustaqil" element={<ListBooks id="4" />} />
        </Route>
        <Route path="/author/:id" element={<SingleAuthor />} />
        <Route path="/book/:id" element={<SingleBook />} />
        <Route path={"/addauthor"} element={<AuthorsAdd />} />
        <Route path={"/addbook"} element={<BooksAdd />} />
        <Route path="/profile" element={<ProfileHome />}>
          <Route index element={<ProfileAuthor />} />
          <Route path="myprofile" element={<ProfileAuthor />} />
          <Route path="security" element={<SecurityAuthor />} />
          <Route path="settings" element={<SettingsAuthor />} />
        </Route>
        <Route path="*" element={"404"} />
      </Routes>
    </>
  );
};
