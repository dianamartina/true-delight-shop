import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import { cartReducer } from './reducers/cart';
import { userReducer } from './reducers/user';
import { wishlistReducer } from './reducers/wishlist';

function saveToLocalStorage(state) {
    try {
        const serializedState = JSON.stringify(state)
        localStorage.setItem('state', serializedState)
    } catch(e) {
        // console.log(e);
    }
}

function loadFromLocalStorage() {
    try {
        const serializedState = localStorage.getItem('state')
        if (serializedState === null) return undefined
        return JSON.parse(serializedState)
    } catch(e) {
        // console.log(e)
        return undefined
    }
}

const rootReducer = combineReducers({
    cart: cartReducer,
    user: userReducer,
    wishlist: wishlistReducer
})

const persistedState = loadFromLocalStorage();

// const store = createStore(rootReducer, applyMiddleware(thunk, logger));
const store = createStore(rootReducer, persistedState, applyMiddleware(thunk, logger));

store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;

// Middleware ne ajuta sa vedem in consola din browser etapele de modificare ale state-ul
