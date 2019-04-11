import React, { Component } from 'react';
import {Image} from 'react-native';
import {Header, Left, Body, Right, Text} from 'native-base';
import MenuHeader from 'react-native-vector-icons/MaterialCommunityIcons';

export default class HeaderApp extends Component{
    openDrawer() { 
        this._drawer._root.open() 
    };
    
    render(){
        return(
            <Header style={{backgroundColor:'#eaebed', shadowColor:'blue', shadowOpacity:2, height:80}}>
            <Left style={{marginLeft:10}}>
            <Image style={{width: 60, height: 60}} source={require('../images/LogoB.jpg')} />
            </Left>
            <Body style={{flex: 1, justifyContent: 'center', marginLeft:20}}>
            <Text style={{fontWeight:'bold', color:'#282c34'}}>Olá, Israel</Text>
                <Text note style={{color:'#282c34'}}>Seja Bem-Vindo</Text>
            </Body>
            <Right>
            <MenuHeader name="menu" size={30} color="#282c34" onPress={() => this.openDrawer()} /> 
            </Right>
          </Header>
        )
    }
}









