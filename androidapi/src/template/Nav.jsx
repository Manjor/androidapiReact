import './Nav.css'
import Link from '../components/Link'
import React from 'react'

export default props=>
    <header className='navbar navbar-expand-sm shadow bg-light'>
        <ul className='navbar-nav mr-auto'>
            <Link url='Home' icon='android' name='Android Api' classe='navbar-brand text-info'></Link>
            <Link name='Inicio' classe='text-info' url='#'/>
            <Link name='Tópicos' classe='disabled' url='#'/>
            <Link name='Sobre' classe='disabled' url='#'/>
        </ul>
       <Link name='' icon='linkedin' classe='disabled' url='https://www.linkedin.com/in/manoel-tavares-de-oliveira-junior-31218b161/' target='_blank'/>
       <Link name='' icon='at' classe='disabled' url='#'/>
       <Link name='' icon='youtube' classe='disabled' url='#'/>
    </header>