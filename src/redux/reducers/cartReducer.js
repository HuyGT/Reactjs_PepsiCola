import { CartTypes } from "../../common/types";

const initialValue = {
  cart: [],
  cartLength: 0,
};

const cartReducer = (state = initialValue, action) => {
  switch (action.type) {
    case CartTypes.GET_CART: {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      return { cart: cart, cartLength: cart.length };
    }
    case CartTypes.ADD_CART: {
      const product = action.payload;
      const cartQuantity = product.cartQuantity;
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      const indexProduct = cart.findIndex((cart) => cart.id === product.id);
      if (indexProduct !== -1) {
        cart[indexProduct].cartQuantity += cartQuantity;
        if (cart[indexProduct].cartQuantity === 0) {
          cart[indexProduct].cartQuantity = 1;
        }
      } else {
        cart.push({ ...product, cartQuantity: cartQuantity });
      }
      localStorage.setItem("cart", JSON.stringify(cart));

      return { cart: cart, cartLength: cart.length };
    }
    case CartTypes.REMOVE_CART: {
      const product = action.payload;
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      const newCart = [...cart.filter((item) => item.id !== product.id)];
      localStorage.setItem("cart", JSON.stringify(newCart));
      return { cart: newCart, cartLength: cart.length };
    }
    case CartTypes.CLEAR_CART: {
      localStorage.removeItem("cart");
      return { ...state };
    }

    default:
      return state;
  }
};

export default cartReducer;
