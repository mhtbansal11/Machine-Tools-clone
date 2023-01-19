import axios from "axios";
import { GET_PRODUCT_ERROR, GET_PRODUCT_REQUEST, GET_PRODUCT_SUCCESS } from "./actionType";

const getCartDataRequestAction = () =>{
    return {type:GET_PRODUCT_REQUEST}
}

const getCartDataSuccessAction = (payload) =>{
    return {type:GET_PRODUCT_SUCCESS,payload}
}

const getCartDataFailureAction = () =>{
    return {type:GET_PRODUCT_ERROR}
}

export const getCartData = () => (dispatch) =>{
dispatch(getCartDataRequestAction())

return axios.get(`https://zany-cyan-angelfish-tutu.cyclic.app/cart`).then((res)=>{dispatch(getCartDataSuccessAction(res.data))}).catch((err)=>{dispatch(getCartDataFailureAction())})
}