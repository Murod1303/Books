import { Outlet } from "react-router-dom";
import { ListNavLink } from "../../../Components/ListNavLink/ListNavLink";
import { TopHeader } from "../../../Components/TopHeader/TopHeader";

export const Authors = () => {
  return (
    <>
      <TopHeader />
      <ListNavLink />
      <Outlet />
    </>
  );
};
