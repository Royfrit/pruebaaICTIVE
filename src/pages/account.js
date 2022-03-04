import React, {useState} from "react";
import '../Styles/account.css';
import { ReactComponent as UserIcon} from '../icons/group25.svg';
import { ReactComponent as BackIcons} from '../icons/group204.svg'
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";

const Account = () => {
    const [active, setActive] = useState(false)
    const validate = (value) => {
        let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/;
        if (value.length === 10) {
            if(regex.test(value))
                alert("Contraseña cumple con los estandares.");
            else
                alert("Necesita una contraseña alfanumérica, con al menos una mayúscula y un símbolo.");
            }
        }
    
    return (
        <div>
            <Link
                exact
                to={"/"}
            >
            <button className="flex_Back">
                <BackIcons/><p>Atrás</p>
            </button>
            </Link>
           
            <div className="content">
                <h1 className="title"> Mi cuenta</h1>
                <div className="flex">
                    <div className="card-small">
                        <UserIcon/>
                        <h1>Subir una foto nueva</h1>
                        <h2>Quitar doto</h2>
                    </div>
                    <div className="card-large">
                    <div className="divform">
                        
                        <div className="flex_Form">
                            <label for="name">Nombre</label>
                            <input type="text" id="name" name="user_name"/>
                        </div>
                        <div className="flex_Form">
                            <label for="name">Apellido</label>
                            <input type="text" id="name" name="user_name"/>
                        </div>
                        <div className="flex_Form">
                            <label for="mail">Correo electrónico</label>
                            <input type="email" id="mail" name="user_mail"/>
                        </div>
                        <div className="flex_Form">
                            <label for="name">Organización</label>
                            <input type="text" id="name" name="user_name"/>
                        </div>
                        <div className="flex_Form">
                            <label for="name">Fecha de nacimiento</label>
                            <input type="text" id="name" name="user_name"/>
                        </div>
                        <div className="flex_Form">
                            <label for="name">Peso</label>
                            <input type="text" id="name" name="user_name"/>
                        </div>
                        <div className="flex_Form">
                            <label for="name">Talla</label>
                            <input type="text" id="name" name="user_name"/>
                        </div>
                        <div className="flex_Form">
                            <label for="name">Contraseña</label>
                            <input type="text" id="name" name="user_name"/>
                        </div>
                        
                        {active ? <>
                            <div className="flex_Form">
                            <label for="name">Nueva contraseña</label>
                            <input type="text" id="name" 
                            name="user_name" onChange={(e) => validate(e.target.value)} minlength="1" maxlength="10"/>
                          </div>
                          <div className="flex_Form">
                                <label for="name">Repetir nueva contraseña</label>
                                <input type="text" id="name" name="user_name" onChange={(e) => validate(e.target.value)} minlength="1" maxlength="10"/>
                           </div> 
                        </> : ''}                                      
                    </div>
                    <div className="positionButton">
                        <button onClick={() => setActive(true)}>
                            {!active && <p className="changePassword">cambiar contraseña</p>} 
                        </button>
                    </div>
                     
                    <div className="positionButton">
                        <button className="btn-Save">Guardar</button>
                    </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )    
}

export default Account