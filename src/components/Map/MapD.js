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
        this.serLayerRed = this.setLayerRed.bind(this)
        this.setLayerGreen = this.setLayerGreen.bind(this)
        this.renderLayer1 = this.renderLayer1.bind(this)
        this.renderLayer2 = this.renderLayer2.bind(this)

        }
    
    // componentDidMount(){
    //     const map = new mapboxgl.Map({
    //         container: this.mapContainer,
    //         style: 'mapbox://styles/solz/ckcniloal0gm51inb4shmlxaj',
    //         center: [-3.711830, 40.438985],
    //         zoom: 14,
    //         // maxZoom: 16,
    //         minZoom: 13
    //         });
    //         map.on('load', function() {
    //             let RedPlaces = {}

    //         fetch('https://route19api.herokuapp.com/map/danger')
    //         .then(res => res.json())
    //         .then((data) => {
    //             RedPlaces = data
    //             console.log(RedPlaces)
    //             paintMapRed(RedPlaces)
    //         })

    //         function paintMapRed(RedPlaces){
    //         map.addSource('redzones', { type: 'geojson', data: RedPlaces, cluster: true, clusterMaxZoom: 16, // Max zoom to cluster points on
    //         clusterRadius: 70, // Radius of each cluster when clustering points (defaults to 50)
    //         });

    //         map.addLayer({ id: 'clusters', type: 'circle', source: 'redzones', filter: ['has', 'point_count'],
    //         paint: {
    //         // 'point_count': 10,
    //         'circle-opacity': 0.7,
    //         'circle-stroke-color': '#FF5630',
    //         'circle-stroke-width': 10,
    //         'circle-stroke-opacity': 0.5,
    //         'circle-color': [
    //         'step',
    //         ['get', 'point_count'],
    //         '#F4856C',
    //         5,
    //         '#FF5630',
    //         20,
    //         '#FF5630',
    //         ],
    //         'circle-radius': [
    //         'step',
    //         ['get', 'point_count'],
    //         2,
    //         3,
    //         4,
    //         10,
    //         8, 
    //         ]
    //         }
    //         });

    //         map.addLayer({
    //         id: 'red-cluster-count',
    //         type: 'symbol',
    //         source: 'redzones',
    //         filter: ['has', 'point_count'],
    //         layout: {
    //         'text-field': '{point_count_abbreviated}',
    //         'text-font': ['DIN Offc Pro Medium', 'Arial Unicode MS Bold'],
    //         'text-size': 20
    //         }
    //         });
    //         map.addLayer({
    //         id: 'unclustered-point',
    //         type: 'circle',
    //         source: 'redzones',
    //         filter: ['!', ['has', 'point_count']],
    //         circleMinZoom: 16,
    //         paint: {
    //         'circle-color': '#FF5630',
    //         // 'circle-opacity': 0.5,
    //         'circle-radius': 5,
    //         'circle-stroke-width': 1,
    //         'circle-stroke-color': '#FF5630'
    //         }
    //         });
    //         }
    //         let GreenPlaces = {}
    //         fetch('https://route19api.herokuapp.com/map/safe')
    //         .then(res => res.json())
    //         .then((data) => {
    //             GreenPlaces = data
    //             console.log(GreenPlaces)
    //             paintMapGreen(GreenPlaces)
    //         })

    //         function paintMapGreen(GreenPlaces){
    //         map.addSource('greenzones', { type: 'geojson', data: GreenPlaces, cluster: true, clusterMaxZoom: 16, // Max zoom to cluster points on
    //         clusterRadius: 70 // Radius of each cluster when clustering points (defaults to 50)
    //         });

    //         map.addLayer({ id: 'greenclusters', type: 'circle', source: 'greenzones', filter: ['has', 'point_count'],
    //         paint: {
    //         'circle-opacity': 0.7,
    //         'circle-stroke-color': '#00B8D9',
    //         'circle-stroke-width': 10,
    //         'circle-stroke-opacity': 0.5,
    //         'circle-color': [
    //         'step',
    //         ['get', 'point_count'],
    //         '#00B8D9',
    //         2,
    //         '#00B8D9',
    //         4,
    //         '#00B8D9',
    //         ],
    //         'circle-radius': [
    //         'step',
    //         ['get', 'point_count'],
    //         5,
    //         10,
    //         7,
    //         15,
    //         9, 
    //         ]
    //         }
    //         });

    //         map.addLayer({
    //         id: 'green-cluster-count',
    //         type: 'symbol',
    //         source: 'greenzones',
    //         filter: ['has', 'point_count'],
    //         layout: {
    //         'text-field': '{point_count_abbreviated}',
    //         'text-font': ['DIN Offc Pro Medium', 'Arial Unicode MS Bold'],
    //         'text-size': 20
    //         }
    //         });

    //         map.addLayer({
    //         id: 'green-unclustered-point',
    //         type: 'circle',
    //         source: 'greenzones',
    //         filter: ['!', ['has', 'point_count']],
    //         paint: {
    //         'circle-color': '#00B8D9',
    //         // 'circle-opacity': 0.5,
    //         'circle-radius': 7,
    //         'circle-stroke-width': 1,
    //         'circle-stroke-color': '#00B8D9'
    //         }
    //         });
    //         };
            
    //      var marker = new mapboxgl.Marker()
    //             .setLngLat([-3.708903, 40.431632])
    //             .addTo(map);

    //      var marker = new mapboxgl.Marker()
    //             .setLngLat([-3.713140, 40.435338])
    //             .addTo(map);

    //             let Route = {
    //                 'type': 'Feature',
    //                 'geometry': {
    //                 'type': 'LineString',
    //                 'coordinates':[
                         
    //                     [ -3.708903, 40.431632],
    //                     [ -3.710426, 40.431697],
    //                     [ -3.711735, 40.431738],
    //                     [ -3.712808, 40.431762],
    //                     [ -3.712497, 40.432170],
    //                     [ -3.713312, 40.432537],
    //                     [ -3.713140, 40.435338],
    //                 ]
    //                 }
    //                 }
    //         map.addSource('route', {
    //         'type': 'geojson',
    //         'data': Route
    //         });
    //         map.addLayer({
    //         'id': 'route',
    //         'type': 'line',
    //         'source': 'route',
    //         'layout': {
    //         'line-join': 'round',
    //         'line-cap': 'round'
    //         },
    //         'paint': {
    //         'line-color': '#0065ff',
    //         'line-width': 6,
    //         'line-dasharray': [0, 2]
    //         }
    //         });
    //     })
    // } 
            

