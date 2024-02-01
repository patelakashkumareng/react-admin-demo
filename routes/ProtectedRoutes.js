import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
const ProtectedRoutes = () => {
    const navigate = useNavigate()
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)
    return 
        isLoggedIn ? () : <Navigate to="/login" />
    
}
export default ProtectedRoutes