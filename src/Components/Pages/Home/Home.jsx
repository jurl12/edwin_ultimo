import React from 'react'
import { Logo } from '../../Logo/Logo'
import{FontAwesomeIcon} from'@fortawesome/react-fontawesome'
import { faInstagram,faLinkedin,faFacebook,faTwitter,faWhatsapp} from '@fortawesome/free-brands-svg-icons'

import sena from '../../../assets/logoSena.png'
import { Items } from '../../Items/Items'
import { Header } from '../../Layouts/Header/Header'
import { Navbar } from '../../Navbar/Navbar'
import { Main } from '../../Main/Main'
import otro from '../../../assets/Otro.jpg'
import foto from '../../../assets/Chelsea.png'
import react from '../../../assets/React.png'
import node from '../../../assets/Node.png'
import java from '../../../assets/Java.png'
import mongo from '../../../assets/Mongo.png'
import ft from '../../../assets/ft.jpg'




export const Home = () => {
    return (
        
        <>
              <Header>
              
              <div className='logoo'><Logo content={ft} /></div>
              <div className='nombre'><h1>Jorge Andres</h1></div>
              <hr className='raya'/>
              <div className='todo'><Items content={"Inicio"}></Items>
              <Items content={"perfil"}></Items>
              <Items content={"proyectos"}></Items>
              <Items content={"Referencias"}></Items>
              <Items content={"experiencia"}></Items></div>
              <div className='logooo'><Logo content={sena} /></div>
<div className='iconos'>
              <FontAwesomeIcon icon={faLinkedin}/>
              <FontAwesomeIcon icon={faFacebook}/>
              <FontAwesomeIcon icon={faInstagram}/>
              <FontAwesomeIcon icon={faTwitter}/>
              <FontAwesomeIcon icon={faWhatsapp}/>
              </div>
              
              
          </Header>
          <Main>
              <div className="to">
          <Logo content={sena} />
          <h1 className='lt'>PERFIL</h1>
          </div>
          <hr className='raya1'/>
          <p className='n'>Mi Nombre es JORGE ANDRES BELLTRAN BEJARANO, estudio actualmente en el SENA, mis deportes favoritos son futbol,boxeo y volley   me gusta personalmente todo tipo de musica y me considero una persona amable. creo enteramente en Dios y me gustan las motos y los carro</p>
          <div className="to"><Logo content={sena} />
          <h1 className='lt'>PROYECTOS</h1></div>
          <hr className='raya1'/>
          <div className="cuadros">
          <div className='cuadro'>
          
              <div className="log"><Logo  content={foto}></Logo></div>
              <div className="nd">
              <h1>flexbox</h1>
              <p>Pagina en donde aprendiamos a mover a lados</p>
              <h3 className='pp'>Ir a proyecto</h3></div>
          </div>
          
          <div className='cuadro'>
              <div className="log"><Logo  content={foto}></Logo></div>
              <div className="nd">
              <h1>graphel</h1>
              <p>Pagina en donde construiamos por partes en html</p>
              <h3 className='pp'>Ir a proyecto</h3></div>
              </div>
              </div>
              <div className="cuadross">
          
          <div className='cuadro'>
              <div className="log"><Logo  content={foto}></Logo></div>
              <div className="nd">
              <h1>MUSIC</h1>
              <p>Pagina en donde aprendimos a mover y agregar imagenes de fondo con imagenes no fondo.</p>
              <h3 className='pp'>Ir a proyecto</h3></div>
              
          </div>
          <div className='cuadro'>
              <div className="log"><Logo  content={foto}></Logo></div>
              <div className="nd">
              <h1>Apptastico</h1>
              <p>Ponemos en practica basicamente todos los conceptos vistos en el pasado</p>
              <h3 className='pp'>Ir a proyecto</h3></div>
             
              </div>
              </div>

              <div className="to">
          <Logo content={sena} />
          <h1 className='lt'>REFERENCIAS</h1> </div>
          <hr className='raya1'/>
          <div className="tdd">
          <div className="blanco">
              <h1>Nombre</h1>
              <h1>Cargo</h1>
              <h1>Telefono</h1>
              <h1>Correo electronico</h1>
          </div>
          <div className="blanco1">
              <h1>Nombre</h1>
              <h1>Cargo</h1>
              <h1>Telefono</h1>
              <h1>Correo electronico</h1>
          </div>
          <div className="blanco">
              <h1>Nombre</h1>
              <h1>Cargo</h1>
              <h1>Telefono</h1>
              <h1>Correo electronico</h1>
          </div>
          </div>
          <div className="to">
          <Logo content={sena} />
          <h1 className='lt'>EXPERENCIA</h1>
          
          </div>
          
          <hr className='raya1'/>
          <div className="progreso">
            <div className="uno">
                <div className='lgg'><Logo  content={react}></Logo></div>
                <progress max='100' id="progress" value='50'></progress>
                <p className='lr'>Bases</p></div>
            <div className="uno">
            <div className='lgg'> <Logo content={node}></Logo></div>
                <progress max='100' id="progress" value='50'></progress>
                <p className='lr'>Bases</p></div>
            <div className="uno">
            <div className='lgg'> <Logo content={java}></Logo></div>
                <progress max='100' id="progress" value='50'></progress>
                <p className='lr'>Intermedio</p></div>
            <div className="uno"><div className='lgg'><Logo content={mongo}></Logo></div>
                <progress max='100' id="progress" value='50'></progress>
                <p className='lr'>Avanzado</p></div>
          </div>
          </Main>
         
          
          </>
    )
  }