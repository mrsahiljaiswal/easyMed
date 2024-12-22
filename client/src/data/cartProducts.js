let cartProducts = [];

export const addToCart = (product) => {
  cartProducts.push(product);
};

export const removeFromCart = (productId) => {
  cartProducts = cartProducts.filter((product) => product.id !== productId);
};

export const clearCart = () => {
  cartProducts = [];
};

export const getCartProducts = () => {
  return cartProducts;
};

export default cartProducts;
