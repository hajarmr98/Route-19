import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import SearchIcon from './SearchIcon.svg'
import styled from 'styled-components'
import AppContext from '../../contexts/AppContext.js'
import SubContext from '../../contexts/SubContext';

const ButtonSearch = styled.div`
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        height: 40px;
        width: 40%;
        margin: 2%;
        background-color: #0065ff;
        color: #fff;
        font-weight: 600;
        letter-spacing: 1px;
        border: none;
        box-sizing: border-box;
        border-radius: 8px;
        align-self: center;

        transition-duration: 0.4s;
        transition-timing-function: ease-in-out;
        @media screen and (max-width: 768px){
            height: 40px;
            width: 80%;
            font-size: 12px;
        }

        &:hover {
            background-color: #0052CC;
            box-shadow: 3px 3px 3px 0px rgba(0,0,0,0.2);
            margin-top: 1.7%;
            margin-bottom: 2.3%; 
        }
    p{
        font-family: Roboto;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        font-size: 1em;
        /* line-height: 1.5; */
        letter-spacing: 0.63px;
        color: #fafbfc;
        margin: 3% 0%;
    }

    img{
        width: 8%;
        margin-right: 7.5px;
        @media screen and (max-width: 768px){
            width: 8%;
        }
    }
`


export default class SearchDestinyBtn extends Component {
    static contextType = AppContext
    constructor(){
        super()
        this.state = {
            nextMode: 11
        }
    }
    // sendMode(mode){
    //     console.log("click!")
    //     console.log(this.state.nextMode)
    //     mode = this.state.nextMode
    //     this.context.changeMode(mode)
    // }
    render() {
        return (
                <SubContext.Consumer>
                    {(context) =>
                        <ButtonSearch variant="contained" color="primary" className="SearchDestinyBtn" onClick={() => context.setMode(this.state.nextMode)}>
                            <img src={SearchIcon} alt="Buscar destino" />
                            <p>Buscar destino</p>
                        </ButtonSearch>
                    }
                </SubContext.Consumer>
 
        )
    }
}


