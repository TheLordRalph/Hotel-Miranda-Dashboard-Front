import { Navigate, Outlet } from "react-router-dom";


export const useAuth = () => {
    if (localStorage.getItem("login")) {
        return localStorage.getItem("login");
    }
};

const ProtectedRoutes = () => {

    const isAuth = useAuth();
    return isAuth ? <Outlet /> : <Navigate to="/" />;

};

export default ProtectedRoutes;
