import { BrandTypes } from "../../common/types";

const initialValue = {
  isLoading: false,
  listBrand: [],
  brand: {},
};

const brandReducer = (state = initialValue, action) => {
  switch (action.type) {
    case BrandTypes.GET_BRAND_SUCCESS: {
      return { ...state, listBrand: action.payload, isLoading: false };
    }
    case BrandTypes.GET_BRAND_BY_ID_SUCCESS: {
      return {
        ...state,
        brand: action.brandDetail,
        isLoading: false,
      };
    }
    case BrandTypes.SET_LOADING: {
      return { ...state, isLoading: true };
    }
    default:
      return state;
  }
};

export default brandReducer;
