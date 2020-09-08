import React, { Component } from 'react'
import mapboxgl from 'mapbox-gl';
import './Map.css'
mapboxgl.accessToken = 'pk.eyJ1Ijoic29seiIsImEiOiJja2FpYWJobjIwbzVtMnNvNTdmNGF4NHJ2In0.HP3anVetw1Hw0MxhQJPagQ'


class Map extends Component {
    constructor(props) {
        super(props);
        this.state = {
        lng: this.props.map.lng,
        lat: this.props.map.lat,
        zoom: this.props.map.zoom,
        mapStyle: 'mapbox://styles/solz/ckcniloal0gm51inb4shmlxaj',
        Message1 : 'Capa rosa encendida',
        Message2 : 'Capa celeste encendida',
        Origin: [],
        Destiny : []
        };

        this.serLayerRed = this.setLayerRed.bind(this)
        this.setLayer2 = this.setLayer2.bind(this)
        this.renderLayer1 = this.renderLayer1.bind(this)
        this.renderLayer2 = this.renderLayer2.bind(this)

        }
    
    // componentDidMount() {
    //     /// ---- Map Inicialization ----- //
    //     const map = new mapboxgl.Map({
    //     container: this.mapContainer,
    //     style: 'mapbox://styles/solz/ckcniloal0gm51inb4shmlxaj',
    //     center: [ this.state.lng, this.state.lat ],
    //     zoom: this.state.zoom
    //     });
    //     map.on('move', () => {
    //         this.setState({
    //         lng: map.getCenter().lng.toFixed(4),
    //         lat: map.getCenter().lat.toFixed(4),
    //         zoom: map.getZoom().toFixed(2)
    //         });
    //         });
    //     // ---- Cluster Layers ---- //
    //     map.on('load', function() {
    //         let RedPlaces = {}
    //         fetch('https://route19api.herokuapp.com/map/danger')
    //         .then(res => {
    //             res.json()
    //             console.log(res)
    //         })
    //         .then((data) => {
    //         RedPlaces = data
    //         console.log(RedPlaces)
    //         paintMapRed(RedPlaces)
    //         })
    //         let GreenPlaces = {}
    //         fetch('https://route19api.herokuapp.com/map/safe')
    //         .then(res => {
    //             res.json()
    //             console.log(res)
    //         })
    //         .then((data) => {
    //         GreenPlaces = data
    //         console.log(GreenPlaces)
    //         paintMapGreen(GreenPlaces)
    //         })

    //         function paintMapRed(RedPlaces){
    //         map.addSource('redzones', { type: 'geojson', data: RedPlaces, cluster: true, 
    //         clusterMaxZoom: 30, // Max zoom to cluster points on
    //         clusterRadius: 20 // Radius of each cluster when clustering points (defaults to 50)
    //         });
    //         map.addLayer({ id: 'clusters', type: 'circle', source: 'redzones', filter: ['has', 'point_count'], paint: {'circle-opacity': 0.7,
    //         'circle-stroke-color': '#FF5630',
    //         'circle-stroke-width': 10,
    //         'circle-stroke-opacity': 0.5,
    //         'circle-color': [
    //         'step',
    //         ['get', 'point_count'],
    //         '#fff',
    //         2,
    //         '#FF5630',
    //         4,
    //         '#FF5630',
    //         ],
    //         'circle-radius': [
    //         'step',
    //         ['get', 'point_count'],
    //         20,
    //         2,
    //         30,
    //         4,
    //         40, 
    //         ]
    //         }
    //         });
    //         map.addLayer({ id: 'cluster-count', type: 'symbol', source: 'redzones', filter: ['has', 'point_count'],
    //         layout: {
    //         'text-field': '{point_count_abbreviated}',
    //         'text-font': ['DIN Offc Pro Medium', 'Arial Unicode MS Bold'],
    //         'text-size': 30
    //         }
    //         });
    //         map.addLayer({ id: 'unclustered-point', type: 'circle', source: 'redzones',filter: ['!', ['has', 'point_count']],
    //         paint: {
    //         'circle-color': '#FF5630',
    //         'circle-radius': 7,
    //         'circle-stroke-width': 1,
    //         'circle-stroke-color': '#FF5630'
    //         }});}

    //         function paintMapGreen(GreenPlaces){
    //             map.addSource('greenzones', { type: 'geojson', data: GreenPlaces, cluster: true, 
    //             clusterMaxZoom: 30, // Max zoom to cluster points on
    //             clusterRadius: 20 // Radius of each cluster when clustering points (defaults to 50)
    //             });
    
    //             map.addLayer({ id: 'greenclusters', type: 'circle', source: 'greenzones', filter: ['has', 'point_count'], paint: {'circle-opacity': 0.7,
    //             'circle-stroke-color': '#FF5630',
    //             'circle-stroke-width': 10,
    //             'circle-stroke-opacity': 0.5,
    //             'circle-color': [
    //             'step',
    //             ['get', 'point_count'],
    //             '#fff', 2,
    //             '#00b8d9', 4,
    //             '#00b8d9',],
    //             'circle-radius': ['step',
    //             ['get', 'point_count'],
    //             20, 2, 30, 4, 40,]}
    //             });
    
