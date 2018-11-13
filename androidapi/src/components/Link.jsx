import './Link.css'
import React from 'react'

export default props =>
    <a 
        href={props.url} 
        className={`nav nav-link ${props.classe} link`}
        target={props.target}>
        <i className={`fa fa-${props.icon}`}></i>
        <span className='mx-1'>{props.name}</span> 
    </a>