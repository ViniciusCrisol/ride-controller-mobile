import React, { useCallback, useRef } from 'react';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';

import api from '../../library/api';
import { useAuth } from '../../hooks/auth';

import Button from '../../components/Button';
import Input from '../../components/Input';

import { Container, Text, SignOutLabel, SignOutButton } from './styles';

interface IRequest {
  value: number;
}

const CreateTicket: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { signOut } = useAuth();

  const handleSubmit = useCallback(async ({ value }: IRequest) => {
    await api.post('tickets', value);
  }, []);

  return (
    <Container>
      <Text>
        Entre com o valor do ticket {'\n'} para ter acesso ao aplicativo.
      </Text>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <Input
          name="value"
          icon="dollar-sign"
          keyboardType="numeric"
          placeholder="0.00"
        />
        <Button onPress={() => formRef.current?.submitForm()}>Acessar</Button>
      </Form>
      <SignOutButton onPress={signOut}>
        <SignOutLabel>Cancelar(sair)</SignOutLabel>
      </SignOutButton>
    </Container>
  );
};

export default CreateTicket;
