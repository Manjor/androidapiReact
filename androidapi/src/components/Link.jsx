import './Link.css'
import React from 'react'

export default props =>
    <a  
    href={props.url} 
    className={`nav nav-link ${props.classe}`}
    ><i className={`fa fa-${props.icon} mr-2`}></i>{props.name}</a>