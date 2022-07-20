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
      // console.log(newState);
      return newState;
    }
    default:
      return state;
  }
};

// console.log('Initial State: ', initialState.cartItems);

export default cartReducer;


// const cartReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'ADD_TO_CART': {
//       let product = action.payload;
//       let productIndex = state.cartItems.findIndex(
//         (cartItem) => cartItem.id === product.id
//       );
//       if (productIndex === -1) {
//         state.cartItems.push(product);
//       } else {
//         let prod = state.cartItems[productIndex];
//         prod.qty += 1;
//         let newprod = prod;
//         console.log('product', newprod);
//       }
//     }
//     default:
//       return state;
//   }
// };