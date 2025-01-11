import { legacy_createStore } from "redux";
import { resultReducer } from "../Reducerss/FirstReducer";
export const resultStore=legacy_createStore(resultReducer)