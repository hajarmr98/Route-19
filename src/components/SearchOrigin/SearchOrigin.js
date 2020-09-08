import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import './SearchOrigin.css'
import UserCoor, { UserCoorConsumer } from '../../contexts/UserCoor.js'
import Geocoder from '@mapbox/mapbox-gl-geocoder'
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';


 class InputText extends Component {
   static contextType = UserCoor
   constructor(){
     super()
     this.state = {
       UserCoor: []
     }
    //  this.getUserCoor = this.getUserCoor.bind(this)
   }

// componentDidMount(){
//   this.setUserCoor()
// }


// setUserCoor(){

//   let NumCoor = this.context.UserCoor
//   //fetch para traducir coordenada a calle
//   // this.setState({...this.state, UserCoor: NumCoor})

// }

render(){
    return (
      
      <form noValidate autoComplete="off" required id="SearchOrigin" >
            <label for="origin" className="OriginLabel">Origen</label>
            <input id="origin" type="text" className="OriginContainer"/>
          <div className="col1">
            <img src="./images/place_24px.png"/>
          </div>
          <div className="col2">
            <div className="TextLabel">Tu ubicación actual</div>
          {/* <UserCoor.Consumer>
              { (context) => {
              console.log("holi", context.UserCoor)
              // this.setState({...this.state, UserCoor: context.UserCoor})
              return <div className="UbicationLabel">{context.UserCoor}</div>
              }}
          </UserCoor.Consumer> */}
          </div>
      </form>
      
  )
  }
}
        


export default InputText





