import React, { Component } from 'react'
import styled from 'styled-components'
// import SearchDestiny from '../PlaceSearcher/PlaceSearcher.js'
import './SearchBar.css'
import InputOrigin from './InputOrigin.js'
import InputDestiny from './InputDestiny.js'
import SearchButton from '../SearchDestinyBtn/SearchDestinyBtn2.js'
import { AppContextConsumer } from '../../contexts/AppContext.js'
import SubContext from '../../contexts/SubContext.js'

const MySearchBar = styled.form`
    display: flex;
    flex-direction: column;
    background-color: #FAFBFC;
    padding: 15px 25% 6% 25%;
    position: inherit;
    height: 100%;
    z-index: 0;
    margin: auto;
    @media screen and (max-width: 768px){
        padding: 30px 5% 0% 5%;
    }

.SearchOrigin{
    position: relative;
    width: 100%;
    height: 40px;
    border: 1px solid #0065FF;
    background-color: #ffffff;
    box-sizing: border-box;
    border-radius: 1px;
    margin-bottom: 5%;
}

.SearchDestiny{
    width: 100%;
    height: 40px;
    left: 16px;
    top: 35px;
    border: 1px solid #0065FF;
    background-color: #ffffff;
    box-sizing: border-box;
    border-radius: 1px;
    margin-bottom: 3%;
}

.SearchDestiny:focus, .SearchOrigin:focus{
    border: 2px solid #0052cc;
    outline: none;
}

.DestinyLabel, .OriginLabel{
    color: #0065ff;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: bold;
    text-align: left;
    margin-bottom: 2px;
}
`


class SearchBar extends Component {
    // static contextType = AppContextConsumer
    constructor(){
        super()
        this.state ={
            Addresses: [],
            OriginCoordinate:[],
            DestinyCoordinate: []
        }
        this.getOrigin = this.getOrigin.bind(this)
        this.getDestiny = this.getDestiny.bind(this)
    }

    getOrigin(OriginCoordinate){
        this.setState({
            ...this.state,
            OriginCoordinate
        })
    }

    getDestiny(DestinyCoordinate){
        this.setState({
            ...this.state,
            DestinyCoordinate
        })
    }

    render() {
        return (
            <MySearchBar>
                <label htmlFor="origin" className="OriginLabel">Origen</label>
                    <InputOrigin className="SearchOrigin" getOrigin={this.getOrigin}/>
                <label htmlFor="destiny" className="DestinyLabel">Destino</label>
                    <InputDestiny className="SearchDestiny" getDestiny={this.getDestiny}/>
                    <SearchButton className="SearchBtn" />
            </MySearchBar>
        )
    }
}
export default SearchBar
