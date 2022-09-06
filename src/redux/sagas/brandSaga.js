import { call, put, takeLeading } from "redux-saga/effects";
import { getBrands } from "../../apis/brandApi";
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

function* watchAllBrand() {
  yield takeLeading(BrandTypes.GET_All_BRAND, fetchBrands);
}

// eslint-disable-next-line import/no-anonymous-default-export
export default [watchAllBrand()];
