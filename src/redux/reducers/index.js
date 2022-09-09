import { combineReducers } from "redux";
import userReducer from "./userReducer";
import brandReducer from "./brandReducer";
import productReducer from "./productReducer";
import cartReducer from "./cartReducer";
import orderReducer from "./orderReducer";

const rootReducer = combineReducers({
  userReducer,
  brandReducer,
  productReducer,
  cartReducer,
  orderReducer,
});

export default rootReducer;
