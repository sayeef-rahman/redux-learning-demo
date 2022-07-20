//Action
export function addToCart(payload) {
  return {
    type: 'ADD_TO_CART',
    payload,
  };
}
export function removeFromCart(payload) {
  return {
    type: 'REMOVE_FROM_CART',
    payload,
  };
}
export function resetCartAction() {
  return {
    type: 'RESET_CART',
  };
}
