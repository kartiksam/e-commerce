import { getProductReducer } from "./Productsreducer";
import { combineReducers } from "redux";
const rootReducers = combineReducers({
  getProductsData: getProductReducer,
});
export default rootReducers;
