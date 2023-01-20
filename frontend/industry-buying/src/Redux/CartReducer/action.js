import axios from "axios";
import { GET_PRODUCT_ERROR, GET_PRODUCT_REQUEST, GET_PRODUCT_SUCCESS, UPDATE_PRODUCT_SUCCESS } from "./actionType";

const getCartDataRequestAction = () =>{
    return {type:GET_PRODUCT_REQUEST}
}

const getCartDataSuccessAction = (payload) =>{
    return {type:GET_PRODUCT_SUCCESS,payload}
}

const getCartDataFailureAction = () =>{
    return {type:GET_PRODUCT_ERROR}
}

const updateCartDataSuccess = (payload) =>{
    return {type:UPDATE_PRODUCT_SUCCESS,payload}   
}


// ************************API REQUEST**************************


export const getCartData = () => (dispatch) =>{
dispatch(getCartDataRequestAction())

return axios.get(`https://zany-cyan-angelfish-tutu.cyclic.app/cart`).then((res)=>{dispatch(getCartDataSuccessAction(res.data))}).catch((err)=>{dispatch(getCartDataFailureAction())})
}




export const updateCartData = (id,quantity) => async(dispatch) =>{
//   return axios.patch(`https://zany-cyan-angelfish-tutu.cyclic.app/cart/${id}`,quantity).then((res)=>{dispatch(updateCartDataSuccess(res.data))})

// let data = await axios
try{
let data= await axios.patch(`https://zany-cyan-angelfish-tutu.cyclic.app/cart/${id}`,{...quantity})
dispatch(getCartData())
console.log(data);
return data;
}
catch(er){
console.log(er)
}


}


//