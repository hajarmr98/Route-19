import React, {useState} from 'react';
import { Container, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import '../Cookies/Cookies.css'
import Button from '../Button/Button'

export default function Access(props) {
    
    const { changeMode, setMode }  = props
      
      return(
        <Container>
          <Modal isOpen={true} className="modal" aria-labelledby="contained-modal-title-vcenter" centered>
            <ModalHeader>Route-19</ModalHeader>
            <ModalBody id="cookies-modal">
              <p className="modal-body-title">Acceso</p>
              <p className="modal-body-text">En estos momentos el acceso con tu perfil se encuentra deshabilitado. Por favor, ingresa sin registro, tendrás acceso a las mismas opciones que un usuario registrado</p>
            </ModalBody>
            <ModalFooter>
              <Button text={'Acceder a mi perfil'} action={changeMode} style={'disabled'}/>
              <Button text={'Acceso sin registro'} action={() => setMode(9)}/>
            </ModalFooter>
          </Modal>
        </Container>
        
      )
  }