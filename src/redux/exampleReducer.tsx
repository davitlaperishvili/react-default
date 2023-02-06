import { EXAMPLE_TYPE } from "./types";

interface actionType{
  type: string;
  payload? : any
}
export const exampleReducer = (state = [], action: actionType) => {
    switch (action.type) {
        case EXAMPLE_TYPE:
            return [...state];
        default:
            return state;
    }
};
