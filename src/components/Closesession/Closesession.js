import React, {Component} from 'react';
import { Container, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './Closesession.css';


class Closesession extends Component {
  constructor(props) {
    super(props);
  this.state = {
    modalIsOpen: true
  }

}

  toggleModal() {
    this.setState ({
      ...this.state,
      modalIsOpen: !this.state.modalIsOpen
    })

  }

  render(){
    return(
      <Container>
        <Button color="primary" onClick={this.toggleModal.bind(this)}>Cerrar sesión</Button>

        <Modal isOpen={this.state.modalIsOpen} size="lg" aria-labelledby="contained-modal-title-vcenter" centered >
        <ModalHeader toggle={this.toggleModal.bind(this)}>Cerrar sesión</ModalHeader>
        <ModalBody className="my-modal" >

        <div className="modal-body-content">
        <p className="modal-first-sentence">Vas a cerrar sesión</p>

        <p className="modal-second-sentence">¿Seguro que quieres salir?</p>

        <img className="modal-image"alt="imagen" src={'images/close.svg'}></img>
        </div>

        </ModalBody>
        <ModalFooter>
        <Button onClick={this.toggleModal.bind(this)} color="primary" block={true}>Sí, cerrar sesión</Button>
        </ModalFooter>
      </Modal>
      </Container>
      
    )
  }
}

export default Closesession;