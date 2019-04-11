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
    home(){
        Actions.home()
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
                <Item style={{borderBottomWidth:0, padding:20, marginTop:20, marginBottom:40}}>
                    <Left>
                    <Thumbnail style={{width: 60, height: 60}} source={require('../images/perfil_user.jpeg')} />
                    </Left>
                    <Body style={{flex: 1, alignItems:'flex-start', marginLeft:-50}}>
                    <Text style={{fontWeight:'bold', color:'#fff'}}>Israel Moreira</Text>
                        <Text note style={{color:'#fff'}} onPress={this.profile}>Editar Perfil</Text>
                    </Body>
                </Item>
                <Content style={{paddingRight:20}}>
                    
                    <List>
                        <ListItem noBorder><Text style={styles.listItem} onPress={this.home}>HOME</Text></ListItem>
                        <ListItem noBorder><Text style={styles.listItem} onPress={this.consultas}>SUAS CONSULTAS</Text></ListItem>
                        <ListItem noBorder><Text style={styles.listItem} onPress={this.meiosdepagt}>MEIOS DE PAGAMENTO</Text></ListItem>
                        <ListItem noBorder><Text style={styles.listItem} onPress={this.aplicarcupom}>APLICAR CUPOM</Text></ListItem>
                        <ListItem noBorder><Text style={styles.listItem} onPress={this.faq}>FAQ</Text></ListItem>
                        <ListItem noBorder><Text style={styles.listItem} onPress={this.contatos}>CONTATE-NOS</Text></ListItem>
                    </List>
                    
                </Content>
                <Item style={{borderBottomWidth:0, alignSelf:'baseline', padding:30}} onPress={this.login}>
                    <Icon name="sign-out" size={30} color="#fff" /><Text style={{color:'#fff', fontSize:14, marginLeft:20}}>SAIR</Text>
                </Item>
            </LinearGradient>
            
        )
    }
}

var styles = StyleSheet.create({
    linearGradient: {
      flex: 1,
      paddingLeft: 15,
      paddingRight: 15,
    },
    listItem:{
        color:'#fff',
        fontSize:14,
        marginBottom:-10,
        
    }
  });