import React, { useCallback, useMemo, useRef, useState } from 'react';
import { FormHandles } from '@unform/core';
import { Alert, View } from 'react-native';

import api from '../../../library/api';
import { useAuth } from '../../../hooks/auth';

import Input from '../../../components/Input';
import Button from '../../../components/Button';
import Layout from '../../../components/Layout';
import HeaderCard from '../../../components/HeaderCard';

import { Form, SignOutButton, SignOutLabel } from './styles';

interface IFormData {
  value: string;
}

const Settings: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const formRef = useRef<FormHandles>(null);
  const { signOut, ticket, updateTicket } = useAuth();

  const formattedDate = useMemo(() => {
    const splittedDate = String(ticket?.created_at).split('T')[0];
    const [year, month, day] = splittedDate.split('-');
    return `${day}/${month}/${year}`;
  }, [ticket]);

  const handleSubmit = useCallback(
    async ({ value }: IFormData) => {
      setLoading(true);
      const fixedValue = Number(Number(value).toFixed(2));

      try {
        const response = await api.post('tickets', { value: fixedValue });
        updateTicket(response.data);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        Alert.alert('Erro ao cadastrar ticket.', err.response.data.message);
      }
    },
    [updateTicket],
  );

  if (!ticket) return <View />;

  return (
    <Layout>
      <HeaderCard
        label={`Valor por viagem - alterado dia ${formattedDate}`}
        value={ticket.value}
      />
      <Form ref={formRef} onSubmit={handleSubmit}>
        <Input
          name="value"
          icon="dollar-sign"
          placeholder="0.00"
          keyboardType="numeric"
        />
        <Button loading={loading} onPress={() => formRef.current?.submitForm()}>
          Enviar
        </Button>
      </Form>
      <SignOutButton onPress={signOut}>
        <SignOutLabel>Sair</SignOutLabel>
      </SignOutButton>
    </Layout>
  );
};

export default Settings;
