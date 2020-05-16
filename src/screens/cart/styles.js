import styled, {css} from 'styled-components/native';

export const ScrollView = styled.ScrollView`
  background-color: #fff;
`;

export const Container = styled.View`
  background-color: #fff;
  align-items: center;
  flex: 1;
`;

export const ContainerList = styled.View`
  background-color: green;
  padding: 10px;
  width: 95%;
  border-radius: 2px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 16px;
`;

export const ButtonContainer = styled.View`
  justify-content: center;
  align-items: center;
  background-color: #fff;
  padding-bottom: 15px;
`;

export const Button = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 42px;
  margin-top: 20px;
  border-radius: 10px;
  background-color: darkblue;
`;

export const TextButton = styled.Text`
  font-size: 15px;
  color: #fff;
`;

export const NoProducts = styled.Text`
  font-size: 20px;
  margin-top: 65%;
  text-align: center;
`;
