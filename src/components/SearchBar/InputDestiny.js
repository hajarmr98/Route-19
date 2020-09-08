import React, {Component} from 'react'
import Autosuggest from 'react-autosuggest';
import OptionsBox from './OptionsBox.js'
import styled from 'styled-components'
import SubContext from '../../contexts/SubContext.js'

import UserCoor from '../../contexts/UserCoor.js'

const AutosuggestContainer = styled.div`
      width: 40%;
      height: 40px;
      color: #000;
      border: 1px solid #0065FF;
      background-color: #ffffff;
      box-sizing: border-box;
      border-radius: 1px;
      margin: auto;
      margin-bottom: 30px;
      @media screen and (max-width: 768px){
        width: 100%; 
      }
`;

    let Addresses = {}

    fetch('./MadridStreets.json')
        .then( res => res.json())
        .then (data =>{ 
            Addresses = data
            console.log(Addresses)
            })
    
    // Teach Autosuggest how to calculate suggestions for any given input value.
    const getSuggestions = value => {
      const inputValue = value.trim().toLowerCase().split(",");
      const inputLength = inputValue.length;

      return inputLength === 0 ? [] : Addresses.filter(item =>{
        if (inputValue.length === 1) {
            const regex = new RegExp(inputValue[0], 'gi');
            return (item.address.match(regex));
          } else {
            const regex0 = new RegExp(inputValue[0], 'gi');
            const regex1 = new RegExp(inputValue[1].substr(1, inputValue[1].length), 'gi');
            return (item.address.match(regex0));
          }
      }
      );
    };

const getSuggestionValue = suggestion => {
  let address = suggestion.address
  let city = suggestion.city
  let comma = ", "
  
  return address + comma + city
}
function getOptionCoordinates(e){
  console.log(e.target.value)

}

// como limitar la cantidad de resultados?
const renderSuggestion = suggestion => {
    
    // this.setState({...this.state, UserCoor: suggestion})
    return <div className="SearchOptionsDest" onClick={(e)=> getOptionCoordinates(e)} value={suggestion.coordinates}>{suggestion.address}, {suggestion.city}</div>
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
  static contextType = SubContext.Consumer
    // static contextType = UserCoor
  constructor() {
    super();
    this.state = {
      value: '',
      suggestions: [],
    };
    this.onSuggestionSelected = this.onSuggestionSelected.bind(this)
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

  onSuggestionSelected(event, { suggestion, suggestionValue, suggestionIndex, sectionIndex, method }){
    console.log(this.context)
    console.log("destiny funcion que manda el context")
    this.context.getDestinyCoor(suggestion.coordinates)
  }
 


  render() {
    const { value, suggestions } = this.state;
 
    // Autosuggest will pass through all these props to the input.
    const inputProps = {
      placeholder: 'Introduce una dirección',
      value,
      onChange: this.onChange
    };

    return (
      <AutosuggestContainer>
        <SubContext.Consumer>
          {(context) =>  
            <Autosuggest
                suggestions={suggestions}
                onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                onSuggestionSelected={this.onSuggestionSelected}
                getSuggestionValue={getSuggestionValue}
                renderSuggestion={renderSuggestion}
                renderInputComponent={renderInputComponent}
                inputProps={inputProps}
            />
          }
            </SubContext.Consumer>
        </AutosuggestContainer>
    );
  }
}

export default InputDestiny