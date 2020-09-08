import React, {Component} from 'react';
import { Container, Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import './Access.css';


class Access extends Component {
  constructor(props) {
    super(props);
  this.state = {
    modalIsOpen: true
  }
  this.setContainerMode = this.setContainerMode.bind(this)

}

  toggleModal() {
    this.setState ({
      ...this.state,
      modalIsOpen: !this.state.modalIsOpen
    })
  }

  setContainerMode(mode){
    this.props.setMode(mode)
  }

  render(){
    return(
      <Container >
        <Modal isOpen={this.state.modalIsOpen} className="access">
          <ModalHeader toggle={this.toggleModal.bind(this)}>Acceso</ModalHeader>
          <ModalBody>
            <div className="modal-buttons-access">
              <Button onClick={() => this.setContainerMode(8)} color="primary" block={true}>Acceder con tu perfil</Button>
              <Button onClick={() => this.setContainerMode(6)} className="access" block={true} variant="flat" size="xxl">Acceso sin registro</Button>
            </div>
          </ModalBody>   
      </Modal>
      </Container>
      
    )
  }
}

export default Access;