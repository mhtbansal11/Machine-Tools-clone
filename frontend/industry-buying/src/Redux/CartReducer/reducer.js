import {
    CART_LOADING,
    CART_ERROR,
    ADD_TO_CART,
    REMOVE_FROM_CART,
    GET_CART,
    UPDATE_CART
  } from "./actionType";
  
  const initialState = {
    loading: "false",
    error: "false",
    cart: [],
  };
  
  export const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case CART_LOADING: {
        return {
          ...state,
          loading: true,
        };
      }
  
      case CART_ERROR: {
        return {
          ...state,
          loading: false,
          error: true,
        };
      }
      case ADD_TO_CART: {
        return {
          ...state,
          loading: false,
          cart: [...state.cart, payload],
        };
      }
      case REMOVE_FROM_CART: {
        const updatedCart = state.cart.filter((el) => el.id !== payload);
        return {
          ...state,
          loading: false,
          cart: updatedCart,
        };
      }
      case GET_CART: {
        return {
          ...state,
          cart: payload,
        };
      }
      case UPDATE_CART:{
        let data=state.map((el)=>(el.id===payload.id?{...payload.ele}:el))
        return{
            ...state,
            cart:data
        }
      }
      default: {
        return state;
      }
    }
  };
  