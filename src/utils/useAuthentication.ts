import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { authentication } from './authentication';

export const useAuthentication = () => {
  const location = useLocation();
  async function callback() {
    try {
      await authentication.isLoggedIn();
      navigate('/dashboard');
    } catch (error) {
      window.location.href = '/';
    }
  }
  useEffect(() => {
    window.addEventListener('authenticationEvent', callback);
    return () => {
      window.removeEventListener('authenticationEvent', callback);
    };
  }, []);
};
