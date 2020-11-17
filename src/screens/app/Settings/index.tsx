import React, { useRef } from 'react';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';

import Input from '../../../components/Input';
import Layout from '../../../components/Layout';
import HeaderCard from '../../../components/HeaderCard';

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
      </Form>
    </Layout>
  );
};

export default Settings;
