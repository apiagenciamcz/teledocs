import React, {Component} from 'react';
import {Router, Scene} from 'react-native-router-flux';


import Login from './pages/Login';
import CadNewUser from './pages/CadNewUser';
import Home from './pages/Home';


export default class Routes extends Component{
    render(){
        return(
            <Router>
            <Scene key="root">
              <Scene key="login" hideNavBar component={Login} title="Login" initial={true}/>
              <Scene key="cadnewuser" hideNavBar component={CadNewUser} title="CadNewUser"/>
              <Scene key="home" hideNavBar component={Home} title="Home"/>
            </Scene>
           </Router>

          
        )
    }
}