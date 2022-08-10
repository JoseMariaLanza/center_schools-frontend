import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Layout from '../../presentation/pages/layouts/Layout'
import Home from '../../presentation/pages/Home'

const AppRouter = () => {
    return (
        <>
            <BrowserRouter>
                <Layout />
                <Routes>
                    {/* <Route path='/' element={<Layout />}> */}
                    <Route index element={<Home />} />
                    {/* </Route> */}
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default AppRouter