import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  useEffect,
} from 'react';
import AsynStorage from '@react-native-community/async-storage';
import api from '../library/api';

interface AuthState {
  token: string;
  user: any;
}

interface AuthContextData {
  user: any;
  loading: boolean;
  signOut(): void;
  signIn(credentials: ISignIn): Promise<void>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>({} as AuthState);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getInitialData(): Promise<void> {
      const token = await AsynStorage.getItem('@GoBarber:token');
      const user = await AsynStorage.getItem('@GoBarber:user');

      if (token && user) {
        setData({ token, user: JSON.parse(user) });
      }

      setLoading(false);
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
    <AuthContext.Provider value={{ loading, user: data.user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };
