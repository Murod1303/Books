import { Outlet } from "react-router-dom";
import { ListNavLink } from "../../../Components/ListNavLink/ListNavLink";
import { useState } from "react";
import { Search } from "../../../Components/Search/Search";
import { Hero } from "../../../Components/Hero/Hero";
import { SearchListBook } from "../../../Components/Search/SearchListBook";
export const Books = () => {
  const [search, setSearch] = useState([]);

  return (
    <>
      <div className="relative">
        <Hero />
        <Search setSearch={setSearch} name={"book"} />
      </div>
      {<SearchListBook search={search} />}
      <ListNavLink />
      <Outlet />
    </>
  );
};
