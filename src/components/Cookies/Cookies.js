import React, {useState} from 'react';
import { Container, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './Cookies.css'
import Button from '../Button/Button'
import Doter from '../Doter/Doter'
// import {items} from "../../json/elements.json";

export default function Cookies(props) {
    
    const { changeMode }  = props
      
      return(
        <Container>
          <Modal isOpen={true} className="modal" aria-labelledby="contained-modal-title-vcenter" centered>
            <ModalHeader>Route-19</ModalHeader>
            <ModalBody id="cookies-modal">
              <p className="modal-body-title">Cookies</p>
              <p className="modal-body-text">Utilizamos cookies propias y de terceros para mejorar la experiencia del usuario a través de su navegación. Si continúas navegando aceptas su uso. <a href="#">Privacidad y cookies.</a></p>
            </ModalBody>
            <ModalFooter>
              <Button text={'Aceptar'} action={changeMode}/>
              <Button text={'Configurar cookies'} style={'light'}/>
            </ModalFooter>
          </Modal>
        </Container>
        
      )
  }