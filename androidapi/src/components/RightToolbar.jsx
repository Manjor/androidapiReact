import React from 'react'
import './RightToolbar.css'
import Link from '../components/Link'

export default props=>
    <div className='toolbar'>
        <h6 className='bg-dark p-2 shadow text-white rounded'>Apis</h6>
        <Link name='LottieApi' url='#'/>
        <Link name='Google Maps' classe='disabled' url='#'/>
        <Link name='Youtube V3' classe='disabled' url='#'/>
        <Link name='The Movie DB'  url='#'/>
        <Link name='Ingresso.com' classe='disabled' url='#'/>
        <Link name='Spotify' classe='disabled' url='#'/>
        <Link name='Instagram' classe='disabled' url='#'/>
        <Link name='SoudCloud' classe='disabled' url='#'/>
        <h6 className='bg-dark p-2 shadow text-white rounded'>Bibliotécas</h6>
        <Link name='Picasso' url='#'/>
        <Link name='Gson' url='#'/>
        <Link name='OkHttp' url='#'/>
        <Link name='Retrofit' classe='disabled' url='#'/>
    </div>