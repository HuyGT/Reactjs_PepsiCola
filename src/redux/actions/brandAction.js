import { BrandTypes } from "../../common/types";

export const actGetAllBrand = () => ({
  type: BrandTypes.GET_All_BRAND,
});


export const actGetBrandSuccess = (payload) => ({
  type: BrandTypes.GET_BRAND_SUCCESS,
  payload: payload,
});

export const actGetBrandById = (payload) => ({
  type: BrandTypes.GET_BRAND_BY_ID,
  payload: payload,
});

export const actGetBrandByIdSuccess = (payload) => ({
  type: BrandTypes.GET_BRAND_BY_ID_SUCCESS,
  payload: payload,
});

export const actSetLoading = () => ({
  type: BrandTypes.SET_LOADING,
});
