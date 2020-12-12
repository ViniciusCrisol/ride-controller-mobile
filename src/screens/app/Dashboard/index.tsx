import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { subDays, isAfter, parseISO } from 'date-fns';
import { Alert } from 'react-native';

import api from '../../../library/api';
import { useAuth } from '../../../hooks/auth';

import Layout from '../../../components/Layout';
import Button from '../../../components/Button';
import Loading from '../../../components/Loading';
import TextCard from '../../../components/TextCard';
import HeaderCard from '../../../components/HeaderCard';
import List from './List';

import { ListContainer, BreakLine } from './styles';

const Dashboard: React.FC = () => {
  const { updateLastPayment } = useAuth();

  const [logs, setLogs] = useState<ILog[]>([]);
  const [unpaidLogs, setUnpaidLogs] = useState<ILog[]>([]);
  const [loadingCreatePayment, setLoadingCreatePayment] = useState(false);
  const [loadingCreateLog, setLoadingCreateLog] = useState(false);

  useEffect(() => {
    async function getInitialData(): Promise<void> {
      const response = await api.get('logs');
      setLogs(response.data);
    }

    getInitialData();
  }, []);

  useEffect(() => {
    async function getInitialData(): Promise<void> {
      const response = await api.get('logs/unpaid');
      setUnpaidLogs(response.data);
    }

    getInitialData();
  }, []);

  const lastWeekLogs = useMemo(() => {
    const startOfWeek = subDays(Date.now(), 7);
    return logs.filter((log) => isAfter(parseISO(log.created_at), startOfWeek));
  }, [logs]);

  const unpaidLogsValue = useMemo(() => {
    return unpaidLogs.reduce((sum, log) => sum + Number(log.value), 0);
  }, [unpaidLogs]);

  const handleCreateLog = useCallback(async () => {
    setLoadingCreateLog(true);
    try {
      const response = await api.post('logs');
      const log = response.data;

      setLogs((prevData) => [...prevData, log]);
      setUnpaidLogs((prevData) => [...prevData, log]);
      setLoadingCreateLog(false);
    } catch (err) {
      Alert.alert('Erro ao cadastrar viagem:', err.response.data.message);
      setLoadingCreateLog(false);
    }
  }, []);

  const handleCreatePayment = useCallback(async () => {
    setLoadingCreatePayment(true);
    try {
      const response = await api.post('payments');
      const payment = response.data;

      setUnpaidLogs([]);
      updateLastPayment(payment);
      setLoadingCreatePayment(false);
    } catch (err) {
      Alert.alert('Erro ao realizar pagamento:', err.response.data.message);
      setLoadingCreatePayment(false);
    }
  }, [updateLastPayment]);

  if (logs.length === 0 || !unpaidLogs) return <Loading />;

  return (
    <>
      <Layout>
        <HeaderCard
          label="Valor gasto nos últimos sete dias."
          value={lastWeekLogs.reduce((sum, log) => sum + Number(log.value), 0)}
        />
        <TextCard
          leftLabel={`${unpaidLogs.length} viagens`}
          rightLabel={`R$ ${unpaidLogsValue.toFixed(2)}`}
        />
        <Button onPress={handleCreatePayment} loading={loadingCreatePayment}>
          Zerar
        </Button>
        <BreakLine />
        <Button onPress={handleCreateLog} loading={loadingCreateLog}>
          Registrar
        </Button>
      </Layout>
      <ListContainer>
        <List logs={logs} />
      </ListContainer>
    </>
  );
};

export default Dashboard;
