import React, {useState, useMemo, useRef} from 'react';
import {ActivityIndicator} from 'react-native';
import {RNToasty} from 'react-native-toasty';
import {useDispatch} from 'react-redux';
import {useNavigation} from 'react-navigation-hooks';

import {
  Container,
  InputContainer,
  Input,
  Button,
  TextButton,
  NoPermission,
} from './styles';

import Header from '../../components/header';

import {setProduct} from '../../store/ducks/product';

export default function Register() {
  const [productCode, setCode] = useState('');
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState(0);

  const ref_product_name = useRef();
  const ref_product_price = useRef();

  const {getParam} = useNavigation();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(true);

  useMemo(() => {
    if (productCode !== '' && productName !== '' && productPrice !== 0) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [productCode, productName, productPrice]);

  function registerProduct() {
    setLoading(true);

    const data = {
      productCode,
      productName,
      productPrice,
    };

    setTimeout(() => {
      dispatch(setProduct(data));

      setLoading(false);

      setCode('');
      setProductName('');
      setProductPrice(0);

      RNToasty.Success({
        title: 'Sucesso ao cadastrar!',
        withIcon: false,
      });
    }, 2000);
  }

  return (
    <>
      <Header>Cadastro de produtos</Header>
      <Container>
        {getParam('auth') ? (
          <>
            <InputContainer>
              <Input
                placeholder="Cód Produto"
                keyboardType="number-pad"
                onChangeText={text => setCode(text)}
                onSubmitEditing={() => ref_product_name.current.focus()}
              />
            </InputContainer>

            <InputContainer>
              <Input
                placeholder="Nome"
                autoCapitalize="words"
                onChangeText={text => setProductName(text)}
                ref={ref_product_name}
                onSubmitEditing={() => ref_product_price.current.focus()}
              />
            </InputContainer>

            <InputContainer>
              <Input
                placeholder="Preço"
                keyboardType="numeric"
                onChangeText={text => setProductPrice(text)}
                ref={ref_product_price}
              />
            </InputContainer>

            {loading ? (
              <ActivityIndicator size="large" color={'#00BFFF'} />
            ) : (
              <Button disabled={disabled} onPress={() => registerProduct()}>
                <TextButton disabled> Cadastrar </TextButton>
              </Button>
            )}
          </>
        ) : (
          <NoPermission> Você não tem permissão para cadastrar! </NoPermission>
        )}
      </Container>
    </>
  );
}
