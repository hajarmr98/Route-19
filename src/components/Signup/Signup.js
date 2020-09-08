import React, {useContext} from 'react';
import AuthProvider,{firebaseAuth} from '../../provider/authProvider'
import { Container, Button } from 'reactstrap';
import { useState } from 'react';
import {withRouter} from 'react-router-dom'
import './Signup.css'


const Signup = (props) => {

  const [checked, setChecked] = useState(false)
  

  const {handleSignup, inputs, setInputs, errors, token} = useContext(firebaseAuth)
  console.log(token)
  if( token !== null) { 
    props.changeMode()
  }
  

  let passwordValid = true
  let emailValid = true
  let passwordValidTwo = true
  let emailValidTwo = true

  const handleSubmit = async (e) => {
    console.log(AuthProvider)
    e.preventDefault()
    console.log('handleSubmit')
    await handleSignup()
    
    //wait to signup 
      //Es asincronía fijo
      //Si le pones el if y el esle sin el timeout te deja pasar
          // setTimeout(() => {
          //   console.log(token)
          // if( token !== null) { 
          //   props.changeMode()
          // }
          // else{
          //   console.log('se ha ido por el else')
          // }
          // }, 10000);
    
  }



  const handleChange = e => {
    const {name, value} = e.target
    console.log(inputs)
    setInputs(prev => ({...prev, [name]: value}))
  }
  let translateErrors = (errors) => {
    // "Password should be at least 6 characters"
    // "The email address is badly formatted."
    console.log(errors)
    let i;
    for (i = 0; i < errors.length; i++){
      console.log(typeof errors[i])
      if(errors[i] == "The password must be 6 characters long or more.") {
        passwordValid = false

      }else(passwordValid = true)

      if(errors[i] == "Password should be at least 6 characters" ){
        passwordValidTwo = false

      }else(passwordValidTwo = true)

      if(errors[i] == "The email address is badly formatted."){
        // return <p style={{color: 'red'}}>Introduce un email válido</p>
        emailValid = false
      }
      else(
        emailValid = true
      )
      if(errors[i] == "The email address is already in use by another account."){
        // return <p style={{color: 'red'}}>Introduce un email válido</p>
        emailValidTwo = false
      }
      else(
        emailValidTwo = true
      )

    }
      console.log(errors)
  }

  let checkbox = (e) => {
    console.log(e.target.checked)
    if(e.target.checked){
      setChecked(true)
      console.log('entre')
      console.log(checked)
    }
    else {
      setChecked(false)
      console.log('me fui')
    }
  }

  return (
    <Container className="signup">
  
    <form method="POST" className="signup-form" onSubmit={handleSubmit}>
     
      <h3 id="signup-title">Registro</h3>
      
      <label for="name" id="name-label">Nombre</label>
      <input id="name" name="name"></input>

      <label for="email-signup" id="email-singup-label">Correo electrónico</label>

      {translateErrors(errors)}
      <input className={!emailValid || !emailValidTwo ? "input-error email-signup" : "email-signup"} onChange={handleChange} name="email"  placeholder="ejemplo@dominio.com" value={inputs.email} />
      
      
      {!emailValid ? <div className="alert-form"><img className="alert-image" src="images/triangle_alert.svg"></img><p style={{color: 'red'}}>Introduce un email válido</p> </div>: ''}
      {!emailValidTwo ? <div className="alert-form"><img className="alert-image" src="images/triangle_alert.svg"></img><p className="alert-p" style={{color: 'red'}}>Este email ya está siendo utilizado</p></div> : ''}


      <label for="password-signup" id="password-signup-label">Contraseña de seis caracteres</label>
      <p id="password-signup-label-second">(Debe contener números y letras)</p>
      <input className={!passwordValid || !passwordValidTwo ? "input-error password-signup" : "password-signup"} onChange={handleChange} type="password" name="password" value={inputs.password} />
      {!passwordValid ? <div className="alert-form"><img className="alert-image" src="images/triangle_alert.svg"></img><p className="alert-p" style={{color: 'red'}}>Introduce una contraseña</p></div> : ''}
      {!passwordValidTwo ? <div className="alert-form"><img className="alert-image" src="images/triangle_alert.svg"></img><p className="alert-p" style={{color: 'red'}}>La contraseña es menor de 6 caracteres</p></div>: ''}
     
      <label for="repeatpassword-signup" id="repeatpassword-signup-label">Confirmar contraseña</label>
      <input className="repeatpassword-signup" type="password" name="repeatpassword-signup"></input>
      
      
      {/* {errors.length > 0 ? errors.map(error => <p style={{color: 'red'}}>{error}</p> ) : null} */}

      <div id="checkbox-container">
      <input type="checkbox" onChange={checkbox} id="checkbox"></input>
      {console.log(checked)}
 
      <label id="checkbox-label"> Marcando esta casilla aceptas las condiciones del servicio. Para más información puede ir a <br></br>
        <u><a href="https://policies.google.com/privacy?hl=es">Políticas de Privacidad.</a></u></label>
      </div>
      <Button id={ checked ? "signup-button" : "signup-button-disabled"}>Confirmar registro</Button>
    </form>
    
    </Container>
  );
};

export default withRouter(Signup);