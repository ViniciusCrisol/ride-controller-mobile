import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  useEffect,
} from 'react';
import AsynStorage from '@react-native-community/async-storage';
import * as SplashScreen from 'expo-splash-screen';
import api from '../library/api';

interface AuthState {
  token: string;
  user: any;
}

interface AuthContextData {
  user: any;
  signOut(): void;
  signIn(credentials: ISignIn): Promise<void>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>({} as AuthState);

  useEffect(() => {
    async function getInitialData(): Promise<void> {
      await SplashScreen.preventAutoHideAsync();

      const token = await AsynStorage.getItem('@GoBarber:token');
      const user = await AsynStorage.getItem('@GoBarber:user');
      if (token && user) setData({ token, user: JSON.parse(user) });

      await SplashScreen.hideAsync();
    }

    getInitialData();
  }, []);

  const signIn = useCallback(async ({ login, password }) => {
    const response = await api.post('sessions', { login, password });

    const { token, user } = response.data;

    await AsynStorage.setItem('@GoBarber:token', token);
    await AsynStorage.setItem('@GoBarber:user', JSON.stringify(user));

    setData({ token, user });
  }, []);

  const signOut = useCallback(async () => {
    await AsynStorage.removeItem('@GoBarber:user');
    await AsynStorage.removeItem('@GoBarber:token');

    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };
