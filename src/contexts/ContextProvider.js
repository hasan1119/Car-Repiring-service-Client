import { createContext } from "react";
import useFirebase from "../hooks/useFirebase.js";

export const MyContext = createContext();

const ContextProvider = ({ children }) => {
  const authInfo = useFirebase();

  const data = {
    authInfo,
  };

  return <MyContext.Provider value={data}>{children}</MyContext.Provider>;
};

export default ContextProvider;
