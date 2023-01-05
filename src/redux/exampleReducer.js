import { EXAMPLE_TYPE } from "./types";

export const exampleReducer = (state = [], action) => {
    switch (action.type) {
        case EXAMPLE_TYPE:
            return [...state];
        default:
            return state;
    }
};
