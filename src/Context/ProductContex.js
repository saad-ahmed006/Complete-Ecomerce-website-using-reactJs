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
        isSingleLoading: false,
        isSingleError: false,
        singleProduct: {}
    }
    const [state, dispatch] = useReducer(reducer, initialState)
    const getProducts = async (url) => {
        try {
            const res = await axios.get(url)
            const product = await res.data
            dispatch({ type: "SET_API_DATA", payload: product })
        } catch (error) {
            dispatch({ type: "API_ERROR " })
        }
    }

    const getSingleProduct = async (url) => {
        try {
            const res = await axios.get(url)
            const SingleProduct = await res.data
            dispatch({ type: "SET_SINGLE_PRODUCT", payload: SingleProduct })
        } catch (error) {
            dispatch({ type: "SINGLE_ERROR " })

        }
    }
    useEffect(() => {
        dispatch({ type: "SET_LOADING" })
        dispatch({ type: "SET_SINGLE_LOADING" })
        getProducts(API);

    }, []);

    return (<AppContext.Provider value={{ ...state, getSingleProduct }}>{children}</AppContext.Provider>)
}




const GlobleUseContext = () => {
    return useContext(AppContext)
}
export { AppProvider, AppContext, GlobleUseContext }