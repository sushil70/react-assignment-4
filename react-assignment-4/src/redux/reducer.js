import {ADD_TO_CART} from "./type"

const initialState = {
    testdata: 0,
}

export const reduce = (state = initialState, {type, payload}) => {
    switch (type) {
        case ADD_TO_CART:
            return {...state, testdata: state.testdata + 1}

        default:
            return state
    }
}
