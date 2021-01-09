const initialState = {
    products: []
  }

  export function wishlistReducer(state = initialState, action) {
  
    switch (action.type) {
        
        case 'ADD_TO_WISHLIST':
            return {
                ...state, products: [...state.products, action.payload] 
            }

          case 'REMOVE_FROM_WISHLIST':
              return {
                  ...state, products: state.products.filter(product=> product.id !== action.payload.id)
              }

            // case 'TOGGLE_WISHLIST':

            // const existingWishItem = state.products.find(
            //     product => product.id === action.payload.id
            //     );
            // // console.log("existingCartItem", existingCartItem);

            //     if (existingWishItem) {
            //         return {
            //             ...state, products: state.products.filter(product=> product.id !== action.payload.id), value: 'noWishlist'
            //         }
            //     } else {
            //         return {
            //             ...state, products: [...state.products, action.payload], value: 'inWishlist'
            //         } 
            //     }

          default:
              return state;
          }
  }