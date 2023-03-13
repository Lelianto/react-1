import { combineReducers } from "redux";
import { userReducer } from "src/store/reducers/userReducers";
import { productReducer } from "src/store/reducers/productReducers";

export default combineReducers({
  userReducer,
  productReducer,
});
