import React, { Component } from 'react'
import './MapContainer.css'
import {firebaseAuth} from '../../provider/authProvider.js'
import SubContext from '../../contexts/SubContext.js'
import MapA from '../Map/MapA.js'
import MapB from '../Map/MapB.js'
import MapB1 from '../Map/MapB1.js'
import SearchDestinyBtn from '../SearchDestinyBtn/SearchDestinyBtn.js'
import SearchBar from '../SearchBar/SearchBar.js'
import NavBar from '../NavBarTrue/NavBar.js'
import GeoPopup from '../Geopopup/GeoPopup.js'
import NewCover from '../NewCover/NewCover.js'
import Onboarding from '../NewOnboarding/Onboarding.js'
import Location from '../Location/Location.js'
import Cookies from '../Cookies/Cookies.js'
import Access from '../Access/Access.js'
import GoBack from '../GoBack/GoBack'
import Signup from '../Signup/Signup.js'
import Signin from '../SignIn/SignIn.js'
import ConfirmSignup from '../ConfirmSignup/ConfirmSignup.js'
// import CookiesConsent from '../CookiesConsent/CookiesConsent'
import Alert from '../Alert/Alert'

import MapTrial from '../Map/MapTrial.js'


class MapContainer extends Component{
  
  static contextType = firebaseAuth

  constructor(props){
    super(props)
    this.state = {
      mode: 0,
      logged: false,
      RedLayer : true,
      GreenLayer : true,
      UserCoor: [],
      Origin: null,
      Destiny: null
    }
    this.setMode = this.setMode.bind(this)
    this.changeMode = this.changeMode.bind(this)
    this.getOriginCoor = this.getOriginCoor.bind(this)
    this.getDestinyCoor = this.getDestinyCoor.bind(this)
    this.getPosition = this.getPosition.bind(this)
    this.getLayersState = {
      Red: this.getLayersState.bind(this),
      Green: this.getLayersState2.bind(this)
    }
  }

  componentDidMount(){
    console.log("MAP CONTAINER DID MOUNT")
  }

  getPosition(){
    let lat, lon;
        if ('geolocation' in navigator) {
          navigator.geolocation.getCurrentPosition((position) =>{
            let lat = position.coords.latitude
            let lon = position.coords.longitude
            this.setState({
                    ...this.state,
                    mode: 5,
                    UserCoor: [lon, lat]
                  })
          })
        } else {
          alert("Geolocation is not supported by this browser.")
        }
      }

      changeMode() {
        if(this.state.mode === 1){
          this.setState({...this.state, mode: 3})
        }
        else{
          this.setState({...this.state, mode: this.state.mode += 1})
        } 
      }

      skipMode() {
        this.setState({
          ...this.state,
          mode: this.state.mode += 2
        })
      }

      componentDidUpdate() {
        console.log("Component did mount in mode:", this.state.mode)
      }

      setMode(newMode) {
        this.setState({
          ...this.state,
          mode: newMode
        })
      }

      getOriginCoor(OriginCoordinate){
        this.setState({
          ...this.state,
          Origin: OriginCoordinate,
        })
      }

      getDestinyCoor(DestinyCoordinate){
        this.setState({
          ...this.state,
          Destiny: DestinyCoordinate
        })
      }

    async getLayersState(layerState){
        await console.log("getLayersState se ejecuta?")
        this.toggleRedLayerState()
    }

    async getLayersState2(layerState){
        await console.log("getLayersState2 se ejecuta?")
        this.toggleGreenLayerState()
    }

    toggleRedLayerState =() => {
      this.setState( prevState => {
          console.log(this.state.RedLayer)
          return { RedLayer: !prevState.RedLayer }
      })
  }
    toggleGreenLayerState =() => {
      this.setState( prevState => {
          console.log(this.state.GreenLayer)
          return { GreenLayer: !prevState.GreenLayer }
      })
  }

