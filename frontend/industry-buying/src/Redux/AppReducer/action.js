import * as types from "./actionType"
import axios from "axios"


// get function -

export const getProductData = (param) => (dispatch)=> //param
{
    dispatch({type: types.GET_PRODUCT_REQUEST})
    return axios
        .get(`https://zany-cyan-angelfish-tutu.cyclic.app/grain_Processing_Machine`,param) //param


        .then(res=>{
            dispatch({type: types.GET_PRODUCT_SUCCESS, payload: res.data})
           
            console.log(res.data)
        })
        .catch(err=>dispatch({type: types.GET_PRODUCT_ERROR}))
}



// add bag function -
export const addProductData = (payload)=> (dispatch)=>
{
    dispatch({type: types.ADD_PRODUCT_REQUEST})
    return axios
        .post(`https://zany-cyan-angelfish-tutu.cyclic.app/cart`,JSON.stringify(payload),{
            headers: { 'Content-Type': 'application/json' },
          })
        .then(res=>{
            dispatch({type: types.ADD_PRODUCT_SUCCESS, payload: res.data})
           console.log(res.data)
        })
        .catch(err=>dispatch({type: types.ADD_PRODUCT_ERROR}))
}

// ------------Sidebar saction-------------
