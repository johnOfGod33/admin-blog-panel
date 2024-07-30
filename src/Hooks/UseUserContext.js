import { useContext } from "react";
import { userContext } from "../Context/userContext";

const UseUserContext = () => {
  return useContext(userContext);
};

export default UseUserContext;