/// ---- Map Update ---- ///
    componentDidUpdate(prevProps) {
        // Uso tipico (no olvides de comparar los props):
        if (this.props.layers !== prevProps.layers && this.props.layers.CircleLayer === true && this.props.layers.RouteLayer === true){
            const map = new mapboxgl.Map({
                container: this.mapContainer,
                style: 'mapbox://styles/solz/ckcniloal0gm51inb4shmlxaj',
                center: [this.state.lng, this.state.lat],
                zoom: this.state.zoom,
                // maxZoom: 16,
                minZoom: 13
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
                clusterRadius: 70, // Radius of each cluster when clustering points (defaults to 50)
                });

                map.addLayer({ id: 'clusters', type: 'circle', source: 'redzones', filter: ['has', 'point_count'],
                paint: {
                // 'point_count': 10,
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
                id: 'red-cluster-count',
                type: 'symbol',
                source: 'redzones',
                filter: ['has', 'point_count'],
                layout: {
                'text-field': '{point_count_abbreviated}',
                'text-font': ['DIN Offc Pro Medium', 'Arial Unicode MS Bold'],
                'text-size': 20
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
                fetch('https://route19api.herokuapp.com/map/safe')
                .then(res => res.json())
                .then((data) => {
                    GreenPlaces = data
                    console.log(GreenPlaces)
                    paintMapGreen(GreenPlaces)
                })

                function paintMapGreen(GreenPlaces){
                map.addSource('greenzones', { type: 'geojson', data: GreenPlaces, cluster: true, clusterMaxZoom: 16, // Max zoom to cluster points on
                clusterRadius: 70 // Radius of each cluster when clustering points (defaults to 50)
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
                id: 'green-cluster-count',
                type: 'symbol',
                source: 'greenzones',
                filter: ['has', 'point_count'],
                layout: {
                'text-field': '{point_count_abbreviated}',
                'text-font': ['DIN Offc Pro Medium', 'Arial Unicode MS Bold'],
                'text-size': 20
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
                };
                
             var marker = new mapboxgl.Marker()
                    .setLngLat([-3.708903, 40.431632])
                    .addTo(map);

             var marker = new mapboxgl.Marker()
                    .setLngLat([-3.713140, 40.435338])
                    .addTo(map);

                    let Route = {
                        'type': 'Feature',
                        'geometry': {
                        'type': 'LineString',
                        'coordinates':[
                             
                            [ -3.708903, 40.431632],
                            [ -3.710426, 40.431697],
                            [ -3.711735, 40.431738],
                            [ -3.712808, 40.431762],
                            [ -3.712497, 40.432170],
                            [ -3.713312, 40.432537],
                            [ -3.713140, 40.435338],
                        ]
                        }
                        }
                map.addSource('route', {
                'type': 'geojson',
                'data': Route
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
            })
                
        }
        else if(this.props.layers.CircleLayer === true && this.props.layers.RouteLayer === false){
                this.setLayerRed()
        }
        else if(this.props.layers.CircleLayer === false && this.props.layers.RouteLayer === true){
                this.setLayerGreen()
        }
        else{
            const map = new mapboxgl.Map({
                container: this.mapContainer,
                style: 'mapbox://styles/solz/ckcniloal0gm51inb4shmlxaj',
                center: [this.state.lng, this.state.lat],
                zoom: this.state.zoom,
                maxZoom: this.state.maxZoom,
                minZoom: this.state.minZoom
                });
        }
        //         let RedPlaces = {}

        //         fetch('https://route19api.herokuapp.com/map/danger')
        //         .then(res => res.json())
        //         .then((data) => {
        //             RedPlaces = data
        //             console.log(RedPlaces)
        //             paintMapRed(RedPlaces)
        //         })
    
        //         function paintMapRed(RedPlaces){
        //         map.addSource('redzones', { type: 'geojson', data: RedPlaces, cluster: true, clusterMaxZoom: 16, // Max zoom to cluster points on
        //         clusterRadius: 70, // Radius of each cluster when clustering points (defaults to 50)
        //         });
    
        //         map.addLayer({ id: 'clusters', type: 'circle', source: 'redzones', filter: ['has', 'point_count'],
        //         paint: {
        //         // 'point_count': 10,
        //         'circle-opacity': 0.7,
        //         'circle-stroke-color': '#FF5630',
        //         'circle-stroke-width': 10,
        //         'circle-stroke-opacity': 0.5,
        //         'circle-color': [
        //         'step',
        //         ['get', 'point_count'],
        //         '#F4856C',
        //         5,
        //         '#FF5630',
        //         20,
        //         '#FF5630',
        //         ],
        //         'circle-radius': [
        //         'step',
        //         ['get', 'point_count'],
        //         2,
        //         3,
        //         4,
        //         10,
        //         8, 
        //         ]
        //         }
        //         });
    
        //         map.addLayer({
        //         id: 'red-cluster-count',
        //         type: 'symbol',
        //         source: 'redzones',
        //         filter: ['has', 'point_count'],
        //         layout: {
        //         'text-field': '{point_count_abbreviated}',
        //         'text-font': ['DIN Offc Pro Medium', 'Arial Unicode MS Bold'],
        //         'text-size': 20
        //         }
        //         });
        //         map.addLayer({
        //         id: 'unclustered-point',
        //         type: 'circle',
        //         source: 'redzones',
        //         filter: ['!', ['has', 'point_count']],
        //         circleMinZoom: 16,
        //         paint: {
        //         'circle-color': '#FF5630',
        //         // 'circle-opacity': 0.5,
        //         'circle-radius': 5,
        //         'circle-stroke-width': 1,
        //         'circle-stroke-color': '#FF5630'
        //         }
        //         });
        //         }
        //         let GreenPlaces = {}
        //         fetch('https://route19api.herokuapp.com/map/safe')
        //         .then(res => res.json())
        //         .then((data) => {
        //             GreenPlaces = data
        //             console.log(GreenPlaces)
        //             paintMapGreen(GreenPlaces)
        //         })
    
        //         function paintMapGreen(GreenPlaces){
        //         map.addSource('greenzones', { type: 'geojson', data: GreenPlaces, cluster: true, clusterMaxZoom: 16, // Max zoom to cluster points on
        //         clusterRadius: 70 // Radius of each cluster when clustering points (defaults to 50)
        //         });
    
        //         map.addLayer({ id: 'greenclusters', type: 'circle', source: 'greenzones', filter: ['has', 'point_count'],
        //         paint: {
        //         'circle-opacity': 0.7,
        //         'circle-stroke-color': '#00B8D9',
        //         'circle-stroke-width': 10,
        //         'circle-stroke-opacity': 0.5,
        //         'circle-color': [
        //         'step',
        //         ['get', 'point_count'],
        //         '#00B8D9',
        //         2,
        //         '#00B8D9',
        //         4,
        //         '#00B8D9',
        //         ],
        //         'circle-radius': [
        //         'step',
        //         ['get', 'point_count'],
        //         5,
        //         10,
        //         7,
        //         15,
        //         9, 
        //         ]
        //         }
        //         });
    
        //         map.addLayer({
        //         id: 'green-cluster-count',
        //         type: 'symbol',
        //         source: 'greenzones',
        //         filter: ['has', 'point_count'],
        //         layout: {
        //         'text-field': '{point_count_abbreviated}',
        //         'text-font': ['DIN Offc Pro Medium', 'Arial Unicode MS Bold'],
        //         'text-size': 20
        //         }
        //         });
    
        //         map.addLayer({
        //         id: 'green-unclustered-point',
        //         type: 'circle',
        //         source: 'greenzones',
        //         filter: ['!', ['has', 'point_count']],
        //         paint: {
        //         'circle-color': '#00B8D9',
        //         // 'circle-opacity': 0.5,
        //         'circle-radius': 7,
        //         'circle-stroke-width': 1,
        //         'circle-stroke-color': '#00B8D9'
        //         }
        //         });
        //         };
                
        //      var marker = new mapboxgl.Marker()
        //             .setLngLat([-3.708903, 40.431632])
        //             .addTo(map);
    
        //      var marker = new mapboxgl.Marker()
        //             .setLngLat([-3.713140, 40.435338])
        //             .addTo(map);
    
        //             let Route = {
        //                 'type': 'Feature',
        //                 'geometry': {
        //                 'type': 'LineString',
        //                 'coordinates':[
                             
        //                     [ -3.708903, 40.431632],
        //                     [ -3.710426, 40.431697],
        //                     [ -3.711735, 40.431738],
        //                     [ -3.712808, 40.431762],
        //                     [ -3.712497, 40.432170],
        //                     [ -3.713312, 40.432537],
        //                     [ -3.713140, 40.435338],
        //                 ]
        //                 }
        //                 }
        //                 map.addSource('route', {
        //                 'type': 'geojson',
        //                 'data': Route
        //                 });
        //                 map.addLayer({
        //                 'id': 'route',
        //                 'type': 'line',
        //                 'source': 'route',
        //                 'layout': {
        //                 'line-join': 'round',
        //                 'line-cap': 'round'
        //                 },
        //                 'paint': {
        //                 'line-color': '#0065ff',
        //                 'line-width': 6,
        //                 'line-dasharray': [0, 2]
        //                 }
        //                 });
        // }
        
    }

/// ---- Layers Selections ---- ///

    manageLayers(){
        this.setLayerRed()
        this.setLayerGreen()
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
                map.addSource('redzones', { type: 'geojson', data: RedPlaces, cluster: true, clusterMaxZoom: 10, // Max zoom to cluster points on
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
                20,
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
    async setLayerGreen(){
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
                map.addSource('greenzones', { type: 'geojson', data: GreenPlaces, cluster: true, clusterMaxZoom: 30, // Max zoom to cluster points on
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
                {/* <p>{this.renderLayer1()}</p>
                <p>{this.renderLayer2()}</p> */}
            </div>
        )
        }
}

export default Map


