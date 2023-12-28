import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { expanseReducer } from "../reducers/expenses";

const rootReducer = combineReducers({
   expanse: expanseReducer,
})

const initialState = {}

const store = configureStore({
   reducer: rootReducer
}, initialState)

export default store