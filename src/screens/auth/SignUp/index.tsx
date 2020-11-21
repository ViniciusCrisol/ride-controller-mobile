import React, { useCallback, useRef } from 'react';
import { Alert } from 'react-native';
import { FormHandles } from '@unform/core';
import { useNavigation } from '@react-navigation/native';

import validateForm from '../../../library/validateSignUpForm';

import Input from '../../../components/Input';
import Layout from '../../../components/Layout';
import Button from '../../../components/Button';

import { Label, Form, Title } from '../styles';

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { navigate } = useNavigation();

  const handleSubmit = useCallback(async (data: ISignUp) => {
    try {
      validateForm(data);
    } catch (err) {
      Alert.alert('Erro no cadastro.', err.message);
    }
  }, []);

  const handleNavigate = useCallback(() => {
    navigate('SignIn');
  }, [navigate]);

  return (
    <Layout>
      <Form ref={formRef} onSubmit={handleSubmit}>
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
        <Label onPress={handleNavigate}>Já tenho uma conta</Label>
      </Form>
    </Layout>
  );
};

export default SignUp;
