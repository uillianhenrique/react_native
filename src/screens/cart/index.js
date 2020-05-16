import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {RNToasty} from 'react-native-toasty';
import {ActivityIndicator} from 'react-native';

import {
  ScrollView,
  Container,
  ContainerList,
  Title,
  ButtonContainer,
  Button,
  TextButton,
  NoProducts,
} from './styles';

import Header from '../../components/header';

import {clearCart} from '../../store/ducks/cart';

export default function Cart() {
  const {productsCart} = useSelector(state => state.cart);

  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  function finish() {
    setLoading(true);

    setTimeout(() => {
      dispatch(clearCart());

      setLoading(false);

      RNToasty.Success({
        title: 'Compra finalizada!',
        withIcon: false,
      });
    }, 2000);
  }

  return (
    <>
      <ScrollView>
        <Header>Carrinho de Compras</Header>

        <Container>
          {productsCart.length === 0 ? (
            <NoProducts>Carrinho está vazio!</NoProducts>
          ) : (
            <>
              {productsCart.map(product => {
                return (
                  <ContainerList key={product.productCode}>
                    <Title>Nome do produto: {product.productName}</Title>
                    <Title>Preço do produto: {product.productPrice}</Title>
                    <Title>Código do produto: {product.productCode}</Title>
                  </ContainerList>
                );
              })}
            </>
          )}
        </Container>
      </ScrollView>

      <ButtonContainer>
        {loading ? (
          <ActivityIndicator size="large" color={'#00BFFF'} />
        ) : (
          <Button onPress={() => finish()}>
            <TextButton>Finalizar Compra</TextButton>
          </Button>
        )}
      </ButtonContainer>
    </>
  );
}
