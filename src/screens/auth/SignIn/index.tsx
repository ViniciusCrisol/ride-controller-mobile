import React, { useCallback, useRef } from 'react';
import { useNavigation } from '@react-navigation/native';
import { FormHandles } from '@unform/core';

import Input from '../../../components/Input';
import Layout from '../../../components/Layout';
import Button from '../../../components/Button';

import { CreateAccont, Form, Title } from '../styles';

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { navigate } = useNavigation();

  const handleNavigate = useCallback(() => {
    navigate('SignUp');
  }, [navigate]);

  return (
    <Layout>
      <Form ref={formRef} onSubmit={(data) => console.log(data)}>
        <Title>Acesso</Title>
        <Input name="shield" icon="user" placeholder="Acesso" />
        <Input name="password" icon="lock" placeholder="Senha" />
        <Button onPress={() => formRef.current?.submitForm()}>Enviar</Button>
        <CreateAccont onPress={handleNavigate}>Criar conta</CreateAccont>
      </Form>
    </Layout>
  );
};

export default SignIn;
