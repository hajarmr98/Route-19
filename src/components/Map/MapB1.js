import React, { Component } from 'react'
import mapboxgl from 'mapbox-gl';
import './Map.css'
import SubContext from '../../contexts/SubContext.js'
import Loading from '../Loading/Loading';
mapboxgl.accessToken = 'pk.eyJ1Ijoic29seiIsImEiOiJja2FpYWJobjIwbzVtMnNvNTdmNGF4NHJ2In0.HP3anVetw1Hw0MxhQJPagQ'


class Map extends Component {
    static contextType = SubContext.Consumer
    constructor(props) {
        super(props);
        this.state = {
        lng: -3.711830,
        lat: 40.438985,
        zoom: 14,
        maxZoom: 16,
        minZoom: 1,
        UserCoor: this.props.UserCoor,
        mapStyle: 'mapbox://styles/solz/ckcniloal0gm51inb4shmlxaj',
        Message1 : 'Capa rosa encendida',
        Message2 : 'Capa celeste encendida',
        Origin: this.props.Origin,
        Destiny : this.props.Destiny,
        Loader: false
        };
        this.serLayerRed = this.setLayerRed.bind(this)
        this.setLayerGreen = this.setLayerGreen.bind(this)
        this.renderLayer1 = this.renderLayer1.bind(this)
        this.renderLayer2 = this.renderLayer2.bind(this)
        }




/// ---- Map Inicialization ---- ///

componentDidMount(){
    function loadLoading(){
        if(!this.state.Loader){
            return <Loading/>
        }       
    }
    loadLoading()
    console.log("MAPA B1 DID MOUNT")
    const map = new mapboxgl.Map({
        container: this.mapContainer,
        style: 'mapbox://styles/solz/ckcniloal0gm51inb4shmlxaj',
        center: [this.state.lng, this.state.lat],
        zoom: this.state.zoom,
        minZoom: 1
        });
        let originCoordinates = this.state.Origin
        let destinyCoordinates = this.state.Destiny

        let userOriginLon = this.state.Origin[0]
        let userOriginLat = this.state.Origin[1]
        let userDestinyLon = this.state.Destiny[0]
        let userDestinyLat = this.state.Destiny[1]
        map.on('load', function() {

        // --- MARKER ORIGEN NUEVO --- //
        let markerO = new mapboxgl.Marker()
        .setLngLat(originCoordinates)
        .addTo(map);

         // --- MARKER DESTINO NUEVO --- //
         let markerD = new mapboxgl.Marker()
         .setLngLat(destinyCoordinates)
         .addTo(map);

         // --- CALCULATED ROUTE --- //
         let routePetition = `https://route19api.herokuapp.com/routes/origin=${userOriginLon},${userOriginLat}0&destination=${userDestinyLon},${userDestinyLat}`
         console.log("routePetition", routePetition)
        
        let newRoute ={}    
        fetch(routePetition)
            .then(res => res.json())
            .then((data) => {
                newRoute = data
                console.log("origen:", userOriginLon , ",", userOriginLat)
                console.log("routepetition", routePetition)
                console.log("respuesta de la api de rutas", newRoute)
                console.log("LAS RUTAS EN EL FETCH DEL DID MOUNT")
                paintRoute(newRoute)})
            .catch( err => console.log(err))

        function paintRoute(newRoute){
            console.log("RUTAS PINTADAS")
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
        map.addSource('redzones', { type: 'geojson', data: RedPlaces, cluster: true, clusterMaxZoom: 16, // Max zoom to cluster points on
        clusterRadius: 70, // Radius of each cluster when clustering points (defaults to 50)
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
    })
}


/// ---- Map Update ---- ///
    componentDidUpdate() {
        console.log("MAP B1 DID UPDATE")
        if (this.props.layers.RedLayer === true && this.props.layers.GreenLayer === true){           
            const map = new mapboxgl.Map({
                container: this.mapContainer,
                style: 'mapbox://styles/solz/ckcniloal0gm51inb4shmlxaj',
                center: [this.state.lng, this.state.lat],
                zoom: this.state.zoom,
                // maxZoom: 16,
                minZoom: this.state.minZoom
                });
                
                let userCoordinates = this.state.UserCoor
                let originCoordinates = this.state.Origin
                let destinyCoordinates = this.state.Destiny

                let userOriginLon = this.state.Origin[0]
                let userOriginLat = this.state.Origin[1]
                let userDestinyLon = this.state.Destiny[0]
                let userDestinyLat = this.state.Destiny[1]
                
                map.on('load', function() {
                console.log('las coor que le llegan a mapa b del usuario son:', userCoordinates)
                
                
                // --- MARKER ORIGEN NUEVO --- //
                let markerO = new mapboxgl.Marker()
                .setLngLat(originCoordinates)
                .addTo(map);
        
                 // --- MARKER DESTINO NUEVO --- //
                let markerD = new mapboxgl.Marker()
                .setLngLat(destinyCoordinates)
                .addTo(map);


                 // --- ROUTE --- //
                let routePetition = `https://route19api.herokuapp.com/routes/origin=${userOriginLon},${userOriginLat}0&destination=${userDestinyLon},${userDestinyLat}`
                
                let newRoute ={}

                fetch(routePetition)
                    .then(res => res.json())
                    .then((data) => {
                        newRoute = data
                        console.log("origen:", userOriginLon , ",", userOriginLat)
                        console.log("routepetition", routePetition)
                        console.log("respuesta de la api de rutas", newRoute)
                        console.log("MAP B1 RUTA EN DID UPDATE")
                        paintRoute(newRoute)
                        
                    })

                function paintRoute(newRoute){
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
        
                //  --- RED LAYER --- //
                let RedPlaces = {}
                fetch('https://route19api.herokuapp.com/routes/danger')
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

                //  --- GREEN LAYER --- //
                let GreenPlaces = {}
                fetch('https://route19api.herokuapp.com/routes/safe')
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
            })   
        }
        else if(this.props.layers.RedLayer === true && this.props.layers.GreenLayer === false){
                this.setLayerRed()
                console.log("MAPA B DID UPDATE ELSE IF 1", this.props.layers.GreenLayer)
        }
        else if(this.props.layers.RedLayer === false && this.props.layers.GreenLayer === true){
                this.setLayerGreen()
                console.log("MAPA B DID UPDATE ELSE IF 2", this.props.layers.RedLayer)
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

            let userCoordinates = this.state.UserCoor
            let originCoordinates = this.state.Origin
            let destinyCoordinates = this.state.Destiny

            let userOriginLon = this.state.Origin[0]
            let userOriginLat = this.state.Origin[1]
            let userDestinyLon = this.state.Destiny[0]
            let userDestinyLat = this.state.Destiny[1]

            map.on('load', function() {
            
            // --- MARKER ORIGEN NUEVO --- //
            let markerO = new mapboxgl.Marker()
            .setLngLat(originCoordinates)
            .addTo(map);
    
            // --- MARKER DESTINO NUEVO --- //
            let markerD = new mapboxgl.Marker()
            .setLngLat(destinyCoordinates)
            .addTo(map);

            let routePetition = `https://route19api.herokuapp.com/routes/origin=${userOriginLon},${userOriginLat}0&destination=${userDestinyLon},${userDestinyLat}`

            let newRoute ={}

            fetch(routePetition)
                .then(res => res.json())
                .then((data) => {
                    newRoute = data
                    console.log("origen:", userOriginLon , ",", userOriginLat)
                    console.log("routepetition", routePetition)
                    console.log("respuesta de la api de rutas", newRoute)
                    paintRoute(newRoute)
                    
                })

            function paintRoute(newRoute){
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
            })
        }
    }

/// ---- Layers Selections ---- ///
    setLayerRed(){  
        console.log("esto es setLayer1",this.props.layers.RedLayer)
        if(this.props.layers.RedLayer === true){
            const map = new mapboxgl.Map({
                container: this.mapContainer,
                style: 'mapbox://styles/solz/ckcniloal0gm51inb4shmlxaj',
                center: [this.state.lng, this.state.lat],
                zoom: this.state.zoom
                });

                let userCoordinates = this.state.UserCoor
                let originCoordinates = this.state.Origin
                let destinyCoordinates = this.state.Destiny

                let userOriginLon = this.state.Origin[0]
                let userOriginLat = this.state.Origin[1]
                let userDestinyLon = this.state.Destiny[0]
                let userDestinyLat = this.state.Destiny[1]

                map.on('load', function() {

                
                // --- MARKER ORIGEN NUEVO --- //
                let markerO = new mapboxgl.Marker()
                .setLngLat(originCoordinates)
                .addTo(map);
        
                // --- MARKER DESTINO NUEVO --- //
                let markerD = new mapboxgl.Marker()
                .setLngLat(destinyCoordinates)
                .addTo(map);

                let routePetition = `https://route19api.herokuapp.com/routes/origin=${userOriginLon},${userOriginLat}0&destination=${userDestinyLon},${userDestinyLat}`

                let newRoute ={}

                fetch(routePetition)
                    .then(res => res.json())
                    .then((data) => {
                        newRoute = data
                        console.log("origen:", userOriginLon , ",", userOriginLat)
                        console.log("routepetition", routePetition)
                        console.log("respuesta de la api de rutas", newRoute)
                        paintRoute(newRoute)
                        
                    })

                function paintRoute(newRoute){
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

                //  --- RED LAYER --- //
                let RedPlaces = {}
                fetch('https://route19api.herokuapp.com/routes/danger')
                .then(res => res.json())
                .then((data) => {
                    RedPlaces = data
                    console.log(RedPlaces)
                    paintMapRed(RedPlaces)
                })

                function paintMapRed(RedPlaces){
                map.addSource('redzones', { type: 'geojson', data: RedPlaces, cluster: true, clusterMaxZoom: 16, // Max zoom to cluster points on
                clusterRadius: 70 // Radius of each cluster when clustering points (defaults to 50)
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
        }
    }
    setLayerGreen(){
        console.log("esto es setLayer",this.props.layers.GreenLayer)
        if(this.props.layers.GreenLayer === true){
        const map = new mapboxgl.Map({
            container: this.mapContainer,
            style: 'mapbox://styles/solz/ckcniloal0gm51inb4shmlxaj',
            center: [ this.state.lng, this.state.lat ],
            zoom: this.state.zoom
            });
            let userCoordinates = this.state.UserCoor
            let originCoordinates = this.state.Origin
            let destinyCoordinates = this.state.Destiny

            let userOriginLon = this.state.Origin[0]
            let userOriginLat = this.state.Origin[1]
            let userDestinyLon = this.state.Destiny[0]
            let userDestinyLat = this.state.Destiny[1]

            map.on('load', function() {
            
            // --- MARKER ORIGEN NUEVO --- //
            let markerO = new mapboxgl.Marker()
            .setLngLat(originCoordinates)
            .addTo(map);
    
            // --- MARKER DESTINO NUEVO --- //
            let markerD = new mapboxgl.Marker()
            .setLngLat(destinyCoordinates)
            .addTo(map);

            let routePetition = `https://route19api.herokuapp.com/routes/example/origin=${userOriginLon},${userOriginLat}0&destination=${userDestinyLon},${userDestinyLat}`

            let newRoute ={}

            fetch(routePetition)
                .then(res => res.json())
                .then((data) => {
                    newRoute = data
                    console.log("origen:", userOriginLon , ",", userOriginLat)
                    console.log("routepetition", routePetition)
                    console.log("respuesta de la api de rutas", newRoute)
                    paintRoute(newRoute)
                    
                })

            function paintRoute(newRoute){
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

            //  --- GREEEN LAYER --- //
            let GreenPlaces = {}
            fetch('https://route19api.herokuapp.com/routes/safe')
            .then(res => res.json())
            .then((data) => {
                GreenPlaces = data
                console.log(GreenPlaces)
                paintMapGreen(GreenPlaces)
            })

            function paintMapGreen(GreenPlaces){
            map.addSource('greenzones', { type: 'geojson', data: GreenPlaces, cluster: true, clusterMaxZoom: 30, // Max zoom to cluster points on
            clusterRadius: 70 // Radius of each cluster when clustering points (defaults to 50)
            });

            map.addLayer({ id: 'greenclusters', type: 'circle', source: 'greenzones', filter: ['has', 'point_count'],
            paint: {
            'circle-opacity': 0.7,
            'circle-stroke-color': '#00B8D9',
            'circle-stroke-width': 10,
            'circle-stroke-opacity': 0.5,
            'circle-color': [
                'step',['get', 'point_count'],'#00B8D9',2,'#00B8D9',4,'#00B8D9',
            ],
            'circle-radius': [
                'step',['get', 'point_count'],5,10,7,15,9, 
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
            });
        }
        else{
            const map = new mapboxgl.Map({
                container: this.mapContainer,
                style: 'mapbox://styles/solz/ckcniloal0gm51inb4shmlxaj',
                center: [ this.state.lng, this.state.lat ],
                zoom: this.state.zoom
                });
            let userCoordinates = this.state.UserCoor
            let originCoordinates = this.state.Origin
            let destinyCoordinates = this.state.Destiny

            let userOriginLon = this.state.Origin[0]
            let userOriginLat = this.state.Origin[1]
            let userDestinyLon = this.state.Destiny[0]
            let userDestinyLat = this.state.Destiny[1]

            map.on('load', function() {
            
            // --- MARKER ORIGEN NUEVO --- //
            let markerO = new mapboxgl.Marker()
            .setLngLat(originCoordinates)
            .addTo(map);
    
            // --- MARKER DESTINO NUEVO --- //
            let markerD = new mapboxgl.Marker()
            .setLngLat(destinyCoordinates)
            .addTo(map);

            let routePetition = `https://route19api.herokuapp.com/routes/origin=${userOriginLon},${userOriginLat}0&destination=${userDestinyLon},${userDestinyLat}`

            let newRoute ={}

            fetch(routePetition)
                .then(res => res.json())
                .then((data) => {
                    newRoute = data
                    console.log("origen:", userOriginLon , ",", userOriginLat)
                    console.log("routepetition", routePetition)
                    console.log("respuesta de la api de rutas", newRoute)
                    paintRoute(newRoute)
                    
                })

            function paintRoute(newRoute){
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
            })
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
        </div>
)
}
}
export default Map


