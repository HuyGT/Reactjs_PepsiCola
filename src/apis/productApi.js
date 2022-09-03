import axiosClient from "../utils/axiosClient";

export const getProducts = async (params) => {
  const { data } = await axiosClient.get("products", {
    params: params,
  });
  return data;
};

export const getProductById = async (id) => {
  const { data } = await axiosClient.get(`products/${id}`);
  return data;
};

export const deleteProductById = (id) => {
  return axiosClient.delete(`products/${id}`);
};
export const addProduct = (product) => {
  return axiosClient.post(`products`, { ...product });
};
export const editProduct = (product, id) => {
  return axiosClient.put(`products/${id}`, { ...product });
};