import React from 'react';
import './App.css';
import MapContainer from './components/MapContainer/MapContainer.js'
import './components/MapContainer/MapContainer.css'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import Loading from './components/Loading/Loading.js'
import Cookies from './components/Cookies/Cookies';
import {RemoveScrollBar} from 'react-remove-scroll-bar';


export default function App() {

    return (
      <div className="App">
        {/* <RemoveScrollBar /> */}
          <Router>
            <Switch>
                <Route exact path='/'>
                  <MapContainer/> 
                </Route>
                <Route exact path='/loading'>
                  <Loading/> 
                </Route>
            </Switch>
          </Router>
      </div>
    );
}
