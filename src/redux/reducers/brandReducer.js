import { BrandTypes } from "../../common/types";

const initialValue = {
  isLoading: false,
  listBrand: [],
};

const brandReducer = (state = initialValue, action) => {
  switch (action.type) {
    case BrandTypes.GET_BRAND_SUCCESS: {
      return { ...state, listBrand: action.payload, isLoading: false };
    }
    case BrandTypes.SET_LOADING: {
      return { ...state, isLoading: true };
    }
    default:
      return state;
  }
};

export default brandReducer;
