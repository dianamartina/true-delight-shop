import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import { cartReducer } from './reducers/cart';

const middlewares = [logger];
const store = createStore(cartReducer, applyMiddleware(...middlewares));

export default store;

// Middleware ne ajuta sa vedem in consola din browser etapele de modificare ale state-ul
