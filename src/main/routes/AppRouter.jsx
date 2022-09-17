import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Layout from '../../presentation/pages/layouts/Layout';
// import App from '../../App';
import DashBoard from '../../presentation/pages/DashBoard';
import { useSelector } from 'react-redux';
import Home from '../../presentation/pages/Home';


const AppRouter = () => {
    const { isLoggedIn } = useSelector(state => state.auth);

    return (
        <>
            <BrowserRouter>
                <Layout />
                <Routes>
                    <Route index element={<Home />} />
                </Routes>
                <Routes>
                    <Route path='dashboard' element={
                        <ProtectedRoute isLoggedIn={isLoggedIn} isAllowed={true} >
                            <DashBoard />
                        </ProtectedRoute>
                    }>
                    </Route>
                    <Route path='logout' element={
                        <ProtectedRoute isLoggedIn={isLoggedIn} />
                    }>
                    </Route>
                    {/* <Route path='*' element={<NotFoundPage />} /> */}
                </Routes>
            </BrowserRouter>
        </>
    )
}

const ProtectedRoute = ({ isLoggedIn, isAllowed, redirectPath = '/', children }) => {
    if (!isLoggedIn || !isAllowed) {
        return <Navigate to={redirectPath} replace />;
    }

    return children;
};


export default AppRouter