import { combineReducers } from "redux";
import perawiReducer from "./Perawi/reducer";

const reducers = combineReducers({
    perawi: perawiReducer
})

export default reducers;