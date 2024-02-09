import { useSelector } from "react-redux"
import { Outlet, Navigate, useLocation } from "react-router-dom"

const RequireAuth = () => {
    const location = useLocation()
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)
    return (isLoggedIn ? <Outlet /> : <Navigate to="/login" replace state={{path: location.pathname}}/>)
        
    
}
export default RequireAuth