import { UserTypes } from "../../common/types";

const initialValue = {
  isLoading: false,
  listUser: [],
  detailUser: {},
  login: false,
  register: false,
  stateLogin: "",
  stateRegister: "",
};

const userReducer = (state = initialValue, action) => {
  switch (action.type) {
    case UserTypes.GET_USER_SUCCESS: {
      return { ...state, listUser: action.payload, isLoading: false };
    }
    case UserTypes.GET_USER_BY_ID_SUCCESS: {
      return { ...state, isLoading: false, detailUser: action.payload };
    }
    case UserTypes.ADD_USER_SUCCESS: {
      return { isLoading: false, stateRegister: "success", register: true };
    }
    case UserTypes.ADD_USER_FAIL: {
      return { isLoading: false, stateRegister: "fail", register: false  };
    }
    case UserTypes.LOGIN_SUCCESS: {
      localStorage.setItem("Account", JSON.stringify(action.payload));
      return { isLoading: false, login: true, stateLogin: "success" };
    }
    case UserTypes.LOGIN_FAIL: {
      return { ...state, isLoading: false, stateLogin: "fail" };
    }
    case UserTypes.LOGOUT: {
      localStorage.removeItem("Account");
      return { isLoading: false };
    }
    case UserTypes.SET_LOADING: {
      return { ...state, isLoading: true};
    }
    default:
      return state;
  }
};

export default userReducer;
