import axios from 'axios'
import React, { createContext, useContext, useReducer, useEffect } from 'react'
import reducer from '../../src/Reducer/ProductReducer'
const AppContext = createContext()
const API = "https://api.pujakaitem.com/api/products"

const AppProvider = ({ children }) => {
    const initialState = {
        isLoding: false,
        isError: false,
        product: [],
        featureProducts: [],
    }
    const [state, dispatch] = useReducer(reducer, initialState)
 

    const getProducts = async (url) => {
        try {
            const res = await axios.get(url)
            const product = await res.data
            dispatch({ type: "SET_API_DATA", payload: product })
        } catch (error) {
dispatch({type:"API_ERROR "})
        }

    }
    useEffect(() => {
        dispatch({type:"SET_LOADING"})
        getProducts(API);

      }, []);

    return (<AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>)
}




const GlobleUseContext = () => {
    return useContext(AppContext)
}
export { AppProvider, AppContext, GlobleUseContext }