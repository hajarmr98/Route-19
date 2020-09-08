import React, { useContext } from 'react';
import { firebaseAuth } from '../../provider/authProvider'
import { withRouter } from 'react-router-dom'
import { Container } from 'reactstrap';
import Button from '../Button/Button.js'
import './SignIn.css'

const Signin = (props) => {

const {handleSignin, inputs, setInputs, errors, token} = useContext(firebaseAuth)

const handleSubmit = async (e) => {
    e.preventDefault()
    console.log('handleSubmitLOgin')
    await handleSignin()
    props.changeMode()

  }
  const handleChange = e => {
    const {name, value} = e.target
    console.log(inputs)
    setInputs(prev => ({...prev, [name]: value}))
  }
  
  return (
    <Container className="form-in-grandpa">
    <div className="form-in-dad">
      {console.log(props)}
      <form className="form-in" onSubmit={handleSubmit}>
        <h3 className="login-title">Acceder a mi perfil</h3>
        <label className="login-email-label" htmlFor="email">Correo electrónico</label>
        <input className="login-email-input" onChange={handleChange} id="email" name="email"  value={inputs.email} />
        <label className="login-password-label" htmlFor="password">Contraseña</label>
        <input className="login-password-input" onChange={handleChange} id="password" name="password" type="password" value={inputs.password}/>
        <div className="col1">
          <img src="./eye_icon.svg" alt="ver constraseña"/>
        </div>
          <div className="col2">
            <div className="TextLabel">Tu ubicación actual</div>
          </div>
        <a href="#"><p id="forgotten-pass">¿Has olvidado tu contraseña?</p></a>
        {/* {errors.length > 0 ? errors.map(error => <p style={{color: 'red'}}>{error}</p> ) : null} */}
        {errors.length > 0 ? <p style={{color: 'red'}}>Introduce un usuario o contraseña válidos</p>  : null}
        <Button text={'Acceder'} id="login-button" />
      </form>
      <Button text={'Registrarse'} action={()=> props.setMode(6)} id="login-signin-button" />
    </div>

    </Container>
  );
};

export default withRouter(Signin);