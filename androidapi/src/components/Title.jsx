import React from 'react'

export default props =>
    <div>
        <h1 className={props.titleclass}>{props.title}</h1>
        <p className={props.subclass}>{props.subtitle}</p>
    </div>
    