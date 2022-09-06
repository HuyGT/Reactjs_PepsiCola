import { combineReducers } from "redux";
import userReducer from "./userReducer";
import brandReducer from "./brandReducer";
import productReducer from "./productReducer";

const rootReducer = combineReducers({ userReducer, brandReducer, productReducer });

export default rootReducer;
