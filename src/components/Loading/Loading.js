import React, { Component } from 'react'
import './Loading.css'
import Loader from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

class Loading extends Component {
    constructor(){
        super()
        this.state = {
            Loader : true
        }
            
    }

    render() {
        return (

        <div id="loader-container">
            <p>Calculando Ruta</p>
            <Loader
                id="loader"
                type="ThreeDots"
                color="#0065FF"
                height={100}
                width={100}
        />
        </div>
)
    }
}


export default Loading

