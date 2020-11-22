import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  useEffect,
} from 'react';
import AsynStorage from '@react-native-community/async-storage';
import { hideAsync, preventAutoHideAsync } from 'expo-splash-screen';

import api from '../library/api';

interface IUser {
  id: string;
  code: string;
}

interface ITicket {
  value: number;
  created_at: Date;
}

interface ILastPayment {
  value: number;
  created_at: Date;
}

interface IAuthState {
  user: IUser;
  token: string;
  ticket?: ITicket;
  payment?: ILastPayment;
}

interface IAuthContextData {
  user: IUser;
  ticket?: boolean;
  signOut(): void;
  signIn(credentials: ISignIn): Promise<void>;
}

const AuthContext = createContext<IAuthContextData>({} as IAuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<IAuthState>({} as IAuthState);

  useEffect(() => {
    async function getInitialData(): Promise<void> {
      await preventAutoHideAsync();

      const token = await AsynStorage.getItem('@RC:token');
      const user = await AsynStorage.getItem('@RC:user');
      if (token && user) setData({ token, user: JSON.parse(user) });

      await hideAsync();
    }

    getInitialData();
  }, []);

  const signIn = useCallback(async ({ login, password }) => {
    const response = await api.post('sessions', { login, password });

    const { token, payment, ticket, user } = response.data;

    await AsynStorage.setItem('@RC:user', JSON.stringify(user));
    await AsynStorage.setItem('@RC:token', JSON.stringify(token));
    if (ticket) await AsynStorage.setItem('@RC:ticket', JSON.stringify(ticket));
    if (payment)
      await AsynStorage.setItem('@RC:payment', JSON.stringify(payment));

    setData({ token, payment, ticket, user });
  }, []);

  const signOut = useCallback(async () => {
    await AsynStorage.removeItem('@RC:user');
    await AsynStorage.removeItem('@RC:token');

    setData({} as IAuthState);
  }, []);

  return (
    <AuthContext.Provider
      value={{ user: data.user, ticket: !!data.ticket, signIn, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): IAuthContextData {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };
