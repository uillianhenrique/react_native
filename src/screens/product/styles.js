import styled from 'styled-components/native';

export const ScrollView = styled.ScrollView`
  background-color: #fff;
`;

export const Container = styled.View`
  background-color: #f4f4f4;
  align-items: center;
  flex: 1;
`;

export const ContainerList = styled.View`
  background-color: #228b22;
  padding: 5px;
  width: 92%;
  border-radius: 2px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 20px;
`;

export const Button = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 30px;
  margin-top: 20px;
  border-radius: 5px;
  background-color: #000;
`;

export const TextButton = styled.Text`
  font-size: 19px;
  color: #dc1;
`;

export const NoProducts = styled.Text`
  font-size: 20px;
  margin-top: 65%;
  text-align: center;
`;
