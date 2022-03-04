import React, {Fragment, useEffect} from 'react'
import 'boxicons';
import '../Styles/SideBar.css';
import { ReactComponent as IconMenu} from '../icons/aictiveLogoGris.svg'
import { ReactComponent as HouseIcons} from '../icons/houseIcons.svg'
import { ReactComponent as AppsIcons} from '../icons/Apps.svg'
import { ReactComponent as ConfiguracinnIcons} from '../icons/configuracinn.svg'
import { ReactComponent as Group203Icons} from '../icons/group203.svg'
import { ReactComponent as Group206Icons} from '../icons/group206.svg'
import { ReactComponent as SupportIcons} from '../icons/support.svg'
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";

const SideBar =()=>{
    useEffect(() => {
        var menu_btn = document.querySelector("#menu");
        var sideBar = document.querySelector(".sideBar");
        menu_btn.onclick = function () {
          sideBar.classList.toggle("active");
        }
      }, []);

    return(
        <Fragment>
            <div className="sideBar">
                <ul className="list">
                    <li>
                        <a href="#">
                            <span className="link_name">Inicio</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span className="link_name">Mi Cuenta</span>       
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span className="link_name">Ajustes</span>       
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span className="link_name">Aplicaciones</span>       
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span className="link_name">Soporte</span>
                        </a>
                    </li>
                    <div className="log-out">
                    <a href="#">
                        <span className="link_name">Cerrar Sesion</span>
                        
                    </a>
                </div>
                </ul>
                <div className="barra">
                    <div className="logo-content">
                        <div className="logo">
                            <div className="logo-name">
                                <IconMenu  id="menu"/>
                            </div>
                        </div>
                    </div>
                    <div className="contentIcons">
                    <Link
                        exact
                        to={"/"}
                        className={`menu-item`}
                    >
                      <button className="dimesionBorder" >
                            <HouseIcons/>
                       </button>
                    </Link>
                    <Link
                        exact
                        to={"/account"}
                        className={`menu-item`}
                    >
                       <button className="dimesionBorder" >
                            <Group206Icons/>
                        </button>
                    </Link>    
                      
                    <button className="dimesionBorder" >
                        <ConfiguracinnIcons/>
                    </button>
                    <button className="dimesionBorder" >
                        <AppsIcons/>
                    </button>
                    <button className="dimesionBorder" >
                        <SupportIcons/>
                    </button>
                    <button className="dimesionBorder" >
                        <Group203Icons  name='log-out' flip='horizontal' color='#ffffff' id="out"/>
                    </button>
                    </div>           
                </div>
            </div>
        </Fragment>
    )
}

export default SideBar;