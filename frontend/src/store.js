import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducers from "./components/redux/reducers/main";
const middleware = [thunk];
const store = createStore(
  rootReducers,
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;
//now import in index.js and provide stor value and get data in diff diff components
