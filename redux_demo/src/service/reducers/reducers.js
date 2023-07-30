import { responsivePropType } from "react-bootstrap/esm/createUtilityClasses"
import { ADD_TO_CART } from "../constant"

const initialState = {
    cartItem: []
}

function cartItems(state = initialState, action) {

    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                cartItem: action.cartItem
            }
        default:
            return state
    }
}

export default cartItems;