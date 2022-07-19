const initialState = {
  cartItems: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const newState = {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
      console.log(newState);
      return newState;
    }
    default:
      return state;
  }
};

export default cartReducer;
