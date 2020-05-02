import React, {createContext, useState, useEffect, useContext} from 'react';
import {AsyncStorage} from 'react-native';
import {authSignin, authForgot} from '../services/authServices';
import api from '../services/api';

const AuthContext = createContext({
  signed: false,
  user: {},
  loading: true,
});

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStorageData() {
      const storageUser = await AsyncStorage.getItem('@BeBrideAuth:user');
      const storageToken = await AsyncStorage.getItem('@BeBrideAuth:token');

      if (storageUser && storageToken) {
        if (await validUser(storageToken)) {
          api.defaults.headers.common[
            'Authorization'
          ] = `Bearer ${storageToken}`;
          setUser(JSON.parse(storageUser));
        } else {
          signOut();
        }
        setLoading(false);
      } else if (!storageUser && !storageToken) {
        setLoading(false);
      }
    }
    loadStorageData();
  }, []);

  async function signIn(email, password) {
    const response = await authSignin(email, password);

    if (response) {
      const user = {
        email: response.email,
        name: response.name,
        type: response.type,
      };

      setUser(user);

      api.defaults.headers.common['Authorization'] = `Bearer ${response.token}`;

      await AsyncStorage.setItem('@BeBrideAuth:token', response.token);

      await AsyncStorage.setItem('@BeBrideAuth:user', JSON.stringify(user));
    } else {
      signOut();
    }
    return response;
  }

  function signOut() {
    api.defaults.headers.common['Authorization'] = '';
    AsyncStorage.clear().then(() => {
      setUser(null);
    });
  }

  async function forgot(email) {
    signOut();
    const response = await authForgot(email);
    return response;
  }

  async function validUser(token) {
    try {
      await api.post('/validate_token', {token});
      return true;
    } catch (error) {
      signOut();
      return false;
    }
  }

  return (
    <AuthContext.Provider
      value={{signed: !!user, user, signIn, signOut, forgot, loading}}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);
  return context;
}
