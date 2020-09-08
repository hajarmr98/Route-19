import React, {useContext} from 'react';
import { Link } from 'react-router-dom'
import CloseIcon from './closeIcon.svg'
import UserIcon from './UserIcon.svg'
import LogoutIcon from './LogoutIcon2.svg'
import MenuContext, { MenuContextConsumer } from '../../contexts/ToggleMenu.js'
import {firebaseAuth} from '../../provider/authProvider.js'
import AppContext from '../../contexts/AppContext.js'


const NavLinks = (props) => {
const {handleSignout,} = useContext(firebaseAuth)

    let tempTabIndex
    if (props.isMobileLink){
        tempTabIndex ="-1"
    }
    function onClick(context1, context2) {
        console.log("context que le llega a navlinks", context1)
        handleSignout();
        context1.setMode(5);
        context2.toggleHandler()
      }
    return (
        <div className="nav-links">
            <div className="MenuHeader">
                <MenuContext.Consumer>
                {(context) => 
                    <img src={CloseIcon} alt="Cerrar menú" className="CloseMenu" 
                    onClick={() => context.toggleHandler()}/>
                    }
                </MenuContext.Consumer>
            <div className="UserProfile">
                <img src={UserIcon} alt="Menú" className="UserLogo" />
                <p className="UserName">Pedro</p>
                <p className="UserMail">Pedro@gmail.com</p>
            </div>
            </div>
            <ul className="nav-list">
            <li>
            <div id="Rectangle"></div>
            </li>
            <li className="links">
                <Link to="#" className="link" tabIndex={tempTabIndex}>Ajustes de perfil</Link>
            </li>
            <li>
            <div id="MidRectangle"></div>
            </li>
            <li className="links">
                <Link to="#" className="link" tabIndex={tempTabIndex}>Sobre el proyecto</Link>
            </li>
            <li>
            <div id="MidRectangle"></div>
            </li>
            <li className="links">
                <Link to="#" className="link" tabIndex={tempTabIndex}>Idiomas</Link>
            </li>
            </ul>
            <div className="Logout">
                <AppContext.Consumer>
                {(context1) => 
                        <MenuContext.Consumer>
                            {(context2) => 
                                // <div onClick={()=>onClick(context1, context2)} className="LogoutLink" tabIndex={tempTabIndex}>Salir de mi cuenta</div>
                                 <div className="LogoutLink" tabIndex={tempTabIndex}>Salir de mi cuenta</div>
  
                            }
                        </MenuContext.Consumer>  
                }
                </AppContext.Consumer>
                {/* <div onClick={onClick} className="LogoutLink" tabIndex={tempTabIndex}>Salir de mi cuenta</div> */}
                <img src={LogoutIcon} alt="Salir de mi cuenta" />
            </div>
        </div>
    );
};

export default NavLinks;
