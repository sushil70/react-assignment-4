import {ADD_TO_CART} from "./type"

const initialState = {
    testdata: "this is redex test",
}

export const reduce = (state = initialState, {type, payload}) => {
    switch (type) {
        case ADD_TO_CART:
            return {...state, testdata: "this is redex test after clicked"}

        default:
            return state
    }
}
