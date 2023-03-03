import axios from "axios";
import * as types from "./actionType"


const login=(payload)=> dispatch=>{
    dispatch({type:types.USER_LOGIN_REQUESS});
    return axios.post('https://reqres.in/api/login')
}

export default login;