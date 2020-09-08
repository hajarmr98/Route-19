import React, {Component} from 'react';
import { Container, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './Alert.css'
import Button from '../Button/Button'
import Doter from '../Doter/Doter'
// import {items} from "../../json/elements.json";

export default class Onboarding extends Component {
    constructor(props) {
      super(props);
    this.state = {

      modalIsOpen: true,
      step: 0,
      items: [ ],
        item: {
                  id: 0,
                  title: "Lo sentimos",
                  image: "images/Maps_sinRegistro.svg",
                  text: "No podemos encontrar tu dirección. Por favor, elige una de las opciones en el menú desplegable" ,
                  button: "Modificar dirección" 
                },
      

    }
  
}

    click() {
      this.toggleModal();
      this.props.setMode(10)
    }
  
    toggleModal() {
      this.setState ({
        ...this.state,
        modalIsOpen: !this.state.modalIsOpen
      })
  
    }

    changeStep() {
        this.setState ({
          ...this.state,
          step: this.state.step += 1
        })
        console.log(this.state.step)
    
      }

    changeItem() {
     if (this.state.step < 2) {
        this.setState({ ...this.state, item: this.state.items[this.state.step]});
     }
    else {
      this.props.changeMode()
    } 
        
        console.log(this.state.items[this.state.step])
        console.log(this.state.item)
    }
  
    
    render(){
      return(
        <Container>
          <Modal isOpen={this.state.modalIsOpen} className="modal" aria-labelledby="contained-modal-title-vcenter" centered>
            <ModalHeader toggle={this.toggleModal.bind(this)}>Route-19</ModalHeader>
            <ModalBody className="my-modal" >
              <p className="modal-body-title">{this.state.item.title}</p>
              <div className="modal-body-image">
                <img className="imagen-geo" alt="imagen-onboarding" src={this.state.item.image}></img>
              </div>
              <p className="modal-body-text">{this.state.item.text}</p>
              <Doter step={this.state.step} length={this.state.items.length}></Doter>
            </ModalBody>
            <ModalFooter>
              <Button className="modal-body-button" action={this.click.bind(this)} text={this.state.item.button}/>
            </ModalFooter>
          </Modal>
        </Container>
        
      )
    }
  }
  
