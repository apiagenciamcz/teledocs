import React, {Component} from 'react';
import {Router, Scene} from 'react-native-router-flux';


import Login from './pages/Login';
import Home from './pages/Home';
import Consultas from './pages/Consultas';
import CadNewUser from './pages/CadNewUser';
import LoginUser from './pages/LoginUser';
import MeiosdePagt from './pages/MeiosdePagt';
import DelMeiosdePagt from './pages/DelMeiosdePagt';
import AddMeiosdePagt from './pages/AddMeiosdePagt';
import AplicarCupom from './pages/AplicarCupom';
import Profile from './pages/Profile';
import Faq from './pages/Faq';
import Contatos from './pages/Contatos';



import Visita01 from './pages/Visitas/Visita01';
import Visita02 from './pages/Visitas/Visita02';
import Visita03 from './pages/Visitas/Visita03';
import Visita04 from './pages/Visitas/Visita04';
import Visita05 from './pages/Visitas/Visita05';
import Visita06 from './pages/Visitas/Visita06';
import Visita07 from './pages/Visitas/Visita07';
import Visita08 from './pages/Visitas/Visita08';
import Visita09 from './pages/Visitas/Visita09';

export default class Routes extends Component{
    render(){
        return(
            <Router>
            <Scene key="root">
              <Scene key="login" hideNavBar component={Login} title="Login" initial={true}/>
              <Scene key="cadnewuser" hideNavBar component={CadNewUser} title="CadNewUser"/>
              <Scene key="loginuser" hideNavBar component={LoginUser} title="LoginUser"/>
              <Scene key="home" hideNavBar component={Home} title="Home"/>
              <Scene key="consultas" hideNavBar component={Consultas} title="Consultas"/>
              <Scene key="meiosdepagt" hideNavBar component={MeiosdePagt} title="MeiosdePagt"/>
              <Scene key="delmeiosdepagt" hideNavBar component={DelMeiosdePagt} title="DelMeiosdePagt"/>
              <Scene key="addmeiosdepagt" hideNavBar component={AddMeiosdePagt} title="AddMeiosdePagt"/>
              <Scene key="profile" hideNavBar component={Profile} title="profile"/>
              <Scene key="aplicarcupom" hideNavBar component={AplicarCupom} title="AplicarCupom"/>
              <Scene key="faq" hideNavBar component={Faq} title="Faq"/>
              <Scene key="contatos" hideNavBar component={Contatos} title="Contatos"/>

              <Scene key="visita01" hideNavBar component={Visita01} title="Visita01"/>
              <Scene key="visita02" hideNavBar component={Visita02} title="Visita02"/>
              <Scene key="visita03" hideNavBar component={Visita03} title="Visita03"/>
              <Scene key="visita04" hideNavBar component={Visita04} title="Visita04"/>
              <Scene key="visita05" hideNavBar component={Visita05} title="Visita05"/>
              <Scene key="visita06" hideNavBar component={Visita06} title="Visita06"/>
              <Scene key="visita07" hideNavBar component={Visita07} title="Visita07"/>
              <Scene key="visita08" hideNavBar component={Visita08} title="Visita08"/>
              <Scene key="visita09" hideNavBar component={Visita09} title="Visita09"/>
            </Scene>
           </Router>

          
        )
    }
}