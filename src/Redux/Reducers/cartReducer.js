const initialState = {
  cartItems: [],
};

const cartReducer = (state = localStorage.getItem('cart') || [], action) => {
  switch (action.type) {
    // Add product to cart
    case 'ADD_TO_CART': {
      // console.log('cart', action?.payload);
      const existingCart = [...state];
      const coming = action.payload;
      const itemExist = existingCart.find((item) => item.id === coming.id);
      if (itemExist) {
        itemExist.qty = itemExist.qty + 1;
        localStorage.setItem('carts', JSON.stringify(existingCart));
        existingCart.map((cartItem) => {
          state.push(cartItem);
        });
        return existingCart;
      } else {
        action.payload.qty = 1;
        const newCart = [...existingCart, action.payload];

        newCart.map((cartItem) => {
          state.push(cartItem);
        });
        localStorage.setItem('carts', JSON.stringify(newCart));
        return newCart;
      }
    }

    //Remove Product From Cart
    case 'REMOVE_FROM_CART': {
      let productID = action.payload;
      console.log('Remove Cart:(ProductID)', productID);
      let oldCartItems = JSON.parse(state);
      const filteredProducts = oldCartItems.filter(
        (product) => product.id !== productID
      );
      let products = JSON.stringify(filteredProducts);
      localStorage.setItem('carts', products);
      return products;
    }

    //Reset Cart
    case 'RESET_CART': {
      return initialState;
      // const newState = initialState;
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
