import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Cursor } from './'
import { Header } from './'

const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <title>Sam's Codex</title>
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta property="og:site_name" content="Sam's Codex"/>
                <meta property="og:title" content="Sam's Codex"/>
                <meta property="og:type" content="website"/>
                <meta name="description" content="Howdy, I'm Samuel! Full stack developer, specializing in frontend technologies." />
            </Head>
            <Cursor />
            <Header />
            {children}   
        </>
    )
}

export default Layout
