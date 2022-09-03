import axiosClient from "../utils/axiosClient";

export const getBrands = async (params) => {
  const { data } = await axiosClient.get("brands", {
    params: params,
  });
  return data;
};

export const getBrandById = async (id) => {
  const { data } = await axiosClient.get(`brands/${id}`);
  return data;
};

export const deleteBrandById = (id) => {
  return axiosClient.delete(`brands/${id}`);
};
export const addBrand = (brand) => {
  return axiosClient.post(`brands`, { ...brand });
};
export const editBrand = (brand, id) => {
  return axiosClient.put(`brands/${id}`, { ...brand });
};