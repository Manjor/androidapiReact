import React from 'react'
import './DetailsPost.css'
import Title from '../../components/Title'
import Banner from '../../components/Banner'
import profile from '../../assets/imgs/profile.png'


export default props => 
    <div id='content' className='shadow p-4 rounded'>
      <div>
          <img src={profile} width='46px' height='46px' id='profile' alt={props.caption}/>
          <span className='ml-2'>{props.profilename}</span>
      </div>
       <Title title='Building Android Apps — 30 things that experience made me learn the hard way'
        />
       <div>
         <Banner image='bnrtec.jpg' caption='Figura'/>
       </div>
       <p>{props.content}</p>
       <p>{props.content}</p>
       <p>{props.content}</p>
       <p>{props.content}</p>
       <p>{props.content}</p>
       <p>{props.content}</p>
    </div>