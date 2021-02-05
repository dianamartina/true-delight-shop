import { WishlistActionTypes } from './WishlistTypes';

export function addToWishlist(payload) {
    return {
        type: WishlistActionTypes.ADD_TO_WISHLIST,
        payload
    }
}

export function removeFromWishlist(payload) {
    return {
        type: WishlistActionTypes.REMOVE_FROM_WISHLIST,
        payload
    }
}
