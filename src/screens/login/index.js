import React, {useState, useMemo, useRef} from 'react';
import {ActivityIndicator} from 'react-native';
import {useNavigation} from 'react-navigation-hooks';
import {RNToasty} from 'react-native-toasty';

import {
  Container,
  InputContainer,
  Input,
  Title,
  Button,
  TextButton,
  ButtonInvited,
  TextInvited,
} from './styles';

export default function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const refSenha = useRef();

  function convidado() {
    navigate('Register', {auth: false});
  }

  const {navigate} = useNavigation();
  const [disabled, setDisabled] = useState(true);
  const [loading, setLoading] = useState(false);

  useMemo(() => {
    if (email !== '' && senha !== '') {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [email, senha]);

  function authentication() {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);

      if (email !== 'uillian') {
        return RNToasty.Error({
          title: 'Email inválido!',
          withIcon: false,
        });
      }

      if (senha !== '12345678') {
        return RNToasty.Error({
          title: 'Senha inválida!',
          withIcon: false,
        });
      }

      navigate('Register', {auth: true});
    }, 3000);
  }

  return (
    <Container>
      <Title> Login </Title>

      <InputContainer>
        <Input
          placeholder="Email"
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={text => setEmail(text)}
          onSubmitEditing={() => refSenha.current.focus()}
        />
      </InputContainer>

      <InputContainer>
        <Input
          placeholder="Senha"
          onChangeText={text => setSenha(text)}
          secureTextEntry={true}
          ref={refSenha}
        />
      </InputContainer>

      {loading ? (
        <ActivityIndicator size="large" color={'#00BFFF'} />
      ) : (
        <Button disabled={disabled} onPress={() => authentication()}>
          <TextButton disabled> Entrar </TextButton>
        </Button>
      )}

      <ButtonInvited onPress={() => convidado()}>
        <TextInvited>Entrar como convidado</TextInvited>
      </ButtonInvited>
    </Container>
  );
}
