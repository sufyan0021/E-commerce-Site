import { combineReducers } from 'redux';
import authReducer from './authReducer';
import productsReducer from './productsReducer';
import categoriesReducer from './categoriesReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    categories: categoriesReducer,
    products: productsReducer
});

export default rootReducer;