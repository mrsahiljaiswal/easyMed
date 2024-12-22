let cartHistory = [];

export const addToCartHistory = (order) => {
  cartHistory.push(order);
};

export const getCartHistory = () => {
  return cartHistory;
};

export default cartHistory;
