import React from "react";
import { Navigate, Outlet } from "react-router-dom";

import { authContext } from "../App";


export const useAuth = () => {
    const { state } = React.useContext(authContext);
    if (state.isAuthenticated) {
        return state.isAuthenticated;
    }
};

const ProtectedRoutes = () => {

    const isAuth = useAuth();
    return isAuth === true ? <Outlet /> : <Navigate to="/" />;

};

export default ProtectedRoutes;
