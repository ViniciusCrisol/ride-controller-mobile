import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: { paddingLeft: 14, paddingBottom: 14 },
})`
  width: 100%;
`;

export const Item = styled.View`
  height: 86px;
  width: 134px;

  padding: 14px;
  margin-right: 14px;
  border-radius: 12px;
  background: #d0ebe4;
`;

export const Quantity = styled.Text`
  color: #1acb78;
  font-size: 24px;
`;

export const Label = styled.Text`
  color: #fff;
  font-weight: bold;
`;
