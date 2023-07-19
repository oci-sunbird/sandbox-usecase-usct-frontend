import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { RPCContext } from './rpc';

export const useAuthentication = () => {
  const navigate = useNavigate();
  const rpc = useContext(RPCContext);
  const login = async (username: string, password: string) => {
    try {
      const token = await rpc.login(username, password);
      console.log(token);
      // window.dispatchEvent(new CustomEvent("authenticationEvent"));
    } catch (error) {
      throw error;
    }
  };
  const signOut = async () => {
    try {
      window.dispatchEvent(new CustomEvent('authenticationEvent'));
    } catch (error) {
      throw error;
    }
  };
  const isAuthenticated = () => {
    try {
      //   return session;
      // return true;
      return false;
    } catch (error) {
      throw error;
    }
  };
  async function callback() {
    try {
      //   await authentication.isLoggedIn();
      navigate('/dashboard');
    } catch (error) {
      window.location.href = '/driver-poc/login';
    }
  }
  useEffect(() => {
    window.addEventListener('authenticationEvent', callback);
    return () => {
      window.removeEventListener('authenticationEvent', callback);
    };
  }, []);
  return { login, isAuthenticated } as const;
};
