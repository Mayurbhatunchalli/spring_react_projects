import React from "react";
import { ADD_TO_CART } from "../constant";

export const addToCart = (item) => {
    return {
        type: ADD_TO_CART,
        data: item
    }
}

const removeFromCart = (item) => {
    return {
        type: 'REMOVE_FROM_CART',
        data: item
    }
}