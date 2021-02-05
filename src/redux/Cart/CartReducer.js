
import { CartActionTypes } from './CartTypes';

const initialState = {
  products: []
}

export function cartReducer(state = initialState, action) {
  
  switch (action.type) {
      
      case CartActionTypes.ADD_TO_CART:

        const existingCartItem = state.products.find(
            product => product.id === action.payload.id
          );
        // console.log("existingCartItem", existingCartItem);

          if (existingCartItem) {
            const updateProduct = state.products.map(product =>
                product.id === action.payload.id
                ? { ...product, quantity: product.quantity + 1} 
                :  product
            );
            // console.log("updateProduct", updateProduct);

            return {
                ...state, products: updateProduct
            }
            
          } else {

            return {
                ...state, products: [...state.products,{ ...action.payload, quantity: 1 }]
            }
          }

        case CartActionTypes.REMOVE_FROM_CART:
            return {
                ...state, products: state.products.filter(product=> product.id !== action.payload.id)
            }

        case CartActionTypes.DECREMENT_FROM_CART:

        const existingCartItemD = state.products.find(
            product => product.id === action.payload.id
            );
        // console.log("existingCartItem", existingCartItem);

            if (existingCartItemD.quantity === 1) {
                return {
                    ...state, products: state.products.filter(product=> product.id !== action.payload.id)
                }                    
            } else {
                const updateProductD = state.products.map(product =>
                    product.id === action.payload.id
                    ? { ...product, quantity: product.quantity - 1} 
                    :  product
                );

                return {
                    ...state, products: updateProductD
                }
            }
        default:
            return state;
        }
}