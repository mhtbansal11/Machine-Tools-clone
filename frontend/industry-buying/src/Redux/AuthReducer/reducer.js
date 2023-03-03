import * as types from "./actionType"

const initialState={
    isAuth:false,
    token:'',
    isAuthLoading:false,
    isAuthError:false,
}
const reducer=(state=initialState,action)=>{
    const{type,payload}=action;
    switch(type){
        case types.USER_LOGIN_REQUESS:
        return{...state,isAuthLoading:true}

        case types.USER_LOGIN_SUCCESS:
            return{...state,isAuthLoading:false,isAuthError:false}

            case types.USER_LOGIN_ERROR:
                return{...state,isAuthLoading:false,isAuthError:true}

                default:
                    return state;  
    }
}

export {reducer}