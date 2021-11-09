import { useContext } from "react";
//import context
import { AuthContext } from "../Context/AuthProvider";
//Declare Hooks
const useAuth = () => {
  return useContext(AuthContext);
};

export default useAuth;
