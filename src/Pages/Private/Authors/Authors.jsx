import { Outlet } from "react-router-dom";
import { ListNavLink } from "../../../Components/ListNavLink/ListNavLink";
import { useState } from "react";
import { SearchList } from "../../../Components/Search/SearchList";
import { Search } from "../../../Components/Search/Search";
import {Hero} from "../../../Components/Hero/Hero"

export const Authors = () => {
  const [search, setSearch] = useState([])
  console.log(search);
  return (
    <>
      <div className="relative">
        <Hero />
        <Search setSearch={setSearch} name={"author"} />
      </div>
      {<SearchList search={search}  /> }
      <ListNavLink />
      <Outlet />
    </>
  );
};
