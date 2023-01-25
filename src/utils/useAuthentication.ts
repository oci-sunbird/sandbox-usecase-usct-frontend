import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { authentication } from "./authentication";

export const useAuthentication = () => {
  const navigate = useNavigate();
  async function callback() {
    try {
      await authentication.isLoggedIn();
      navigate("/dashboard");
    } catch (error) {
      window.location.href = "/";
    }
  }
  useEffect(() => {
    window.addEventListener("authenticationEvent", callback);
    return () => {
      window.removeEventListener("authenticationEvent", callback);
    };
  }, []);
};
