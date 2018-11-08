import React from 'react'
import './Main.css'
import Jumbotron from '../components/Jumbotron'
import Title from '../components/Title'

    let arrayJumbotron = [
        {
            title:'Usando Animações com Lottie Api',
            description:'Aprensa a aplicar animações de carregamento e muito mais em suas aplicações, usando a bibliotéca da Airbnb.',
            overview:'As animações...',
            urlbutton:'#',
            namebutton:'Ver Artigo'
        },{
            title:'Usando Animações com Lottie Api',
            description:'Aprensa a aplicar animações de carregamento e muito mais em suas aplicações, usando a bibliotéca da Airbnb.',
            overview:'As animações...',
            urlbutton:'#',
            namebutton:'Ver Artigo'
        },{
            title:'Usando Animações com Lottie Api',
            description:'Aprensa a aplicar animações de carregamento e muito mais em suas aplicações, usando a bibliotéca da Airbnb.',
            overview:'As animações...',
            urlbutton:'#',
            namebutton:'Ver Artigo'
        },{
            title:'Usando Animações com Lottie Api',
            description:'Aprensa a aplicar animações de carregamento e muito mais em suas aplicações, usando a bibliotéca da Airbnb.',
            overview:'As animações...',
            urlbutton:'#',
            namebutton:'Ver Artigo'
        },{
            title:'Usando Animações com Lottie Api',
            description:'Aprensa a aplicar animações de carregamento e muito mais em suas aplicações, usando a bibliotéca da Airbnb.',
            overview:'As animações...',
            urlbutton:'#',
            namebutton:'Ver Artigo'
        },{
            title:'Usando Animações com Lottie Api',
            description:'Aprensa a aplicar animações de carregamento e muito mais em suas aplicações, usando a bibliotéca da Airbnb.',
            overview:'As animações...',
            urlbutton:'#',
            namebutton:'Ver Artigo'
        }
    ]

const jumbotrons = arrayJumbotron.map((jumbotron) => 
    <Jumbotron 
        title={jumbotron.title} 
        description={jumbotron.description} 
        overview={jumbotron.overview}
        urlbutton={jumbotron.urlbutton}
        namebutton={jumbotron.namebutton} />
);


export default props=>
    <div id='maincontent' className='container-fluid shadow-sm'>
        <Title
            subclass='text-info'
            title='Android API'
            subtitle='Tutorias, exemplos, artigos e discurções sobre as principais apis, bibliotecas, components e conceitos
            de Mobile Design para todos que gostam de programação Android.'/>
        {jumbotrons}
    </div>
    