import { CartActionTypes } from './CartTypes';

export function addToCart(payload) {
    return {
        type: CartActionTypes.ADD_TO_CART,
        payload
    }
}

export function removeFromCart(payload) {
    return {
        type: CartActionTypes.REMOVE_FROM_CART,
        payload
    }
}

export function decrementProduct(payload) {
    return {
        type: CartActionTypes.DECREMENT_FROM_CART,
        payload
    }
}

