export const Types = {
  SET_PRODUTO: 'product/SET',
};

const initialState = {
  products: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case Types.SET_PRODUTO:
      return {...state, products: [...state.products, action.payload]};

    default:
      return state;
  }
}

export function setProduct(data) {
  return {
    type: Types.SET_PRODUTO,
    payload: data,
  };
}
