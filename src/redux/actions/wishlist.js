export function addToWishlist(payload) {
    return {
        type: 'ADD_TO_WISHLIST',
        payload
    }
}

export function removeFromWishlist(payload) {
    return {
        type: 'REMOVE_FROM_WISHLIST',
        payload
    }
}

export function toggleWishlist(payload) {
    return {
        type: 'TOGGLE_WISHLIST',
        payload
    }
}
