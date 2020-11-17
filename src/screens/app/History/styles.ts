import styled from 'styled-components/native';

export const LogList = styled.ScrollView.attrs({
  stickyHeaderIndices: [0],
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { paddingTop: 120 },
})`
  flex: 1;
  width: 100%;
`;

export const InfoCard = styled.View``;

export const Label = styled.Text``;
