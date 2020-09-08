import React, {Component} from 'react';
import { Container, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './ConfirmSignup.css';


class ConfirmSignup extends Component {
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
        <Modal isOpen={this.state.modalIsOpen} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>

        <ModalHeader toggle={this.toggleModal.bind(this)}>Registro realizado</ModalHeader>

        <ModalBody className="confirm-modal" >
        <p className="modal-confirm-firstsentence">
        ¡El registro se ha realizado con éxito!
        </p>
        <p className="modal-confirm-lastsentence">
        Accede a tu perfil para comenzar a utilizar Route -19.
        </p>
        <div className="modal-confirm-geo">
        <img className="modal-confirm-image" alt="Dos muñecos confirmando registro" src={'images/Registro_ok.svg'}></img>
        </div>

        </ModalBody>
        <ModalFooter>
        <Button onClick={() => this.props.setMode(9)} color="primary" block={true}>Acceder a mi perfil</Button>
        </ModalFooter>
      </Modal>
      </Container>
      
    )
  }
}

export default ConfirmSignup;