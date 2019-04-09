import React, { Component } from 'react';
import {StyleSheet, Image} from 'react-native';
import { Content, Text, Thumbnail, ListItem, List, Item, Header} from 'native-base';
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
    contatos(){
        Actions.contatos()
    }
    render(){

        return(
            <LinearGradient colors={['#242831', '#424855']} style={styles.linearGradient}>
                <Item style={{borderBottomWidth:0, justifyContent: 'center'}}>
                    <Image style={{width: 80, height: 80, marginBottom:40, marginTop:40}} source={require('../images/LogoW.png')} />
                </Item>
                <Content style={{paddingRight:20}}>
                    
                    <List>
                        <ListItem noBorder><Text style={styles.listItem} onPress={this.home}>HOME</Text></ListItem>
                        <ListItem noBorder><Text style={styles.listItem}>SUAS CONSULTAS</Text></ListItem>
                        <ListItem noBorder><Text style={styles.listItem}>MEIOS DE PAGAMENTO</Text></ListItem>
                        <ListItem noBorder><Text style={styles.listItem}>MEUS CUPONS</Text></ListItem>
                        <ListItem noBorder><Text style={styles.listItem}>FAQ</Text></ListItem>
                        <ListItem noBorder><Text style={styles.listItem}>PROFILE</Text></ListItem>
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