import React from 'react';
import styled from 'styled-components'
import NavLinks from './NavLinksFalse.js'

const MyMobileNavBar = styled.nav`

    width: 75vw;
    background: #FAFBFC; 
    box-shadow: 0px 3px 30px rgba(25, 30, 35, 0.2);
    position: absolute;
    align-self: flex-end;
    border-radius: 0px 0px 0px 8px;
    transition: transform 0.5s;
    transform: translateX( ${ props => props.displayMobileNavBar ? ("0%") : ("calc(100% + 15px)") } );
    overflow-x: hidden;
    
.nav-links{
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-evenly;
    align-items: flex-end; 
    height: 100vh;
    list-style: none;
    left: 27.78%;
    right: 0%;
    top: 0%;
    background: #FAFBFC;
    border-radius: 0px 0px 0px 8px;
    /* margin-bottom: 90%; */
}
.nav-list{
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    align-items: flex-end; 
    margin-top: 3%;
    margin-bottom: 110%;
    height: 100vh;
    list-style: none;
}

.MenuHeader{
    display: flex;
    flex-direction: column;  
}
.link{
    /* font-size: 2.5vh; */
    text-decoration: none;
    padding-right: 16px;
    width: 160.5px;
    height: 8px;
    font-family: Roboto;
    font-size: 16px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: 0.63px;
    color: #4c5563;
}

.CloseMenu{
    position: absolute;
    left: 16.67px;
    right: 16.67px;
    top: 16.67px;
    bottom: 16.67px;
    width: 8%;
    background: #6B778C;
}
.UserProfile{
    display: flex;
    flex-direction: column;
    align-items: flex-end;  
}
.UserLogo{
    top: 3.75%;
    bottom: 87.5%;
    width: 56px;
    margin-top: 14px;
    margin-right: 16px;
}
.UserName{
    width: 128px;
    height: 12px;
    padding-right: 16px;
    padding-top: 15px;
    left: 216px;
    top: 105px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    text-align: right;
    letter-spacing: 1.25px;
    color: #333333;
}
.UserMail{
    width: 128px;
    left: 216px;
    padding-right: 16px;
    padding-top: 8px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    text-align: right;
    letter-spacing: 0.4px;
    color: #6B778C;
}

#Rectangle{
    width: 75vw;
    height: 1px;
    background: #C1C7D0;    
}
#MidRectangle{
    width: 69vw;
    margin-right: 14px;
    height: 1px;
    background: #C1C7D0;    
}
.Logout{
    display: flex;
    flex-direction: row;
    margin-right: 14px;
    margin-bottom: 5px;

    left: -18.52%;
    right: 23.7%;
    top: 8.33%;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    color: #6B778C;
}
.LogoutLink{
    text-decoration: none;
    padding-bottom: 5px;
    margin-right: 9px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    color: #6B778C;
}

.LinksContainer{
    background: #FAFBFC;
}
`

const MobileNavBar = (props) => {
    return (
        <MyMobileNavBar displayMobileNavBar = { props.displayMobileNavBar } >
            <NavLinks isMobileLink = { true } className="LinksContainer"/>
        </MyMobileNavBar>
    );
};

export default MobileNavBar;