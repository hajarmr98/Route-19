import React, {Component} from 'react'
import CookieConsent from "react-cookie-consent";
import styled from 'styled-components'

const Anchor = styled.a`
    color: #fff;
    text-decoration: underline;
    font-size: 1.2em;

    &:active, &:hover{
        color: #fff;
    }


`

export default class CookiesConsent extends Component{
    constructor(){
        super()
        // state = {}
    }

render(){
    return(
        <CookieConsent
            location="bottom"
            buttonText="Aceptar"
            cookieName="myAwesomeCookieName2"
            style={{ background: "#0065ff", boxShadow: "0px 2px 2px rgba(0, 82, 204, 0.24)" }}
            buttonStyle={{ color: "#0065ff", fontSize: "13px", borderRadius: "8px", backgroundColor: "#fff" }}
            expires={150}
            >
            Utilizamos cookies propias y de terceros para mejorar la experiencia del usuario a través de su navegación. Si continúas navegando aceptas su uso.{" "}
            <span style={{ fontSize: "10px" }}><Anchor href="#">Ver política de privacidad y cookies.</Anchor></span>
        </CookieConsent>
    )
}
}