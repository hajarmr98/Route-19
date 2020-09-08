import React, {Component} from 'react';
import './GoBack.css';


class GoBack extends Component {
    constructor(props) {
        super(props);
    
    }
  render(){
    return(
        <div id="goback-container-child" onClick={() => this.props.setMode(10)}>
        <div id="goback-container">
        <img id="goback-image"  alt="Arrow" src={'images/arror.svg'}></img>
        <p id="goback-sentence">Atrás</p>
        </div>
        </div>
    )
  }
}

export default GoBack;