import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  flex: 1;
  width: 100%;
`;

export const ListContainer = styled.View`
  width: 100%;
  background: #fff;
`;
