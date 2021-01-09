export function addToCart(payload) {
    return {
        type: 'ADD_TO_CART',
        payload
    }
}

export function removeFromCart(payload) {
    return {
        type: 'REMOVE_FROM_CART',
        payload
    }
}

export function decrementProduct(payload) {
    return {
        type: 'DECREMENT_FROM_CART',
        payload
    }
}

