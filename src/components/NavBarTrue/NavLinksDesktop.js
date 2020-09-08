import React, {useContext} from 'react';
import { Link } from 'react-router-dom'
import CloseIcon from './closeIcon.svg'
import UserIcon from './UserIcon.svg'
import LogoutIcon from './LogoutIcon2.svg'
import MenuContext, { MenuContextConsumer } from '../../contexts/ToggleMenu.js'
import {firebaseAuth} from '../../provider/authProvider.js'
import AppContext from '../../contexts/AppContext.js'
import styled from 'styled-components'


export default function NavLinksDesktop(props) {
    const {handleSignout,} = useContext(firebaseAuth)
    const DesktopLinks = styled.div`
        display: flex;
        margin-right: 3%;
        .links{
           margin: 0px 15px; 
        }
    `
    let tempTabIndex
    if (props.isMobileLink){
        tempTabIndex ="-1"
    }
    
    return (
            <DesktopLinks>
            <div className="links">
                <Link to="#" className="link" tabIndex={tempTabIndex}>Ajustes de perfil</Link>
            </div>
            <div className="links">
                <Link to="#" className="link" tabIndex={tempTabIndex}>Sobre el proyecto</Link>
            </div>
            <div className="links">
                <Link to="#" className="link" tabIndex={tempTabIndex}>Idiomas</Link>
            </div>
            {/* <div className="Logout"> */}
                {/* <AppContext.Consumer>
                {(context1) => 
                        <MenuContext.Consumer>
                            {(context2) => 
                                // <div onClick={()=>onClick(context1, context2)} className="LogoutLink" tabIndex={tempTabIndex}>Salir de mi cuenta</div>
                                 <div className="LogoutLink" tabIndex={tempTabIndex}>Salir de mi cuenta</div>
  
                            }
                        </MenuContext.Consumer>  
                }
                </AppContext.Consumer> */}
                {/* <div onClick={onClick} className="LogoutLink" tabIndex={tempTabIndex}>Salir de mi cuenta</div> */}
                {/* <img src={LogoutIcon} alt="Salir de mi cuenta" /> */}
            {/* </div> */}
            {/* </div> */}
        </DesktopLinks>
    );
};

