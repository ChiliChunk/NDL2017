// combine all reducers to give to the store if needed
import {combineReducers} from "redux";
import appReducers from "./appReducers";

const allReducers = combineReducers ({
  appReducers : appReducers
});

export default allReducers;
