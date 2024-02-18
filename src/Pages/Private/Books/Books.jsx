import { Outlet } from "react-router-dom";
import { ListNavLink } from "../../../Components/ListNavLink/ListNavLink";
import { SearchList } from "../../../Components/Search/SearchList";
import { useState } from "react";
import { Search } from "../../../Components/Search/Search";
import { Hero } from "../../../Components/Hero/Hero";
export const Books = () => {
  const [search, setSearch] = useState([])

  return (
    <>
      <div className="relative">
        <Hero />
        <Search setSearch={setSearch} name={"book"} />
      </div>
      {<SearchList search={search}  /> }
      <ListNavLink />
      <Outlet />
    </>
  );
};
