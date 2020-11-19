import React, { useCallback, useRef } from 'react';
import { useNavigation } from '@react-navigation/native';
import { FormHandles } from '@unform/core';

import Input from '../../../components/Input';
import Layout from '../../../components/Layout';
import Button from '../../../components/Button';

import { CreateAccont, Form, Title } from '../styles';

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { navigate } = useNavigation();

  const handleNavigate = useCallback(() => {
    navigate('SignIn');
  }, [navigate]);

  return (
    <Layout>
      <Form ref={formRef} onSubmit={(data) => console.log(data)}>
        <Title>Cadastro</Title>
        <Input name="name" icon="user" placeholder="Nome" />
        <Input name="code" icon="shield" placeholder="Código" />
        <Input
          name="email"
          icon="mail"
          placeholder="E-mail"
          keyboardType="email-address"
        />
        <Input name="password" icon="lock" placeholder="Senha" />
        <Button onPress={() => formRef.current?.submitForm()}>Enviar</Button>
        <CreateAccont onPress={handleNavigate}>Já tenho uma conta</CreateAccont>
      </Form>
    </Layout>
  );
};

export default SignUp;
