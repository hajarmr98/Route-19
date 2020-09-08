import React, {Component} from 'react';
import { Container, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './Onboarding.css'
import Button from '../Button/Button'
import Doter from '../Doter/Doter'
// import {items} from "../../json/elements.json";

export default class Onboarding extends Component {
    constructor(props) {
      super(props);
    this.state = {

      modalIsOpen: true,
      step: 0,
      items: [ 
                {
                    id: 0,
                    title: "Sin registro",
                    image: "images/Maps_sinRegistro.svg",
                    text: "Podrás acceder al mapa y visualizar las zonas de alto riesgo de contagio y aquellas a evitar para mantener a otras personas a salvo." ,
                    button: "Siguiente"
                },
                {
                    id: 1,
                    title: "Con registro",
                    image: "images/Maps_conRegistro.svg",
                    text: "Podrás buscar cómo llegar a tu destino caminando por calles con menor riesgo de contagio de COVID-19." ,
                    button: "Comenzar"
                }],

        item: {
                  id: 0,
                  title: "Sin registro",
                  image: "images/Maps_sinRegistro.svg",
                  text: "Podrás acceder al mapa y visualizar las zonas de alto riesgo de contagio y aquellas que es mejor evitar para mantener a otras personas a salvo." ,
                  button: "Siguiente" 
                },
      

    }
  
}

    click() {
      this.toggleModal();
      this.changeStep();
      this.changeItem();
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
  
