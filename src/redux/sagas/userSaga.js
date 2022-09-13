import { call, put, takeLatest, takeLeading } from "redux-saga/effects";
import { addUser, getUserById, getUsers } from "../../apis/userApi";
import { UserTypes } from "../../common/types";
import {
  actAddUserFail,
  actAddUserSuccess,
  actGetUserByIdSuccess,
  actGetUserSuccess,
  actLoginFail,
  actLoginSuccess,
  actSetLoading,
} from "../actions/userAction";
function* fetchUsers(action) {
  yield put(actSetLoading());
  try {
    const users = yield call(getUsers);
    yield put(actGetUserSuccess(users));
  } catch (e) {
    yield put({ message: e.message });
  }
}

function* fetchLogin(action) {
  yield put(actSetLoading());
  try {
    const user = yield call(getUsers, {
      email: action.payload.email,
      password: action.payload.password,
    });

    if (user.length > 0) {
      yield put(actLoginSuccess(user[0]));
    } else if (user.length <= 0) {
      yield put(actLoginFail());
    }
  } catch (e) {
    yield put({ message: e.message });
  }
}

function* fetchUserByFilter(action) {
  yield put(actSetLoading());
  try {
    const user = yield call(getUsers, { ...action.payload });
    yield put(actGetUserSuccess(user));
  } catch (e) {
    yield put({ message: e.message });
  }
}

function* fetchUserById(action) {
  yield put(actSetLoading());
  try {
    const user = yield call(getUserById, action.payload);
    yield put(actGetUserByIdSuccess(user));
  } catch (e) {
    yield put({ message: e.message });
  }
}

function* fetchAddUser(action) {
  yield put(actSetLoading());
  try {
    const user = yield call(getUsers, { email: action.payload.email });
    if (user.length > 0) {
      yield put(actAddUserFail());
    } else if (user.length <= 0) {
      yield call(addUser, action.payload);
      yield put(actAddUserSuccess());
    }
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
  yield takeLatest(UserTypes.ADD_USER, fetchAddUser);
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
