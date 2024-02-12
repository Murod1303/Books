/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/rules-of-hooks */
import { createContext, useState } from "react";

export const TokenContext = createContext()

export const NameProvider = ({children})=>{
const [token, setToken] = useState()
  return(
    <TokenContext.Provider value={{token, setToken}}>
      {children}
    </TokenContext.Provider>
  )
}