      loadMenu(){
        if(this.state.mode === 0){
          console.log("NO HAY MENU")
        }
        else if(this.state.mode > 7 && this.state.mode < 11){
          return <NavBar mode={this.state.mode}/>
        }
        else if(this.state.mode === 11 && (!this.state.Origin || !this.state.Destiny)){
          console.log("MAPA EN MODO 11 OSEA MAPA B1")
          // return <NavBar />
        }
        else if(this.state.mode == 11 && this.state.Origin && this.state.Destiny){
          console.log("SIN MENU")
     }
        else{
            console.log("SIN MENU")
        }
      }
      loadMode() {
        if(this.state.mode === 0) {
          return <NewCover  mode={this.state.mode} changeMode={this.changeMode.bind(this)}></NewCover>
        }
        else if(this.state.mode === 1) {
          return <Onboarding  mode={this.state.mode} changeMode={this.changeMode.bind(this)}></Onboarding>
        }
        else if(this.state.mode === 2) {
          return <Cookies mode={this.state.mode} changeMode={this.changeMode.bind(this)}></Cookies>  
        }
        else if(this.state.mode === 3) {
          return <GeoPopup  mode={this.state.mode} setMode={this.setMode} getPosition={this.getPosition.bind(this)}></GeoPopup>
        }
        else if(this.state.mode === 4) {
          return <Location mode={this.state.mode} changeMode={this.changeMode.bind(this)} getPosition={this.getPosition.bind(this)}></Location> 
        }
        else if(this.state.mode === 5) {
          return <Access mode={this.state.mode} setMode={this.setMode} changeMode={this.changeMode.bind(this)}></Access> 
        }
        else if(this.state.mode === 6) {
         return <Signup mode={this.state.mode} changeMode={this.changeMode}></Signup> 
        }
        else if(this.state.mode === 7) {
          return <ConfirmSignup mode={this.state.mode} setMode={this.setMode}></ConfirmSignup> 
         }
        else if(this.state.mode === 8) {
          return <Signin mode={this.state.mode} setMode={this.setMode} changeMode={this.changeMode}></Signin> 
        }
        else if(this.state.mode === 9 ){
          return <SearchDestinyBtn style={'search'}/>
        }
        else if(this.state.mode === 10 ){
          return <SearchBar />
        }
        else if(this.state.mode === 11 && this.state.Origin && this.state.Destiny){
          // return <TrySwitch parentCallBack={this.getLayersState}/>
          return <GoBack setMode={this.setMode}/>
        }
        else if(this.state.mode === 11 && (!this.state.Origin || !this.state.Destiny)){
          return <Alert setMode={this.setMode}/>
        }
        else if(this.state.mode === 12 ){
          return <SearchDestinyBtn />
        }
        else{console.log("El modo 0")}
      }
      
      loadMap(){
          if(this.state.mode < 6 && this.state.mode > 0){
            return <MapA className="Map" layers={this.state} map={this.state} UserCoor={this.state}/>
          }
          else if(this.state.mode === 9 ){
            console.log("MAPA EN MODO 9 OSEA MAPA B")
            return <MapB className="Map" layers={this.state} UserCoor={this.state.UserCoor}/>       
          }
          else if(this.state.mode === 11 && this.state.Origin && this.state.Destiny){
            console.log("MAPA EN MODO 11 OSEA MAPA B1")
            return <MapTrial className="Map" layers={this.state} UserCoor={this.state.UserCoor} Origin={this.state.Origin} Destiny={this.state.Destiny}/>       
          }
          else if(this.state.mode === 11 && (!this.state.Origin || !this.state.Destiny)){
            // return <SearchBar />
          }
          else if (this.state.mode ===12){
            console.log("MAPA EN MODO 12 OSEA MAPA C - SIN RUTA")
          }
      }

render(){
  return(
    <div style={{margin: 'auto'}}>
      {/* <CookiesConsent style={{position: 'sticky', zIndex: 3}}/> */}
      <SubContext.Provider value={{UserCoor: this.state.UserCoor, setMode: this.setMode, getOriginCoor: this.getOriginCoor, getDestinyCoor: this.getDestinyCoor}}>
        {this.loadMenu()}
        {this.loadMode()}
        {this.loadMap()}
        
      </SubContext.Provider>
    </div>
  )
}

}
export default MapContainer