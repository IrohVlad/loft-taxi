import { createStore, combineReducers, applyMiddleware } from 'redux';
import { AuthReducer } from './AuthReducer';
import { CardReducer } from './CardReducer';
import { authMiddleware } from './authMiddleware';

export const store = createStore(combineReducers({auth: AuthReducer, card: CardReducer}), applyMiddleware(authMiddleware));