import React from 'react';
import styled from 'styled-components'
import NavLinks from './NavLinks.js'
import NavLinksDesktop from './NavLinksDesktop.js'
import MovileNavIcon from './LoggedLogo.svg'


const MyDesktopNavBar = styled.nav`
    display: flex;
    flex-direction: row;
    text-align-last: right;
    justify-content: space-between;
    background: #FAFBFC;
    color: white;

    box-shadow: 0px 3px 3px rgba(0, 82, 204, 0.24);

.logo{
    width: 6%;
    margin: 0.5% 0% 0.5% 2%;
    @media screen and (max-width: 768px){
    width: 14%;
    margin: 2% 0% 2% 5%;
    }
}
.nav-links{
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-evenly;
    align-items: center;

    width: 35vw;

    list-style: none;

    @media screen and (max-width: 768px){
        display: flex;
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
    height: 83.3%;
    width: 83.3%;
    border: none;
    display: none;
    margin-right:4.4%;
    margin-top: 1%;

    /* transition: transform 0.5s ease-in-out;
    transform: rotate(${ props => props.displayMobileNavBar ? ("180deg") : ("0deg") }); */

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
                <img src="./images/logo.svg" alt="logo" className="logo"/>
                    {/* <NavLinksDesktop /> */}
                <MyMobileNavButton displayMobileNavBar = {props.displayMobileNavBar} onClick = {props.toggleMobileNavBar}>
                    <img src={MovileNavIcon} alt="Menu" />
                </MyMobileNavButton>
            </MyDesktopNavBar>
            {/* Desktop */}
            
        </div>
    );
};

export default DesktopNavBar;