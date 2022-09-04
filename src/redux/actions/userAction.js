import { UserTypes } from "../../common/types";

export const actGetAllUser = () => ({
  type: UserTypes.GET_All_USER,
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
