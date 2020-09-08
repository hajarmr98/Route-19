import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    menuContainer: {
      backgroundColor: '#fafbfc',
      color: 'blue',
      fontSize: '#0065ff',
      boxShadow: '0px 2px 2px rgba(0, 82, 204, 0.24)'
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      paddingRight: '10px'
    },
    menuDrop: {
      margin: '8.75% 0% 0% 20%'
    }
  }));
function MenuDrop () {
    const classes = useStyles();
    

        return (
            <div className={classes.menuContainer} >
            <div className="Menu">
              <div className="MenuHeader">
                <div className="MenuLogo"><img src="./images/LoggedLogo"></img></div>
                <div></div>
                <div></div>
                </div>            
              <div className="MenuFirst">
              <div className="MenuTitle">Idiomas</div>  
              </div>
              <div className="MenuSecond">
              <div className="MenuTitle">Idiomas</div>  
              <div>Español</div>
              <div>Inglés</div>
              <div>Francés</div>
              <div>Chino</div>
              </div>
              <div className="MenuThird">
                <div className="MenuTitle">Sobre el proyecto</div>
                <div>Preguntas Frecuentes</div>
                <div>RutasSeguras</div>
                <div>Cómo utilizar el mapa</div>
                <div>Políticas de privacidad</div>
                <div>Contacto</div>
              </div>
              <div className="MenuFooter">
                <div>Salir de mi cuenta</div>
              </div>
            </div>
          </div>
        )
    }


export default MenuDrop

