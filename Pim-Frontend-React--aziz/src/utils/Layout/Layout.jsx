import { Toolbar } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'
import NavBar from '../../components/NavBar/NavBar'
import './Layout.css'

const Layout = () => {
    return (
        <div className='layout'>
            <NavBar />
            <div className='main'>
                <Toolbar />
                <Outlet />
                <Footer color={'#ffffff'} background={'#d19240'} />

            </div>

        </div>
    )
}

export default Layout