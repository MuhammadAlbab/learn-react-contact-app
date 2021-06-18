import { combineReducers } from "redux";
import contactReducer from "./contactReducer";

const reducers = combineReducers({
  allContacts: contactReducer,
});

export default reducers;
