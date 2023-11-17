import { useNavigate } from "react-router-dom";
import { getRole } from "./user";

export const useAuthentication = () => {
  const navigate = useNavigate();

  const login = async (username?: string) => {
      try {
        if (username)
          fetch('/api/login', {
          method: 'POST',
          headers:{
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          body: new URLSearchParams({
              'username': username,
              'password': 'password',
          })
        }).then(async () => {
          window.location.replace("/driver-poc");
        });
        else {
          window.location.replace("/driver-poc");
        }
    } catch (e) {
        if (username) navigate('/driver-poc/login');
        else window.location.replace(`/api/oauth2/authorization/esignet`);
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
