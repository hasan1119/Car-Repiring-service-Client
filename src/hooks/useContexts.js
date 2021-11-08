import { useContext } from "react";
import { MyContext } from "../contexts/ContextProvider.js";

const useContexts = () => {
  return useContext(MyContext);
};

export default useContexts;
