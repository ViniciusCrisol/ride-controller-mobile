import React, { useCallback, useRef } from 'react';
import { FormHandles } from '@unform/core';

import Input from '../../../components/Input';
import Button from '../../../components/Button';
import Layout from '../../../components/Layout';
import HeaderCard from '../../../components/HeaderCard';

import { Form } from './styles';

interface IFormData {
  value: string;
}

const Settings: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(({ value }: IFormData) => {
    const fixedValue = Number(value).toFixed(2);

    console.log(fixedValue);
  }, []);

  return (
    <Layout>
      <HeaderCard
        label="Valor por viagem - alterado dia 20/10/2020"
        value={2}
      />
      <Form ref={formRef} onSubmit={handleSubmit}>
        <Input
          name="value"
          icon="dollar-sign"
          keyboardType="numeric"
          placeholder="0.00"
        />
        <Button loading onPress={() => formRef.current?.submitForm()}>
          Enviar
        </Button>
      </Form>
    </Layout>
  );
};

export default Settings;
