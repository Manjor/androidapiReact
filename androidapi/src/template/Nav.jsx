import './Nav.css'
import Link from '../components/Link'
import React from 'react'

export default props=>
    <nav className='navbar navbar-expand-md shadow bg-light'>
        <Link url='Home' icon='android' name='Android Api' classe='navbar-brand text-info'></Link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className='navbar-nav mr-auto'>
                <Link name='Inicio' classe='text-info' url='#'/>
                <Link name='Tópicos' classe='disabled' url='#'/>
                <Link name='Sobre' classe='disabled' url='#'/>
            </ul>
            <Link name='' icon='linkedin' url='https://www.linkedin.com/in/manoel-tavares-de-oliveira-junior-31218b161/' target='_blank'/>
            <Link name='' icon='at' classe='disabled' url='#'/>
            <Link name='' icon='youtube' classe='disabled' url='#'/>
            <Link icon='github' url='https://github.com/Manjor' target='_blank'/>  
        </div>
        
    </nav>