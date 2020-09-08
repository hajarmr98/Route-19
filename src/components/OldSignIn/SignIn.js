// add useContext
import React, {useContext} from 'react';
import {firebaseAuth} from '../../provider/authProvider'
import {withRouter} from 'react-router-dom'
import './SignIn.css'

const Signin = (props) => {


  const {handleSignin, inputs, setInputs, errors} = useContext(firebaseAuth)
  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log('handleSubmitLOgin')
    //wait to signup 
    await handleSignin()
    //push home
    // console.log(props.history)
    // props.history.push('/')
    props.setMode(9 )

  }
  const handleChange = e => {
    const {name, value} = e.target
    console.log(inputs)
    setInputs(prev => ({...prev, [name]: value}))
  }

  return (
    <div className="form-in-dad">
    {console.log(props)}
    <form className="form-in" onSubmit={handleSubmit}>
      {/* replace the div tags with a form tag */}
      Signin
      {/* make inputs  */}
      <input onChange={handleChange} name="email" placeholder='email' value={inputs.email} key="1"/>
      <input onChange={handleChange} name="password" placeholder='password' value={inputs.password} key="2"/>
      <button>signin</button>
      {errors.length > 0 ? errors.map(error => <p style={{color: 'red'}}>{error}</p> ) : null}
    </form>
    </div>
  );
};

export default withRouter(Signin);