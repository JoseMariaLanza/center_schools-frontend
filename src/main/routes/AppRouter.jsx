// import Home from '../../presentation/pages/Home'
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import App from '../../App'
import Layout from '../../presentation/pages/layouts/Layout'


const AppRouter = () => {
    return (
        <>
            <BrowserRouter>
                <Layout />
                <Routes>
                    {/* <Route path='/' element={<Layout />}> */}
                    <Route index element={<App />} />
                    {/* </Route> */}
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default AppRouter