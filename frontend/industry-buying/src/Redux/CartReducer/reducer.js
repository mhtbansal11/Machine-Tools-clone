import { GET_PRODUCT_ERROR, GET_PRODUCT_REQUEST, GET_PRODUCT_SUCCESS, UPDATE_PRODUCT_SUCCESS } from "./actionType";

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

        case UPDATE_PRODUCT_SUCCESS:
            {
                const updateCartQuantity = state.cartItem.map((cart) =>
                {
                    if(cart.id === payload.id)
                    {
                        cart.quantity = payload.quantity
                    }
                    return cart
                })
                return {...state,cartItem:updateCartQuantity}
            }
            
        default:
            return state;
    }
}