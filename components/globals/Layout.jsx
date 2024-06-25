import React from 'react'
import Navbar from './Navbar'
import { Inter } from 'next/font/google'
import TwoColumnFooter from './Footer'
const inter = Inter({ subsets: ["latin"] })

export default function Layout({ children }) {
    return (
        <>
            <Navbar />
            <main className="w-full pt-16 ">{children}</main>
            <TwoColumnFooter  />
        </>
    )
}
