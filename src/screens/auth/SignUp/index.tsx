import React, { useCallback, useRef, useState } from 'react';
import { Alert } from 'react-native';
import { FormHandles } from '@unform/core';
import { useNavigation } from '@react-navigation/native';

import api from '../../../library/api';
import validateForm from '../../../library/validateSignUpForm';

import Input from '../../../components/Input';
import Layout from '../../../components/Layout';
import Button from '../../../components/Button';

import { Label, Form, Title } from '../styles';

const SignUp: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const formRef = useRef<FormHandles>(null);
  const { navigate } = useNavigation();

  const handleNavigate = useCallback(() => {
    navigate('SignIn');
  }, [navigate]);

  const handleSubmit = useCallback(
    async ({ name, code, email, password }: ISignUp) => {
      setLoading(true);

      try {
        validateForm({ name, code, email, password });
        await api.post('users', { name, code, email, password });
        handleNavigate();
      } catch (err) {
        setLoading(false);
        const errorMessage = err.response.data.message || err.message;
        Alert.alert('Erro no cadastro.', errorMessage);
      }
    },
    [handleNavigate],
  );

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
        <Input
          name="password"
          icon="lock"
          placeholder="Senha"
          secureTextEntry
          autoCapitalize="none"
        />
        <Button loading={loading} onPress={() => formRef.current?.submitForm()}>
          Enviar
        </Button>
        <Label onPress={handleNavigate}>Já tenho uma conta</Label>
      </Form>
    </Layout>
  );
};

export default SignUp;