    //             map.addLayer({ id: 'green-cluster-count', type: 'symbol', source: 'greenzones', filter: ['has', 'point_count'],
    //             layout: {
    //             'text-field': '{point_count_abbreviated}',
    //             'text-font': ['DIN Offc Pro Medium', 'Arial Unicode MS Bold'],
    //             'text-size': 30
    //             }
    //             });
    
    //             map.addLayer({ id: 'green-unclustered-point', type: 'circle', source: 'greenzones', filter: ['!', ['has', 'point_count']],
    //             paint: {
    //             'circle-color': '#00b8d9',
    //             'circle-radius': 7,
    //             'circle-stroke-width': 1,
    //             'circle-stroke-color': '#00b8d9'
    //             }
    //             });
               
    //         }
    //     })
    // }
            

/// ---- Map Update ---- ///
    componentDidUpdate(prevProps) {
        // Uso tipico (no olvides de comparar los props):
        if (this.props.layers !== prevProps.layers){
            this.manageLayers()
        }}

/// ---- Layers Selections ---- ///

    manageLayers(){
        this.setLayerRed()
        this.setLayer2()
    }
    async setLayerRed(){  
        await console.log("esto es setLayer1",this.props.layers.CircleLayer)
        if(this.props.layers.CircleLayer === true){
            const map = new mapboxgl.Map({
                container: this.mapContainer,
                style: 'mapbox://styles/solz/ckcniloal0gm51inb4shmlxaj',
                center: [this.state.lng, this.state.lat],
                zoom: this.state.zoom
                });
                map.on('load', function() {
                    let RedPlaces = {}

                fetch('https://route19api.herokuapp.com/map/danger')
                .then(res => res.json())
                .then((data) => {
                    RedPlaces = data
                    console.log(RedPlaces)
                    paintMapRed(RedPlaces)
                })

                function paintMapRed(RedPlaces){
                map.addSource('redzones', { type: 'geojson', data: RedPlaces, cluster: true, clusterMaxZoom: 16, // Max zoom to cluster points on
                clusterRadius: 5 // Radius of each cluster when clustering points (defaults to 50)
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
                '#FF5630',
                2,
                '#FF5630',
                4,
                '#FF5630',
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
                id: 'cluster-count',
                type: 'symbol',
                source: 'redzones',
                filter: ['has', 'point_count'],
                layout: {
                'text-field': '{point_count_abbreviated}',
                'text-font': ['DIN Offc Pro Medium', 'Arial Unicode MS Bold'],
                'text-size': 30
                }
                });

                map.addLayer({
                id: 'unclustered-point',
                type: 'circle',
                source: 'redzones',
                filter: ['!', ['has', 'point_count']],
                paint: {
                'circle-color': '#FF5630',
                // 'circle-opacity': 0.5,
                'circle-radius': 7,
                'circle-stroke-width': 1,
                'circle-stroke-color': '#FF5630'
                }
                });
                }
                });
                                    
                                        
                        
        await this.setState({...this.state, Message1 : 'Capa rosa encendida'})
        }
        else{
            
        await this.setState({...this.state, Message1 : 'Capa rosa apagada'})
        }
    }
    async setLayer2(){
        await console.log("esto es setLayer",this.props.layers.RouteLayer)
        if(this.props.layers.RouteLayer === true){
        const map = new mapboxgl.Map({
            container: this.mapContainer,
            style: 'mapbox://styles/solz/ckcniloal0gm51inb4shmlxaj',
            center: [ this.state.lng, this.state.lat ],
            zoom: this.state.zoom
            });
                map.on('load', function() {
                let GreenPlaces = {}
                fetch('https://route19api.herokuapp.com/map/safe')
                .then(res => res.json())
                .then((data) => {
                    GreenPlaces = data
                    console.log(GreenPlaces)
                    paintMapGreen(GreenPlaces)
                })

                function paintMapGreen(GreenPlaces){
                map.addSource('greenzones', { type: 'geojson', data: GreenPlaces, cluster: true, clusterMaxZoom: 16, // Max zoom to cluster points on
                clusterRadius: 5 // Radius of each cluster when clustering points (defaults to 50)
                });

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
                id: 'cluster-count',
                type: 'symbol',
                source: 'greenzones',
                filter: ['has', 'point_count'],
                layout: {
                'text-field': '{point_count_abbreviated}',
                'text-font': ['DIN Offc Pro Medium', 'Arial Unicode MS Bold'],
                'text-size': 30
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
                });
        await this.setState({...this.state, Message2 : 'Capa celeste encendida'})
        }
        else{
        await this.setState({...this.state, Message2 : 'Capa celeste apagada'})
            }
    }
    
    renderLayer1(){
        let layer = `${this.state.Message1}`
        return layer
    }

    renderLayer2(){
        let layer = `${this.state.Message2}`
        return layer
    }

        render() {
            return (
            <div>
                <div ref={el => this.mapContainer = el} className="mapContainer" />
                <p>{this.renderLayer1()}</p>
                <p>{this.renderLayer2()}</p>
            </div>
        )
        }
}

export default Map


