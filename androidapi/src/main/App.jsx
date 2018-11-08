import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import Nav from '../template/Nav'
import Routes from './Routes'
import Footer from '../template/Footer'
import Main from '../template/Main'
import RightToolbar from '../components/RightToolbar';

export default props =>
    <div>
        <Nav/>
        <RightToolbar />
        <Main/>
        <Footer/>
    </div>