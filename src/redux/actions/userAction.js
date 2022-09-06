import { UserTypes } from "../../common/types";

export const actLogin = (user) => ({
  type: UserTypes.LOGIN,
  payload: user,
});

export const actLoginSuccess = (user) => ({
  type: UserTypes.GET_USER_SUCCESS,
  payload: user,
});

export const actLogout = () => ({
  type: UserTypes.LOGOUT,
});

export const actGetAllUser = () => ({
  type: UserTypes.GET_All_USER,
});

export const actGetUserByFilter = (payload) => ({
  type: UserTypes.GET_USER_BY_FILTER,
  payload: payload,
});

export const actAddUser = (user) => ({
  type: UserTypes.ADD_USER,
  payload: user,
});

export const actAddUserSuccess = () => ({
  type: UserTypes.ADD_USER_SUCCESS,
});

export const actGetUserById = (id) => ({
  type: UserTypes.GET_USER_BY_ID,
  payload: id,
});

export const actGetUserSuccess = (payload) => ({
  type: UserTypes.GET_USER_SUCCESS,
  payload: payload,
});

export const actGetUserByIdSuccess = (payload) => ({
  type: UserTypes.GET_USER_BY_ID_SUCCESS,
  payload: payload,
});

export const actSetLoading = () => ({
  type: UserTypes.SET_LOADING,
});
