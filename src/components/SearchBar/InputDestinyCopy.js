import React, {Component} from 'react'
import Autosuggest from 'react-autosuggest';
import OptionsBox from './OptionsBox.js'
import styled from 'styled-components'
import theme from './theme.css'
import UserCoor from '../../contexts/UserCoor.js'

const AutosuggestContainer = styled.input`
    .SearchOrigin{
        width: 100%;
        height: 40px;
        /* left: 16px;
        top: 35px; */
        color: red;
        background-color: red;
        border: 1px solid #0065FF;
        background-color: #ffffff;
        box-sizing: border-box;
        border-radius: 1px;
        margin-bottom: 5%;
}
`;
 
// Imagine you have a list of languages that you'd like to autosuggest.
const languages = [
  {
    name: 'C',
    year: 1972
  },
  {
    name: 'Elm',
    year: 2012
  },
  {
    name: 'Elmo',
    year: 2012
  },
  {
    name: 'Elma',
    year: 2012
  },
  {
    name: 'Elmi',
    year: 2012
  }
];

let Addresses = {}

fetch('./MadridStreets.json')
    .then( res => res.json())
    .then (data =>{ 
        Addresses = data
        console.log(Addresses)
        })

// Teach Autosuggest how to calculate suggestions for any given input value.
const getSuggestions = value => {
  const inputValue = value.trim().toLowerCase().split("");
  const inputLength = inputValue.length;
  console.log("inputLength", inputLength)
  console.log("inputValue", inputValue)

  return inputLength === 0 ? [] : Addresses.slice(0,100).filter(item =>{
    if (inputValue.length === 1) {
        const regex = new RegExp(inputValue[0], 'gi');
        // const regex2 = /([\w\ \W]*)/gi
        console.log("resultado1", item.address.match(regex))
        return (item.address.match(regex).slice(0,3));
      } else {
        const regex0 = new RegExp(inputValue[0], 'i');
        const regex1 = new RegExp(inputValue[1].substr(1, inputValue[1].length), 'gi');
        // const regex1 = /([\w\ \W]*)/gi
        console.log("resultado", item.address.match(regex1))
        if(item.address.match(regex1)!== null){
          return (item.address.match(regex1).slice(0,3));
        }
        
      }
  }
    // item.address.toLowerCase ().slice(0, inputLength) === inputValue
  );
};
 
// When suggestion is clicked, Autosuggest needs to populate the input
// based on the clicked suggestion. Teach Autosuggest how to calculate the
// input value for every given suggestion.
const getSuggestionValue = suggestion => {
  let address = suggestion.address
  let city = suggestion.city
  let comma = ", "
  
  return address + comma + city
}
 
// Use your imagination to render suggestions.
const renderSuggestion = suggestion => {
    // this.setState({...this.state, UserCoor: suggestion})
    return <div className="SearchOptions" value={suggestion.coordinates}>{suggestion.address}, {suggestion.city}</div>
}

const renderInputComponent = inputProps => (
    <div className="inputContainer">
      <img className="icon" src="./images/DestinyIcon.svg" />
      <input {...inputProps} />
    </div>
  );

// const getCoordinates = () => {

// }
 
class InputDestiny extends Component {
    static contextType = UserCoor
  constructor() {
    super();
    this.state = {
      value: '',
      suggestions: [],
    };
    // this.getUserCoor = this.getUserCoor.bind(this)
  }
 
  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue
    });
  };
 
  // Autosuggest will call this function every time you need to update suggestions.
  // You already implemented this logic above, so just use it.
  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value)
    });
  };
 
  // Autosuggest will call this function every time you need to clear suggestions.
  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  getCoordinates = (e) => {
    fetch('./MadridStreets.json')
    .then( res => res.json())
    .then (data =>{ 
        Addresses = data
        console.log(Addresses)
        })
    console.log("el valor de lo que selecciono", e.target.value)
  }
  
  render() {
    const { value, suggestions } = this.state;
 
    // Autosuggest will pass through all these props to the input.
    const inputProps = {
      placeholder: 'Buscar destino',
      value,
      onChange: this.onChange
    };
    // function onSuggestionSelected(event, { suggestion, suggestionValue, suggestionIndex, sectionIndex, method }){
    //     //
    // }

    // onSuggestionSelected()
 
    // Finally, render it!

  

    return (
        <div>
            <Autosuggest
                // theme={theme}
                suggestions={suggestions}
                onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                onSuggestionSelected={(e) => this.getCoordinates(e)}
                getSuggestionValue={getSuggestionValue}
                renderSuggestion={renderSuggestion}
                renderInputComponent={renderInputComponent}
                inputProps={inputProps}
            />
        </div>
    );
  }
}

export default InputDestiny