import { CartTypes } from "../../common/types";

export const actGetCart = () => ({
  type: CartTypes.GET_CART,
});

export const actAddToCart = (payload) => ({
  type: CartTypes.ADD_CART,
  payload: payload,
});

export const actRemoveCart = (payload) => ({
  type: CartTypes.REMOVE_CART,
  payload: payload,
});

export const actUpdateCart = (payload) => ({
  type: CartTypes.UPDATE_CART,
  payload: payload,
});

export const actClearCart = () => ({
  type: CartTypes.CLEAR_CART,
});
