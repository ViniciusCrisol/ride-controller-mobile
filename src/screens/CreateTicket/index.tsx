import React, { useCallback, useRef, useState } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/mobile';
import { Alert } from 'react-native';

import api from '../../library/api';
import { useAuth } from '../../hooks/auth';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Text, SignOutLabel, SignOutButton } from './styles';

interface IRequest {
  value: string;
}

const CreateTicket: React.FC = () => {
  const { signOut, updateTicket } = useAuth();
  const formRef = useRef<FormHandles>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = useCallback(
    async ({ value }: IRequest) => {
      setLoading(true);
      const fixedValue = Number(Number(value).toFixed(2));

      try {
        await api.post('tickets', { value: fixedValue });
        updateTicket(fixedValue);
      } catch (err) {
        setLoading(false);
        Alert.alert('Erro ao cadastrar ticket.', err.response.data.message);
      }
    },
    [updateTicket],
  );

  return (
    <Container>
      <Text>
        Entre com o valor do ticket {'\n'} para ter acesso ao aplicativo.
      </Text>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <Input
          name="value"
          icon="dollar-sign"
          placeholder="0.00"
          keyboardType="numeric"
        />
        <Button loading={loading} onPress={() => formRef.current?.submitForm()}>
          Acessar
        </Button>
      </Form>
      <SignOutButton onPress={signOut}>
        <SignOutLabel>Cancelar(sair)</SignOutLabel>
      </SignOutButton>
    </Container>
  );
};

export default CreateTicket;
