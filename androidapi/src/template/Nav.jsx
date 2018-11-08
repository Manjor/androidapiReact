import './Nav.css'
import Link from '../components/Link'
import React from 'react'

export default props=>
    <header className='navbar navbar-expand-sm shadow bg-light'>
       <Link url='Home' icon='android' name='Android Api' classe='navbar-brand text-info'></Link>
       <Link name='Inicio' classe='text-info' url='#'/>
       <Link name='Tópicos' classe='disabled' url='#'/>
       <Link name='Sobre' classe='disabled' url='#'/>
       <Link name='Contato' classe='disabled' url='#'/>
    </header>