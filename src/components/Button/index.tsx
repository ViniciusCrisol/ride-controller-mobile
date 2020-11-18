import React from 'react';
import { RectButtonProperties } from 'react-native-gesture-handler';

import { Container, ButtonText, Spinner } from './styles';

interface ButtonProps extends RectButtonProperties {
  children: string;
  loading?: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, loading, ...rest }) => (
  <Container {...rest} isLoading={!!loading} enabled={!!loading}>
    {loading ? <Spinner /> : <ButtonText>{children}</ButtonText>}
  </Container>
);

export default Button;
