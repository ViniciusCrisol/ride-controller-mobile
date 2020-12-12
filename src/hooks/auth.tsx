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
  created_at: string;
}

interface ILastPayment {
  value: number;
  created_at: string;
}

interface IAuthState {
  user: IUser;
  token: string;
  ticket?: ITicket;
  payment?: ILastPayment;
}

interface IAuthContextData {
  user: IUser;
  ticket?: ITicket;
  lastPayment?: ILastPayment;
  signOut(): void;
  updateTicket(ticket: ITicket): void;
  signIn(credentials: ISignIn): Promise<void>;
}

const AuthContext = createContext<IAuthContextData>({} as IAuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<IAuthState>({} as IAuthState);

  useEffect(() => {
    async function getInitialData(): Promise<void> {
      await preventAutoHideAsync();

      const user = await AsynStorage.getItem('@RC:user');
      const token = await AsynStorage.getItem('@RC:token');
      const ticket = await AsynStorage.getItem('@RC:ticket');
      const payment = await AsynStorage.getItem('@RC:payment');

      if (token && user) {
        setData({
          token,
          user: JSON.parse(user),
          ticket: ticket ? JSON.parse(ticket) : undefined,
          payment: payment ? JSON.parse(payment) : undefined,
        });

        api.defaults.headers.authorization = `Bearer ${token}`;
      }

      await hideAsync();
    }

    getInitialData();
  }, []);

  const signIn = useCallback(async ({ login, password }) => {
    const response = await api.post('sessions', { login, password });

    const { token, payment, ticket, user } = response.data;
    api.defaults.headers.authorization = `Bearer ${token}`;

    await AsynStorage.setItem('@RC:token', token);
    await AsynStorage.setItem('@RC:user', JSON.stringify(user));

    if (ticket) {
      await AsynStorage.setItem('@RC:ticket', JSON.stringify(ticket));
    }

    if (payment) {
      await AsynStorage.setItem('@RC:payment', JSON.stringify(payment));
    }

    setData({ token, payment, ticket, user });
  }, []);

  const signOut = useCallback(async () => {
    await AsynStorage.removeItem('@RC:user');
    await AsynStorage.removeItem('@RC:token');

    setData({} as IAuthState);
  }, []);

  const updateTicket = useCallback(
    async (ticket: ITicket) => {
      await AsynStorage.setItem('@RC:ticket', JSON.stringify(ticket));
      setData((prevData) => ({ ...prevData, ticket }));
    },
    [setData],
  );

  return (
    <AuthContext.Provider
      value={{
        user: data.user,
        ticket: data.ticket,
        lastPayment: data.payment,
        signIn,
        signOut,
        updateTicket,
      }}
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
