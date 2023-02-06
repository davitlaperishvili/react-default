import { combineReducers } from "redux";
import { exampleReducer } from "./exampleReducer";
export const rootReducer: any = combineReducers({
    example: exampleReducer,
});
