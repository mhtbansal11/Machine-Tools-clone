import { GET_PRODUCT_ERROR, GET_PRODUCT_REQUEST, GET_PRODUCT_SUCCESS } from "./actionType";

const initialState = {
    cartItem:[],
    isLoading:false,
    isError:false
}

export const reducer = (state=initialState,action) =>{
    const {type,payload} = action;
    switch(type){
        case GET_PRODUCT_REQUEST:
            return {...state,isLoading:true}

        case GET_PRODUCT_SUCCESS:
            return {...state,isLoading:false,cartItem:payload}

        case GET_PRODUCT_ERROR:
            return {...state,isLoading:false,isError:true}
        default:
            return state;
    }
}