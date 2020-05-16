import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RNToasty} from 'react-native-toasty';

import {
  ScrollView,
  Container,
  ContainerList,
  Title,
  Button,
  TextButton,
  NoProducts,
} from './styles';

import Header from '../../components/header';

import {setProductCart} from '../../store/ducks/cart';

export default function Product() {
  const {products} = useSelector(state => state.product);
  const dispatch = useDispatch();

  function sendToCart(product) {
    const data = {
      productCode: product.productCode,
      productName: product.productName,
      productPrice: product.productPrice,
    };

    setTimeout(() => {
      dispatch(setProductCart(data));

      RNToasty.Success({
        title: 'Produto encaminhado p/ o carrinho!',
        withIcon: false,
      });
    }, 2000);
  }

  return (
    <ScrollView>
      <Header>Lista dos Produtos</Header>

      <Container>
        {products.length === 0 ? (
          <NoProducts>Ops! Nenhum produto cadastrado!</NoProducts>
        ) : (
          <>
            {products.map(product => {
              return (
                <ContainerList key={product.productCode}>
                  <Title>Nome: {product.productName}</Title>
                  <Title>Preço: {product.productPrice}</Title>
                  <Title>Código: {product.productCode}</Title>

                  <Button onPress={() => sendToCart(product)}>
                    <TextButton>Enviar para o Carrinho</TextButton>
                  </Button>
                </ContainerList>
              );
            })}
          </>
        )}
      </Container>
    </ScrollView>
  );
}
