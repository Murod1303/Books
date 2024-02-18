import { Outlet } from "react-router-dom";
import { ProfileHeader } from "../../../Components/ProfileHeader/ProfileHeader";

export const ProfileHome = () => {
  return (
    <>
      <div className="profile__wrapper max-w-[1200px] mx-auto ">
        <ProfileHeader />
        <Outlet />
      </div>
    </>
  );
};
