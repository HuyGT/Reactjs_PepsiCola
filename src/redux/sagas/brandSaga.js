import { call, put, takeLeading } from "redux-saga/effects";
import { getBrandById, getBrands } from "../../apis/brandApi";
import { BrandTypes } from "../../common/types";
import { actSetLoading } from "../actions/brandAction";
function* fetchBrands() {
  yield put(actSetLoading());
  try {
    const brands = yield call(getBrands);
    yield put({
      type: BrandTypes.GET_BRAND_SUCCESS,
      payload: brands,
    });
  } catch (e) {
    yield put({ message: e.message });
  }
}

function* fetchBrandById(action) {
  yield put(actSetLoading());
  try {
    const brandDetail = yield call(getBrandById, action.payload);
    yield put({ type: BrandTypes.GET_BRAND_BY_ID_SUCCESS, brandDetail });
  } catch (e) {
    yield put({ message: e.message });
  }
}

function* watchAllBrand() {
  yield takeLeading(BrandTypes.GET_All_BRAND, fetchBrands);
}

function* watchBrandById() {
  yield takeLeading(BrandTypes.GET_BRAND_BY_ID, fetchBrandById);
}

// eslint-disable-next-line import/no-anonymous-default-export
export default [watchAllBrand(), watchBrandById()];
