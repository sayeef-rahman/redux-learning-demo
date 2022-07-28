function cartReducer(cart = JSON.parse(localStorage.getItem('carts')) || [], action) {
	switch (action.type) {
		case 'ADD_TO_CART': {
			const existingCart = [...cart];
			const coming = action.payload;
			const removeD = existingCart.find(food => food.id === coming.id);
            if (removeD) {
				removeD.qty = removeD.qty + 1;
				localStorage.setItem('carts', JSON.stringify(existingCart));
                return existingCart;
			}
             else {
				action.payload.qty = 1;
				const newCart = [...existingCart, action.payload];
				localStorage.setItem('carts', JSON.stringify(newCart));
                return newCart;
			}
		}
		case 'REMOVE_FROM_CART': {
			const existingCart = [...cart];
			const newCart = existingCart.filter(cart => cart.id !== action.payload);
            localStorage.setItem('carts',JSON.stringify(newCart));
			return newCart;
		}
		case 'REMOVE_ALL_FROM_CART': {
			const emptyCart = [];
            const localData = localStorage.setItem('carts',JSON.stringify(emptyCart));
            console.log('Local Data: ',localData);
			return emptyCart;
		}
		default:
			return cart;
	}
}
export default cartReducer;

// Old Cart Reducer
// const cartReducer = (state = initialState, action) => {
//     switch (action.type) {
//       // Add product to cart
//       case 'ADD_TO_CART': {
//         const localItems =
//           JSON.parse(localStorage.getItem('carts')) || state?.cartItems;
//         // console.log('cart reducer called', action?.payload);
//         // console.log('localItems', localItems);
  
//         const existingCart = [...localItems];
//         // console.log('existingCart', existingCart);
//         // console.log('current state', state.cartItems);
//         const coming = action.payload;
//         const itemExist = existingCart.find((item) => item.id === coming.id);
  
//         // console.log('itemExist', itemExist);
//         // console.log('current state', state.cartItems);
  
//         if (itemExist) {
//           // itemExist.cartQuantity = itemExist.cartQuantity + 1;
//           let itemIndex = existingCart.indexOf(itemExist);
//           existingCart[itemIndex].cartQuantity =
//             existingCart[itemIndex].cartQuantity + 1;
//           localStorage.setItem('carts', JSON.stringify(existingCart));
//           return existingCart;
//         } else {
//           action.payload.cartQuantity = 1;
//           const newCart = [...existingCart, action.payload];
//           localStorage.setItem('carts', JSON.stringify(newCart));
//           return newCart;
//         }
//       }
  
//       // Remove Product From Cart
//       case 'REMOVE_FROM_CART': {
//         let removingProductID = action.payload;
//         console.log('removingProductID ', removingProductID);
  
//         const localItems = JSON.parse(localStorage.getItem('carts'));
//         console.log('Local Items: ', localItems);
  
//         const filteredProducts = localItems.filter(
//           (product) => product.id !== removingProductID
//         );
//         console.log('filteredProducts: ', filteredProducts);
  
//         state = localStorage.setItem('carts', JSON.stringify(filteredProducts));
  
//         return state;
//       }
  
//       //Reset Cart
//       case 'RESET_CART': {
//         localStorage.setItem('carts', JSON.stringify([]));
//         let updatedCart = localStorage.getItem('carts');
//         //   state.cartItems = updatedCart;
//         return updatedCart;
//       }
  
//       // console.log("Product ID: ",action.payload)
//       // console.log("All Products: ",state.cartItems);
  
//       default:
//         return state;
//     }
//   };