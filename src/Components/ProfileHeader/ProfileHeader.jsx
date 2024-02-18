import { NavLink } from "react-router-dom";

export const ProfileHeader = () => {
  return (
    <>
      <div className="profile__header-wrapper max-w-[1200px] w-full mx-auto text-center">
        <nav>
          <ul className="flex items-center justify-between">
            <li>
              <NavLink
                className={
                  "text-[#fff8] font-semibold p-6 inline-block w-[400px]"
                }
                to={"myprofile"}
                style={({ isActive }) => {
                  return isActive
                    ? {
                        color: "#000",
                        backgroundColor: "#fff",
                        borderRadius: "4px 4px 0px 0px",
                      }
                    : {};
                }}
              >
                Profile
              </NavLink>
            </li>
            <li>
              <NavLink
                className={
                  "text-[#fff8] font-semibold p-6 inline-block w-[400px]"
                }
                to={"security"}
                style={({ isActive }) => {
                  return isActive
                    ? {
                        color: "#000",
                        backgroundColor: "#fff",
                        borderRadius: "4px 4px 0px 0px",
                      }
                    : {};
                }}
              >
                Security
              </NavLink>
            </li>
            <li>
              <NavLink
                className={
                  "text-[#fff8] font-semibold p-6 inline-block w-[400px]"
                }
                to={"settings"}
                style={({ isActive }) => {
                  return isActive
                    ? {
                        color: "#000",
                        backgroundColor: "#fff",
                        borderRadius: "4px 4px 0px 0px",
                      }
                    : {};
                }}
              >
                Settings
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};
