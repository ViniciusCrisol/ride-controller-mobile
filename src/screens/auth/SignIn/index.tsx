import React, { useCallback, useRef, useState } from 'react';
import { Alert } from 'react-native';
import { FormHandles } from '@unform/core';
import { useNavigation } from '@react-navigation/native';

import { useAuth } from '../../../hooks/auth';

import Input from '../../../components/Input';
import Layout from '../../../components/Layout';
import Button from '../../../components/Button';

import { Label, Form, Title } from '../styles';

const SignIn: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const formRef = useRef<FormHandles>(null);
  const { navigate } = useNavigation();
  const { signIn } = useAuth();

  const handleSubmit = useCallback(
    async ({ login, password }: ISignIn) => {
      setLoading(true);
      try {
        await signIn({ login, password });
      } catch (err) {
        setLoading(false);
        Alert.alert('Erro ao acessar.', err.response.data.message);
      }
    },
    [signIn],
  );

  const handleNavigate = useCallback(() => {
    navigate('SignUp');
  }, [navigate]);

  return (
    <Layout>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <Title>Acesso</Title>
        <Input
          icon="user"
          name="login"
          placeholder="Acesso"
          autoCapitalize="none"
          keyboardType="email-address"
        />
        <Input
          icon="lock"
          name="password"
          placeholder="Senha"
          secureTextEntry
          autoCapitalize="none"
        />
        <Button loading={loading} onPress={() => formRef.current?.submitForm()}>
          Enviar
        </Button>
        <Label onPress={handleNavigate}>Criar conta</Label>
      </Form>
    </Layout>
  );
};

export default SignIn;
