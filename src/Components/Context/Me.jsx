/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";
import { TokenContext } from "./tokenContext";
import axios from "axios";

// me func 
export const MeProvider = createContext();
export const MeContext = ({ children }) => {
  const {token} = useContext(TokenContext)
  const [me, setMe] = useState([]);
  const [update, setUpdate] = useState(1);
  useEffect(() => {
    axios
      .get("http://localhost:5000/user/me", {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        res.status === 201 && setMe(res.data);
      });
  }, [token, update]);

  return (
    <MeProvider.Provider value={{ me, setMe, update, setUpdate }}>
      {children}
    </MeProvider.Provider>
  );
};