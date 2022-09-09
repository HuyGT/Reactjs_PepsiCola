import { all } from "@redux-saga/core/effects";
import brandSaga from "./brandSaga";
import orderSaga from "./orderSaga";
import productSaga from "./productSaga";
import userSaga from "./userSaga";

function* rootSaga() {
  yield all([...userSaga, ...brandSaga, ...productSaga, ...orderSaga]);
}

export default rootSaga;
