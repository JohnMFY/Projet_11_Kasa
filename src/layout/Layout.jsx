import React from 'react'
import { Outlet } from 'react-router-dom';
import Nav from '../components/Nav.jsx';
import Footer from '../components/Footer';

const Layout = () => {
    return (
        <div>
            <Nav/>
            <main>
                <Outlet />
            </main>
            <Footer/>
        </div>
    );
    };

export default Layout