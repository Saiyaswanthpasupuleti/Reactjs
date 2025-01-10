
// Redux store setup

import { legacy_createStore } from "redux";
import { handleReducers } from "../Reducerss/SecondReducer";

// Creating the Redux store with the handleReducers
export const ResultedStore = legacy_createStore(handleReducers);
