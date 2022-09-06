import { all } from "@redux-saga/core/effects";
import brandSaga from "./brandSaga";
import productSaga from "./productSaga";
import userSaga from "./userSaga";

function* rootSaga() {
  yield all([...userSaga, ...brandSaga, ...productSaga]);
}

export default rootSaga;
