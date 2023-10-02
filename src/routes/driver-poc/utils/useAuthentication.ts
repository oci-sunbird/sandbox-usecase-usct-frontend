import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { RPCContext } from "../rpc";
import { getRole } from "./user";

export const useAuthentication = () => {
  const navigate = useNavigate();
  const rpc = useContext(RPCContext);
  const login = async () => {
    try {
      const role = await rpc.getRoles();
      sessionStorage.setItem("user", JSON.parse(role));
      navigate("/driver-poc");
    } catch (e) {
      window.location.replace(`/api/oauth2/authorization/esignet`);
    }
  };

  const logout = async () => {
    try {
      await fetch(`/api/logout`, { credentials: "include" });
    } finally {
      sessionStorage.removeItem("user");
      navigate("/driver-poc/login");
    }
  };
  const isAuthenticated = () => {
    return !!getRole();
  };
  // async function callback() {
  //   try {
  //     isAuthenticated();
  //     navigate('/driver-poc');
  //   } catch (error) {
  //     window.location.href = '/driver-poc/login';
  //   }
  // }
  // useEffect(() => {
  //   window.addEventListener('authenticationEvent', callback);
  //   return () => {
  //     window.removeEventListener('authenticationEvent', callback);
  //   };
  // }, []);
  return { login, isAuthenticated, logout } as const;
};
