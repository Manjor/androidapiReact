import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import Nav from '../template/Nav'
import Main from '../template/Main'
import Footer from '../template/Footer'
import RightToolbar from '../components/RightToolbar';

export default props =>
    <div>
        <Nav/>
        <RightToolbar />
        <Main/>
        <Footer/>
    </div>