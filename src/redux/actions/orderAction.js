import { OrderTypes } from "../../common/types";

export const actGetAllOrder = () => ({
  type: OrderTypes.GET_All_ORDER,
});

export const actGetOrderById = (id) => ({
  type: OrderTypes.GET_ORDER_BY_ID,
  payload: id,
});
export const actGetOrderByFilter = (payload) => ({
  type: OrderTypes.GET_ORDER_BY_FILTER,
  payload: payload,
});


export const actGetOrderSuccess = (payload) => ({
  type: OrderTypes.GET_ORDER_SUCCESS,
  payload: payload,
});

export const actGetOrderByIdSuccess = (payload) => ({
  type: OrderTypes.GET_ORDER_BY_ID_SUCCESS,
  payload: payload,
});

export const actSetLoading = () => ({
  type: OrderTypes.SET_LOADING,
});


