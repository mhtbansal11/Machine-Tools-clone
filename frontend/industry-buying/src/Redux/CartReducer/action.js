import { updateappicart } from "./api";
import {
    CART_LOADING,
    CART_ERROR,
    ADD_TO_CART,
    REMOVE_FROM_CART,
    GET_CART,
    UPDATE_CART
  } from "./actionType";
  import { AddToCartApi, DelCartItemApi, GetCartDataApi } from "./api";
  
  export const addToCart = (el) => async (dispatch) => {
    dispatch({ type: CART_LOADING });
    let data = await AddToCartApi(el);
    dispatch({ type: ADD_TO_CART, payload: el });
  };
  
  export const removeToCart = (id) => async (dispatch) => {
    let data = await DelCartItemApi(id);
    dispatch({ type: REMOVE_FROM_CART, payload: id });
  };
  
  export const getCartItem = () => async (dispatch) => {
    dispatch({ type: CART_LOADING });
    let data = await GetCartDataApi();
    dispatch({ type: GET_CART, payload: data });
  };
  export const updateCart=(id,el)=>async (dispatch)=>{
    let data = await updateappicart(id,el);
    dispatch({type:UPDATE_CART,payload:{id,ele:el}})
  }