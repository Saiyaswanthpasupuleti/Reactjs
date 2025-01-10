import { legacy_createStore } from "redux";
import { CounterReducers } from "../Reducerss/FirstReducer";
export const mainstore=legacy_createStore(CounterReducers)