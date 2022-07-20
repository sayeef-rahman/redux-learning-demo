const initialState = {
  cartItems: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    // Add product to cart
    case 'ADD_TO_CART': {
      const newState = {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
      // console.log("Cart Reducer: ",newState);
      return newState;
    }

    //Remove Product From Cart
    case 'REMOVE_FROM_CART': {
      let productID = action.payload;
      let oldCartItems = state.cartItems;
      const filteredProducts = oldCartItems.filter (product => product.id !== productID);
      console.log('filtered Products:',filteredProducts)
      const newState = {
        cartItems: [...filteredProducts]
      };
      return newState;
    }

    // console.log("Product ID: ",action.payload)
    // console.log("All Products: ",state.cartItems);
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

// case 'REMOVE_FROM_CART': {
//

//   // return const foundInCart = 
//   };
