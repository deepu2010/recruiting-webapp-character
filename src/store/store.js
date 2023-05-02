import { combineReducers, createStore } from "redux";
import attributeReducers from "../reducers/attributeReducers";
import modalReducers from "../reducers/modalReducers";

const rootReducer = combineReducers({
  attributes: attributeReducers,
  modal: modalReducers,
});
const store = createStore(rootReducer);

export default store;
