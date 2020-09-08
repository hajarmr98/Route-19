import React from 'react';
import styled from 'styled-components'
import NavLinks from './NavLinksFalse.js'
import MovileNavIcon from './LoggedLogo.svg'

const MyDesktopNavBar = styled.nav`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-evenly;
    align-items: center;

    background: #FAFBFC;
    color: white;

    height: 15vh;

    box-shadow: 0px 3px 30px rgba(0, 82, 204, 0.24);

.logo{
    font-size: 7vh;
    font-weight: bold;
    text-shadow: 3px 3px 3px black;
}
.nav-links{
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-evenly;
    align-items: center;

    width: 35vw;

    list-style: none;

    @media screen and (max-width: 768px){
        display: none;
    }
}
.link{
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;

    height: 15vh;

    color: #0065ff;

    padding:0 0.5rem;
    font-size: 2.5vh;
    text-decoration: none;

    &:focus{
        background: rgba(0, 0, 0, 0.1);
        outline:none;
    }
}
`
const MyMobileNavButton = styled.button`
    background: transparent;
    height: 6vh;
    width: 6vh;
    border: none;
    display: none;

    transition: transform 0.5s ease-in-out;
    transform: rotate(${ props => props.displayMobileNavBar ? ("180deg") : ("0deg") });

    &:focus {
        outline: none;
    }
    &::after {
        content: ' ';
        height: 2px;
        width: 2px;
        background: white;
        display: block;
    }
    &:hover:after{
        width: 100%;
    }

    @media screen and (max-width: 768px){
        display: block;
    }
`

const DesktopNavBar = (props) => {
    return (
        <div>   
            <MyDesktopNavBar>
                <div className="logo">LOGO!</div>
                    <NavLinks />
                
                <MyMobileNavButton
                displayMobileNavBar = {props.displayMobileNavBar}
                onClick = {props.toggleMobileNavBar }
                >
                    <img src={MovileNavIcon} alt="Menu" />
                </MyMobileNavButton>
            </MyDesktopNavBar>
            Desktop
            
        </div>
    );
};

export default DesktopNavBar;