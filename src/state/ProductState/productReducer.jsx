import {ADD_TO_CART, ADD_TO_WISHLIST, FETCHING_ERROR, FETCHING_START, FETCHING_SUCCESS, PRICE_CALCULATION, REMOVE_FROM_CART} from './actionTypes'

export const initialState = {
    loading : false,
    products : [],
    error: false,
    cart : [],
    wishlist: [],
    cost : []
}

export const productReducer = (state, action) => {
    switch (action.type) {
        case FETCHING_START:
             return {
                ...state,
                loading: true,
                error: false
             };
        case FETCHING_SUCCESS:
            return {
                ...state,
                loading: false,
                products : action.payload,
                error: false
            };
        case FETCHING_ERROR:
            return {
                ...state,
                loading: false,
                error: true
            };
        case ADD_TO_CART:
            return {
                ...state,
                cart : [...state.cart, action.payload]
            };
        case REMOVE_FROM_CART: 
         return {
            ...state,
            cart : state.cart.filter((product) => product._id !== action.payload._id )
         };
        case ADD_TO_WISHLIST: 
         return {
            ...state,
            wishlist : [...state.wishlist, action.payload]
         };
        case PRICE_CALCULATION: 
         return {
            ...state,
            cost : [...state.cost, action.payload]
         };
        default:
            return state;
    }
}

