import React from 'react'
import { Header } from '../Header/Header.tsx'
import { Outlet } from 'react-router'

export const MainLayout = () => {
    return (
        <div className="wrapper">
            <Header/>
            <div className="content">
                <Outlet />
            </div>
            </div>

    )
}