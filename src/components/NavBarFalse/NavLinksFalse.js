import React from 'react';
import { Link } from 'react-router-dom'
import CloseIcon from './closeIcon.svg'
import UserIcon from './UserIcon.svg'
import LogoutIcon from './LogoutIcon2.svg'

const NavLinks = (props) => {
    let tempTabIndex
    if (props.isMobileLink){
        tempTabIndex ="-1"
    }



    return (
        <div className="nav-links">
            <div className="MenuHeader">
            <div>
                <img src={CloseIcon} alt="Cerrar menú" className="CloseMenu" />
            </div>
            {/* <div className="UserProfile">
                <img src={UserIcon} alt="Menú" className="UserLogo" />

                    <p className="UserName">Pedro</p>
                    <p className="UserMail">Pedro@gmail.com</p>

                
            </div> */}
            </div>
            <ul className="nav-list">
            <li>
            <div id="Rectangle"></div>
            </li>
            <li className="links">
                <Link to="/perfil" className="link">Ajustes de perfil</Link>
            </li>
            <li>
            <div id="MidRectangle"></div>
            </li>
            <li className="links">
                <Link to="/acerca" className="link">Sobre el proyecto</Link>
            </li>
            <li>
            <div id="MidRectangle"></div>
            </li>
            <li className="links">
                <Link to="/idiomas" className="link">Idiomas</Link>
            </li>
            </ul>
            <div className="Logout">
                <Link to="/cerrar" className="LogoutLink">Salir de mi cuenta</Link>
                <img src={LogoutIcon} alt="Salir de mi cuenta" />
            </div>
    </div>
    );
};

export default NavLinks;