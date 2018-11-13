import React from 'react'
import './Banner.css'
import image from '../assets/imgs/bnrtec.jpg'


export default props =>
<div>
    <img src={image} id='imgbanner' alt={props.caption}/>
</div>

    