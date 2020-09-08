import React, {Component} from 'react';
import './NewCover.css';
import Button from '../Button/Button'


export default function NewCover (props) {

  const { changeMode}  = props

    return(
          <div className="newcover">
            <h1 className="newcover-title">Te damos la bienvenida a Route-19</h1>
            <img className="newcover-image" alt="imagen" src={'images/logoGrande.svg'}></img>
            <p className="newcover-last">Route-19 es un proyecto sin ánimo de lucro para ayudarte a elegir tus rutas con menor riesgo de contagio.</p>
            <Button text={'Comenzar'} action={changeMode} style={{widht: '30%'}}/>
          </div>
      
    )
}

