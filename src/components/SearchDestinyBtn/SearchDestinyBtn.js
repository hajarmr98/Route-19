import React, { Component } from 'react';
import SearchIcon from './SearchIcon.svg';
import styled from 'styled-components';
import AppContext from '../../contexts/AppContext.js';
import SubContext from '../../contexts/SubContext';
import Button from '../Button/Button';

const ButtonSearchContainer = styled.div`
        width:100%;
        padding: 20px 30% 0px 30%;
        height: 120px;
        background-color: #FAFBFC;
        box-shadow: 0px 4px 4px rgba(0, 82, 204, 0.2);
        border-radius: 0px 0px 8px 8px ;
        text-align: center;
        @media screen and (max-width: 768px){
            padding: 20px 18% 0px 18%;
            height: 92px;
        } 
`

const ButtonSearch = styled.div`
        display: flex;
        flex-direction: row;
        justify-content: center;
        width: 100%;
        border-radius: 4px;
        border: solid 0.5px #0065ff;
        background-color: #0065ff;
    p{
        font-family: Roboto;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        font-size: 1em;
        line-height: 1.5;
        letter-spacing: 0.63px;
        color: #fafbfc;
        margin: 3% 0%;
    }

    img{
        width: 7%;
        margin-right: 4.5px;
    }
`


class SearchDestinyBtn extends Component {
    static contextType = AppContext
    constructor(){
        super()
        this.state = {
            nextMode: 10
        }
    }

    render() {
        return (
                <SubContext.Consumer>
                    {(context) =>
                    <ButtonSearchContainer>
                        <Button  text={'Buscar destino'} action={() => context.setMode(this.state.nextMode)} style={{minWidht: '20%'}}/ >
                        {/* <img src={SearchIcon} alt="Buscar destino" /> */}
                    </ButtonSearchContainer>
                    }
                </SubContext.Consumer>
 
        )
    }
}

export default SearchDestinyBtn
