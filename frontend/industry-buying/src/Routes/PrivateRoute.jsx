
import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"



const PrivateRoute=({Children})=>{
    const isAuth=useSelector(store=>store.AuthReducer.isAuth)

    if(!isAuth){
return <Navigate to="/login" />
    }

    return Children;
}

export default PrivateRoute;