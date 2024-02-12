// @ts-nocheck
import { Route, Routes } from "react-router-dom";
import { Login } from "../../Pages/Public/Login/Login";
import { Register } from "../../Pages/Public/Register/Register";

export const PublicApp = () => {
  return (
    <Routes>
      <Route index element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};
