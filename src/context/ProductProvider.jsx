import axios from 'axios';
import React, { createContext, useContext, useEffect, useReducer, useState } from 'react';
import { FETCHING_ERROR, FETCHING_START, FETCHING_SUCCESS } from '../state/ProductState/actionTypes';
import { initialState, productReducer } from '../state/ProductState/productReducer';

const PRODUCT_CONTEXT = createContext()

const ProductProvider = ({children}) => {

  const [state, dispatch] = useReducer(productReducer, initialState);
   useEffect( () => {
     dispatch({type: FETCHING_START})
          axios.get('https://manufecture-website-server.onrender.com/products')
          .then( res=> dispatch({type: FETCHING_SUCCESS, payload: res.data}))
          .catch(dispatch({type: FETCHING_ERROR}))
   }, [])

//    console.log(state)

  const value = {
     state,
     dispatch,
  }
    return (
        <PRODUCT_CONTEXT.Provider value={value}>
            {children}
        </PRODUCT_CONTEXT.Provider>
    );
};

export const useProducts = () => {
    const context = useContext(PRODUCT_CONTEXT)
    return context;
}

export default ProductProvider;