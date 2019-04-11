import React, {Component} from 'react';
import {Router, Scene} from 'react-native-router-flux';


import Login from './pages/Login';
import Home from './pages/Home';
import Consultas from './pages/Consultas';
import CadNewUser from './pages/CadNewUser';
import LoginUser from './pages/LoginUser';
import MeiosdePagt from './pages/MeiosdePagt';
import AplicarCupom from './pages/AplicarCupom';
import Profile from './pages/Profile';
import Faq from './pages/Faq';
import Contatos from './pages/Contatos';


import Visita01 from './pages/Visitas/Visita01';


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
              <Scene key="profile" hideNavBar component={Profile} title="profile"/>
              <Scene key="aplicarcupom" hideNavBar component={AplicarCupom} title="AplicarCupom"/>
              <Scene key="faq" hideNavBar component={Faq} title="Faq"/>
              <Scene key="contatos" hideNavBar component={Contatos} title="Contatos"/>

              <Scene key="visita01" hideNavBar component={Visita01} title="Visita01"/>
            </Scene>
           </Router>

          
        )
    }
}