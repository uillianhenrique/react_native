import styled, {css} from 'styled-components/native';

export const Container = styled.View`
  background-color: #fff;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const Title = styled.Text`
  font-size: 30px;
  color: darkblue;
`;

export const InputContainer = styled.View`
  margin-top: 10px;
  width: 80%;
  height: 42px;
`;

export const Input = styled.TextInput`
  padding-left: 10px;
  border-width: 2px;
  border-radius: 5px;
  border-color: darkblue;
  font-size: 15px;
  color: #000;
`;

export const Button = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 42px;
  margin-top: 20px;
  border-radius: 10px;
  background-color: green;

  ${props =>
    props.disabled === true &&
    css`
      background-color: darkblue;
    `}
`;

export const TextButton = styled.Text`
  font-size: 20px;
  color: #000;

  ${props =>
    props.disabled === true &&
    css`
      color: #fff;
    `}
`;

export const ButtonInvited = styled.TouchableOpacity`
  margin-top: 40px;
`;

export const TextInvited = styled.Text`
  font-size: 16px;
`;
