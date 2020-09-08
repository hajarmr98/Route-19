import React from 'react'
import SweetAlert from 'react-bootstrap-sweetalert'


export default function Alert(props){

return(
    <SweetAlert title="Lo sentimos.." onConfirm={() => props.setMode(10)}>
        <p><strong>No podemos encontrar tu dirección</strong></p>
        <p>Por favor, asegúrate de elegir una dirección válida</p>
    </SweetAlert>
)
}