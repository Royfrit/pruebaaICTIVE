import React from "react";
import '../Styles/dashboard.css';
import { ReactComponent as Task} from '../icons/group268.svg'
import { ReactComponent as Run} from '../icons/rutina.svg'
import { ReactComponent as Time} from '../icons/group269.svg'
import { ReactComponent as User} from '../icons/group25.svg'
import { ReactComponent as Off} from '../icons/vector14.svg'


const Dashboard = () => {
    return (
        <div className="dashboard">
             <div className="Content_header"> 
                <div className="dashaboard_user" id="user">
                    <User/>
                    <div className="user_name">
                        <p className="ragnar">Ragnar Lodbrock</p>
                        <p>Catecat</p>
                    </div>
                    <Off/>
                </div>
            </div>
            <p className="welcome">¡Hola <b>Ragnar Lotbrok</b>!</p>
            <p className= "welcome_2">Tus métricas generales son las siguientes:</p>
            <div className="container_button">
                <button className="btn_dashboard">Año</button>
                <button className="btn_dashboard">Mes</button>
                <button className="btn_dashboard">Semana</button>
            </div>
            <div className="container_dashboard">
                <div className="dashboard_task" id="task">
                    <Task/>
                    <h1 className="dashaboard_number">25</h1>
                    <p>Rutinas realizadas</p>
                </div>
                <div className="dashboard_task" id="run">
                    <Run/>
                    <h1 className="dashaboard_number">124</h1>
                    <p>Ejercicios realizados</p>
                </div>
                <div className="dashboard_task" id="time">
                    <Time/>
                    <h1 className="dashaboard_number">146 min.</h1>
                    <p>Tiempo de ejercio</p>
                </div>
            </div>
        </div>
       
           
          

        
    )    
}

export default Dashboard