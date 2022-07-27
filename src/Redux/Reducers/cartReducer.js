const initialState = {
    cartItems: [],
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        // Add product to cart
        case 'ADD_TO_CART': {

            const localItems = JSON.parse(localStorage.getItem('carts')) || [];
            // console.log('cart reducer called', action?.payload);
            // console.log('localItems', localItems);

            const existingCart = [...localItems];
            // console.log('existingCart', existingCart);
            // console.log('current state', state.cartItems);
            const coming = action.payload;
            const itemExist = existingCart.find((item) => item.id === coming.id);

            // console.log('itemExist', itemExist);
            // console.log('current state', state.cartItems);

            if (itemExist) {
                // itemExist.cartQuantity = itemExist.cartQuantity + 1;
                let itemIndex = existingCart.indexOf(itemExist);
                existingCart[itemIndex].cartQuantity = existingCart[itemIndex].cartQuantity +1 ;
                localStorage.setItem('carts', JSON.stringify(existingCart));
                return existingCart;
            } else {
                action.payload.cartQuantity = 1;
                const newCart = [...existingCart, action.payload];
                localStorage.setItem('carts', JSON.stringify(newCart));
                return newCart;
            }
        }

        //Remove Product From Cart
        case 'REMOVE_FROM_CART': {
            let productID = action.payload;
            console.log('Remove Cart:(ProductID)', productID);
            console.log('state', state);

            let oldCartItems = JSON.parse(state);

            console.log("existing :: ==> ", oldCartItems);
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
//         prod.cartQuantity += 1;
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
