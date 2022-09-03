import axiosClient from "../utils/axiosClient";

export const getUsers = async () => {
  const { data } = await axiosClient.get("users");
  return data;
};
export const getUserById = async (id) => {
  const { data } = await axiosClient.get(`users/${id}`);
  return data;
};
export const deleteUserById = (id) => {
  return axiosClient.delete(`users/${id}`);
};
export const addUser = (user) => {
  return axiosClient.post(`users`, { ...user });
};
export const editUser = (user, id) => {
  return axiosClient.put(`users/${id}`, { ...user });
};