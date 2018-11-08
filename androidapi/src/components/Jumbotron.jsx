import React from 'react'
import './Jumbotron.css'

export default props =>
    <div className='jumbotron'>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        <hr className-my-2/>
        <p>{props.overview}</p>
        <a href={props.urlbutton} className='btn btn-outline-primary' role='button'>{props.namebutton}</a>
    </div>


