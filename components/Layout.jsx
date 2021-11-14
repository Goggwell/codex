import React from 'react'
import { Cursor } from './'
import { Header } from './'

const Layout = ({ children }) => {
    return (
        <>
            <Cursor />
            <Header />
            {children}   
        </>
    )
}

export default Layout
