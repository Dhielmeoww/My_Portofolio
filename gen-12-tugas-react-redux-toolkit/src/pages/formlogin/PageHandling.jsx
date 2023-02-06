import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"
import AdminPage from "./AdminPage"

function PageHandling () {
    const { username } = useSelector(state => state.user)
    
    if(!username) {
        return <Navigate to="/Login" />
    } else {
        return <AdminPage />
    }
    
}

export default PageHandling