import ResponsiveAppBar from '../../components/ResponsiveAppBar'
import React from 'react'

const Layout = ({ children }) => {
    return (
        <>
            <ResponsiveAppBar />
            <main>
                {children}
            </main>
        </>
    )
}

export default Layout