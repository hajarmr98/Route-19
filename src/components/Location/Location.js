import React, {Component} from 'react';
import { Container, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './Location.css';


class Location extends Component {
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
        <ModalHeader >Geolocalización</ModalHeader>
        <ModalBody className="my-modal" >
        <p>
        Para poder poder utilizar esta aplicación es necesario que nos des <b> acceso a tu geolocalización </b>. Con ella, podremos ofrecerte un buen servicio.
        </p>

        <div className="modal-image-content">
        <img className="imagen-geo" alt="imagen" src={'images/Location.svg'}></img>
        </div>

        </ModalBody>
        <ModalFooter>
        <Button onClick={this.props.getPosition} color="primary" block={true}>Entendido</Button>
        </ModalFooter>
      </Modal>
      </Container>
      
    )
  }
}

export default Location;