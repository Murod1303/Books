import { Route, Routes } from "react-router-dom";
import { TopHeader } from "../../Components/TopHeader/TopHeader";
import { List } from "../../Components/List/List";
import { Books } from "../../Pages/Private/Books/Books";

export const PrivateApp = () => {
  return (
    <>
      <TopHeader />
      <Routes>
        <Route index element={<List />} />
        <Route path={"books"} element={<Books />} />
      </Routes>
    </>
  );
};
