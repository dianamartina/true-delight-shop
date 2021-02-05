import { WishlistActionTypes } from './WishlistTypes';

const initialState = {
    products: []
  }

  export function wishlistReducer(state = initialState, action) {
  
    switch (action.type) {
        
        case WishlistActionTypes.ADD_TO_WISHLIST:
            return {
                ...state, products: [...state.products, action.payload] 
            }

          case WishlistActionTypes.REMOVE_FROM_WISHLIST:
              return {
                  ...state, products: state.products.filter(product=> product.id !== action.payload.id)
              }
              
          default:
              return state;
          }
  }