import {ADD_TO_CART} from "./type"

export const addCart = (payload) => ({
    type: ADD_TO_CART,
    payload,
})
