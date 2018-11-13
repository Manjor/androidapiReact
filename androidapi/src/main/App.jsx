import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Nav from '../template/Nav'
import Footer from '../template/Footer'
import Main from '../template/Main'
import Home from '../pages/Home/Home'
import RightToolbar from '../components/RightToolbar';

export default props =>
    <div>
        <Nav/>
        <RightToolbar />
        <Home/>
        <Footer/>
    </div>
