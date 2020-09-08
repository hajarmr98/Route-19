import React, { Component } from 'react'
import mapboxgl from 'mapbox-gl';
import './Map.css'
mapboxgl.accessToken = 'pk.eyJ1Ijoic29seiIsImEiOiJja2FpYWJobjIwbzVtMnNvNTdmNGF4NHJ2In0.HP3anVetw1Hw0MxhQJPagQ'

class Map extends Component {
    constructor(props) {
        super(props);
        this.state = {
        lng: -3.711830,
        lat: 40.438985,
        zoom: 14,
        maxZoom: 16,
        minZoom: 10,
        UserCoor: null,
        mapStyle: 'mapbox://styles/solz/ckcniloal0gm51inb4shmlxaj',
        Message1 : 'Capa rosa encendida',
        Message2 : 'Capa celeste encendida',
        Origin: [],
        Destiny : []
        };
        }
    
            

/// ---- Map Inicialization ---- ///
    componentDidMount() {
            const map = new mapboxgl.Map({
                container: this.mapContainer,
                style: 'mapbox://styles/solz/ckcniloal0gm51inb4shmlxaj',
                center: [this.state.lng, this.state.lat],
                zoom: this.state.zoom,
                maxZoom: this.state.maxZoom,
                minZoom: this.state.minZoom
                });
        }

    render() {
        return (
        <div>
            <div ref={el => this.mapContainer = el} className="mapContainer" />
        </div>
    )
    }
}

export default Map


