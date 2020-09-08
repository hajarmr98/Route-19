import React, { Component } from 'react'
import '../../airport.json'


//  /// SELECT DEPARTURE & ARRIVAL ///
// const cities = [];
// // const search1 = document.querySelector("#departureAirport");
// // const depOptions = document.querySelector('#departureOptions');

// // -- DEPARTURE -- //
// fetch('../../airport.json')
//   .then(data => data.json())
//   .then(data => {
//       cities.push(...data)
//       console.log("array", cities)
//   });

// function findMatches(wordToMatch, cities) {
//   wordToMatch = wordToMatch.split(",");
//   return cities.filter(place => {
//     if (wordToMatch.length === 1) {
//       const regex = new RegExp(wordToMatch[0], 'gi');
//       return (place.city.match(regex) || place.iata.match(regex));
//     } else {
//       const regex0 = new RegExp(wordToMatch[0], 'gi');
//       const regex1 = new RegExp(wordToMatch[1].substr(1, wordToMatch[1].length), 'gi');
//       return (place.city.match(regex0) && place.iata.match(regex1));
//     }
//   });
// }

// function displayMatches(e) {
//   const html = findMatches(e.target.value, cities).map(place => {
//     if (place.iata !== "" ) {
//       return <div value={place.city}/>
//     }
//   }).join('');
// //   depOptions.style.display = "block";
// //   depOptions.innerHTML = html;
// }



 class SearchDestiny extends Component{
     constructor(){
         super()
         this.state ={
            cities:[]
         }
           this.displayMatches = this.displayMatches.bind(this) 
           this.findMatches = this.findMatches.bind(this)
     }

// async componentDidMount(){
// let cities = []
// fetch('../../airport.json')
//   .then(data => {
//     console.log(data)
//     data.json()

//   }
    
//     )
//   .then(data => {
//       cities.push(...data)
//       console.log("array", cities)
//   });
//   this.setState({
//     ...this.state,
//     cities
// })
// }
     

findMatches(wordToMatch, cities) {
  wordToMatch = wordToMatch.split(",");
  return cities.filter(place => {
    if (wordToMatch.length === 1) {
      const regex = new RegExp(wordToMatch[0], 'gi');
      return (place.city.match(regex) || place.iata.match(regex));
    } else {
      const regex0 = new RegExp(wordToMatch[0], 'gi');
      const regex1 = new RegExp(wordToMatch[1].substr(1, wordToMatch[1].length), 'gi');
      return (place.city.match(regex0) && place.iata.match(regex1));
    }
  });
}

displayMatches(e) {
  const html = this.findMatches(e.target.value, this.cities).map(place => {
    if (place.iata !== "" ) {
        
      return <div value={place.city}/>
    }
  }).join('');
}

 setInput(){
   let mock = {
     cities:[
    {
      "id": "1",
      "name": "Goroka",
      "city": "Goroka",
      "country": "Papua New Guinea",
      "iata": "GKA",
      "icao": "AYGA",
      "latitude": "-6.081689",
      "longitude": "145.391881",
      "altitude": "5282",
      "timezone": "10",
      "dst": "U",
      "tz": "Pacific/Port_Moresby"
    },
    {
      "id": "2",
      "name": "Madang",
      "city": "Madang",
      "country": "Papua New Guinea",
      "iata": "MAG",
      "icao": "AYMD",
      "latitude": "-5.207083",
      "longitude": "145.7887",
      "altitude": "20",
      "timezone": "10",
      "dst": "U",
      "tz": "Pacific/Port_Moresby"
    }]}
    let cities = []
    console.log(mock)
     fetch(mock)
    .then(res => {
      res.json()
      console.log(res)
      
    })
    .then(data => {
        cities.push(...data)
        console.log("array", cities)
    });
  // //   this.setState({
  // //     ...this.state,
  // //     cities
  // // })
    return <input type="text" autoComplete="off" placeholder="Destino" onKeyUp={(e) => this.displayMatches(e)}/>
}

    render(){
        return (
            <div>
                {this.setInput()}
            </div>
        );
    }
}

export default SearchDestiny
