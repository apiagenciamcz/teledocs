import React, { Component } from 'react';
import {StyleSheet, Image} from 'react-native';
import { Content, Text, Thumbnail, ListItem, List, Item, Left, Body} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';

import {Actions} from 'react-native-router-flux';

export default class SideBar extends Component{
    login(){
        Actions.login()
    }
    consultas(){
        Actions.consultas()
    }
    faq(){
        Actions.faq()
    }
    meiosdepagt(){
        Actions.meiosdepagt()
    }
    aplicarcupom(){
        Actions.aplicarcupom()
    }
    profile(){
        Actions.profile()
    }
    contatos(){
        Actions.contatos()
    }
    render(){

        return(
            <LinearGradient colors={['#242831', '#424855']} style={styles.linearGradient}>
                <Item style={{borderBottomWidth:0, padding:20, marginTop:30, marginBottom:40}}>
                    <Left>
                    <Thumbnail style={{width: 60, height: 60}} source={require('../images/perfil_user.jpeg')} />
                    </Left>
                    <Body style={{flex: 1, alignItems:'flex-start', marginLeft:-50}}>
                    <Text style={{fontWeight:'bold', color:'#fff'}}>Israel Moreira</Text>
                        <Text note style={{color:'#fff'}} onPress={this.profile}>Editar Perfil</Text>
                    </Body>
                </Item>
                <Content style={{padding:20, backgroundColor:'#fff'}}>
                    
                    <List>
                        <ListItem noBorder><Text style={styles.listItem} onPress={this.consultas}>SUAS CONSULTAS</Text></ListItem>
                        <ListItem noBorder><Text style={styles.listItem} onPress={this.meiosdepagt}>MEIOS DE PAGAMENTO</Text></ListItem>
                        <ListItem noBorder><Text style={styles.listItem} onPress={this.aplicarcupom}>APLICAR CUPOM</Text></ListItem>
                        <ListItem noBorder><Text style={styles.listItem} onPress={this.faq}>FAQ</Text></ListItem>
                        <ListItem noBorder><Text style={styles.listItem} onPress={this.contatos}>CONTATE-NOS</Text></ListItem>
                    </List>
                    
                
                <Item style={{borderBottomWidth:0, alignSelf:'baseline', padding:30, marginLeft:-10, marginTop:100}} onPress={this.login}>
                    <Icon name="sign-out" size={30} color="#282c34" /><Text style={{color:'#282c34', fontSize:14}}>SAIR</Text>
                </Item>
                </Content>
            </LinearGradient>
            
        )
    }
}

var styles = StyleSheet.create({
    linearGradient: {
      flex: 1,
    },
    listItem:{
        color:'#282c34',
        fontSize:14,
        marginBottom:-10,
        
    }
  });