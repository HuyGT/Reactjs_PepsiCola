import { call, put, takeLatest, takeLeading } from "redux-saga/effects";
import { addUser, getUserById, getUsers } from "../../apis/userApi";
import { UserTypes } from "../../common/types";
import { actSetLoading } from "../actions/userAction";
function* fetchUsers(action) {
  yield put(actSetLoading());
  try {
    const users = yield call(getUsers);
    yield put({
      type: UserTypes.GET_USER_SUCCESS,
      payload: users,
    });
  } catch (e) {
    yield put({ message: e.message });
  }
}

function* fetchLogin(action) {
  yield put(actSetLoading());
  try {
    const user = yield call(getUsers,{email: action.payload.email});
    yield put({
      type: UserTypes.LOGIN_SUCCESS,
      payload: user[0],
    });
  } catch (e) {
    yield put({ message: e.message });
  }
}

function* fetchUserByFilter(action) {
  yield put(actSetLoading());
  try {
    const user = yield call(getUsers, {...action.payload});
    yield put({
      type: UserTypes.GET_USER_SUCCESS,
      payload: user,
    });
  } catch (e) {
    yield put({ message: e.message });
  }
}

function* fetchUserById(action) {
  yield put(actSetLoading());
  try {
    const user = yield call(getUserById, action.payload);
    yield put({
      type: UserTypes.GET_USER_BY_ID_SUCCESS,
      payload: user,
    });
  } catch (e) {
    yield put({ message: e.message });
  }
}

function* createUser(action) {
  yield put(actSetLoading());
  try {
    yield call(addUser, action.payload);
    yield put({ type: UserTypes.ADD_USER_SUCCESS });
  } catch (e) {
    yield put({ message: e.message });
  }
}

function* watchAllUser() {
  yield takeLeading(UserTypes.GET_All_USER, fetchUsers);
}

function* watchLogin() {
  yield takeLeading(UserTypes.LOGIN, fetchLogin);
}

function* watchUserByFilter() {
  yield takeLeading(UserTypes.GET_USER_BY_FILTER, fetchUserByFilter);
}

function* watchCreateUser() {
  yield takeLatest(UserTypes.ADD_USER, createUser);
}

function* watchDetailUser() {
  yield takeLeading(UserTypes.GET_USER_BY_ID, fetchUserById);
}

// eslint-disable-next-line import/no-anonymous-default-export
export default [
  watchAllUser(),
  watchCreateUser(),
  watchDetailUser(),
  watchUserByFilter(),
  watchLogin(),
];
