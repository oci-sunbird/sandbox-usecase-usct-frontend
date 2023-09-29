import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { RPCContext } from "../rpc";
import { getToken } from "./token";

export const useAuthentication = () => {
  const navigate = useNavigate();
  const rpc = useContext(RPCContext);
  const login = async (username: string, password: string) => {
    try {
      const token = await rpc.login(username, password);
      sessionStorage.setItem("driver-token", token);
      navigate("/driver-poc");
    } catch (e) {
      window.location.replace("/api/oauth2/authorization/esignet")
    }
  };
  const logout = async () => {
    try {
      await fetch("/api/logout");
    } finally {
      sessionStorage.removeItem("driver-token");
      navigate("/driver-poc/login");
    }
  };
  const isAuthenticated = () => {
    return !!getToken();
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
