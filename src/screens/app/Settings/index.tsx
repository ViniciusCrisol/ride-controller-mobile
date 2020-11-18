import React, { useRef } from 'react';
import { FormHandles } from '@unform/core';

import Input from '../../../components/Input';
import Button from '../../../components/Button';
import Layout from '../../../components/Layout';
import HeaderCard from '../../../components/HeaderCard';

import { Form } from './styles';

const Settings: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  return (
    <Layout>
      <HeaderCard
        label="Valor por viagem - alterado dia 20/10/2020"
        value={2}
      />
      <Form ref={formRef} onSubmit={(data: any) => console.log(data)}>
        <Input name="value" icon="dollar-sign" placeholder="Valor" />
        <Button>Enviar</Button>
      </Form>
    </Layout>
  );
};

export default Settings;
