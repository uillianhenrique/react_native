export const Types = {
  SET_CART: 'cart/SET',
  CLEAR_CART: 'cart/CLEAR',
};

const initialState = {
  productsCart: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case Types.SET_CART:
      return {...state, productsCart: [...state.productsCart, action.payload]};

    case Types.CLEAR_CART:
      return initialState;

    default:
      return state;
  }
}

export function setProductInCar(data) {
  return {
    type: Types.SET_CART,
    payload: data,
  };
}

export function clearCart() {
  return {
    type: Types.CLEAR_CART,
  };
}
