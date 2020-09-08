import React, { Component } from 'react'
import mapboxgl from 'mapbox-gl';
import './Map.css'
import SubContext from '../../contexts/SubContext.js'
import Loading from '../Loading/Loading';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

mapboxgl.accessToken = 'pk.eyJ1Ijoic29seiIsImEiOiJja2FpYWJobjIwbzVtMnNvNTdmNGF4NHJ2In0.HP3anVetw1Hw0MxhQJPagQ'

export default class MapB2 extends React.Component {
    constructor(props) {
        super(props);
            this.state = {
                lng: -3.711830,
                lat: 40.438985,
                zoom: 14,
                maxZoom: 16,
                minZoom: 10,
                UserCoor: this.props.UserCoor,
                mapStyle: 'mapbox://styles/solz/ckcniloal0gm51inb4shmlxaj',
                Message1 : 'Capa rosa encendida',
                Message2 : 'Capa celeste encendida',
                Origin: this.props.Origin,
                Destiny : this.props.Destiny,
                Loader: true
            };
            // this.serLayerRed = this.setLayerRed.bind(this)
            // this.setLayerGreen = this.setLayerGreen.bind(this)
            // this.renderLayer1 = this.renderLayer1.bind(this)
            // this.renderLayer2 = this.renderLayer2.bind(this)
        }

    componentDidMount() {
        const { Destiny, Origin } = this.props
        const map = new mapboxgl.Map({
        container: this.mapContainer,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [this.state.lng, this.state.lat],
        zoom: this.state.zoom
        });
        
        map.on('load', function() {
            // --- MARKER ORIGIN --- //
            let markerO = new mapboxgl.Marker({color: '#0065ff'})
            .setLngLat(Origin)
            .addTo(map);
    
             // --- MARKER DESTINY --- //
             let markerD = new mapboxgl.Marker({color: 'green'})
             .setLngLat(Destiny)
             .addTo(map);
        })

            // --- CALCULATE ROUTE --- //
            let routePetition = `https://route19api.herokuapp.com/routes/origin=${Origin[0]},${Origin[1]}0&destination=${Destiny[0]},${Destiny[1]}`
            console.log("routePetition", routePetition)
            
            let newRoute ={}    
            fetch(routePetition)
                .then(res => res.json())
                .then((data) => {
                    newRoute = data
                    console.log("respuesta de la api de rutas", newRoute)
                    paintRoute(newRoute)})
                .catch( err => console.log(err))

        function paintRoute(newRoute){
            const RemoveLoader = () =>{
                if(this.state.Loader){
                    this.setState({...this.state, Loader: false})
                }
            }
            map.addSource('route', {
                'type': 'geojson',
                'data': newRoute
                });
            map.addLayer({
            'id': 'route',
            'type': 'line',
            'source': 'route',
            'layout': {
            'line-join': 'round',
            'line-cap': 'round'
            },
            'paint': {
            'line-color': '#0065ff',
            'line-width': 6,
            'line-dasharray': [0, 2]
            }
            });
        }

        let RedPlaces = {}
        fetch('https://route19api.herokuapp.com/routes/danger')
        .then(res => res.json())
        .then((data) => {
            RedPlaces = data
            console.log("redplaces",RedPlaces)
            paintMapRed(RedPlaces)
        })

        function paintMapRed(RedPlaces){
        map.addSource('redzones', { type: 'geojson', data: RedPlaces, cluster: true, clusterMaxZoom: 16, 
        clusterRadius: 70, 
        });

        map.addLayer({ id: 'clusters', type: 'circle', source: 'redzones', filter: ['has', 'point_count'],
        paint: {
        'circle-opacity': 0.7,
        'circle-stroke-color': '#FF5630',
        'circle-stroke-width': 10,
        'circle-stroke-opacity': 0.5,
        'circle-color': [
        'step',
        ['get', 'point_count'],
        '#F4856C',
        5,
        '#FF5630',
        20,
        '#FF5630',
        ],
        'circle-radius': [
        'step',
        ['get', 'point_count'],
        2,
        3,
        4,
        10,
        8, 
        ]
        }
        });

        map.addLayer({
        id: 'unclustered-point',
        type: 'circle',
        source: 'redzones',
        filter: ['!', ['has', 'point_count']],
        circleMinZoom: 16,
        paint: {
        'circle-color': '#FF5630',
        // 'circle-opacity': 0.5,
        'circle-radius': 5,
        'circle-stroke-width': 1,
        'circle-stroke-color': '#FF5630'
        }
        });
        }
        let GreenPlaces = {}
        fetch('https://route19api.herokuapp.com/routes/safe')
        .then(res => res.json())
        .then((data) => {
            GreenPlaces = data
            console.log("greenplaces", GreenPlaces)
            paintMapGreen(GreenPlaces)
        })

        function paintMapGreen(GreenPlaces){
            map.addSource('greenzones', { type: 'geojson', data: GreenPlaces, cluster: true, clusterMaxZoom: 16, clusterRadius: 70 });

        map.addLayer({ id: 'greenclusters', type: 'circle', source: 'greenzones', filter: ['has', 'point_count'],
        paint: {
        'circle-opacity': 0.7,
        'circle-stroke-color': '#00B8D9',
        'circle-stroke-width': 10,
        'circle-stroke-opacity': 0.5,
        'circle-color': [
        'step',
        ['get', 'point_count'],
        '#00B8D9',
        2,
        '#00B8D9',
        4,
        '#00B8D9',
        ],
        'circle-radius': [
        'step',
        ['get', 'point_count'],
        5,
        10,
        7,
        15,
        9, 
        ]
        }
        });

        map.addLayer({
        id: 'green-unclustered-point',
        type: 'circle',
        source: 'greenzones',
        filter: ['!', ['has', 'point_count']],
        paint: {
        'circle-color': '#00B8D9',
        // 'circle-opacity': 0.5,
        'circle-radius': 7,
        'circle-stroke-width': 1,
        'circle-stroke-color': '#00B8D9'
        }
        });
    }
    }
    render() {
            return (
                <div>
                    <div ref={el => this.mapContainer = el} className="mapContainer" />
                    {/* <Loading/> */}
                </div>
            )
        }
}
