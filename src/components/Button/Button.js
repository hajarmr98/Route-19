import React from 'react'
import Styled from 'styled-components'

export default function Button(props) {
    const {text, action, style} = props
    const bgColor = '#0065ff'

    const StyledButton = Styled.button`
        height: 40px;
        width: 50%;
        margin: 2%;
        background-color: ${ style === 'light' ? '#fff' : bgColor };
        color: ${ style === 'light' ? '#0065ff' : 'white'};
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
            background-color: ${ style === 'light' ? '#f1f1f1' : '#0052CC' } ;
            box-shadow: ${ style === 'disabled' ? 'none' : '3px 3px 3px 0px rgba(0,0,0,0.2);' };
            margin-top: ${ style === 'disabled' ? '2%' : '1.7%' };
            margin-bottom: ${ style === 'disabled' ? '2%' : '2.3%' };  
        }

        &:disabled{
            height: 40px;
            width: 50%;
            margin: 2%;
            background-color: grey;
            color: '#fff';
            font-weight: 600;
            letter-spacing: 1px;
            border: none;
            box-sizing: border-box;
            border-radius: 8px;
            align-self: center;
            @media screen and (max-width: 768px){
                height: 40px;
                width: 80%;
                font-size: 12px;
        }
        }
            &:disabled:hover {
                cursor: not-allowed;
            }
    `
    
        // const checkActive = (action, style, text) => {
        //     if(style === 'disable'){
        //         return <DisabledButton />
        //     }
        //     else{
        //         return <StyledButton onClick={action}>{text}</StyledButton>
        //     }

        // }
           
        

    return (
        style === 'disabled' ? <StyledButton onClick={action} disabled>{text}</StyledButton> : <StyledButton onClick={action}>{text}</StyledButton>
    )
}


