import React, { Component } from 'react';
import { Image, ScrollView} from 'react-native';
import { Header, Left, Body, Text, Card, CardItem, Thumbnail, Item, Drawer, Right, Button, Icon, View } from 'native-base';



import {Actions} from 'react-native-router-flux';
import MenuHeader from 'react-native-vector-icons/MaterialCommunityIcons';


import Avancar from 'react-native-vector-icons/EvilIcons';
import SideBar from './SideBar';


export default class Home extends Component{
    visita01(){
        Actions.visita01()
    }


    closeDrawer() {
        this._drawer._root.close()
      };
    openDrawer() { 
        this._drawer._root.open() 
    };
    render(){
        return(
            <Drawer ref={(ref) => { this._drawer = ref; }} 
            content={<SideBar navigator={this._navigator} />} 
            onClose={() => this.closeDrawer()} >
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
            
              <View style={{backgroundColor:'#eaebed', padding:20}}>
            
              <Card style={{marginBottom:5}}>
              <CardItem>
              <Left>
                <Thumbnail source={require('../images/generalista.jpg')}/>
                <Body>
                  <Text style={{fontWeight:'bold', color:'#282c34'}}>GENERALISTA</Text>
                  <Text note>Orientação rápida de até 15 minutos.</Text>
                </Body>
              </Left>
             </CardItem>
             <Item style={{width:'90%', marginLeft:15}}></Item>
             <CardItem>
                 <Body>
                 <Text note style={{fontWeight:'bold'}}>VALOR R$:<Text style={{color:'#b9001f', fontWeight:"100"}}> 50,00</Text></Text>
                 </Body>
                 <Right>
                 <Avancar name='arrow-right' size={40} style={{color:'#282c34', marginTop:-3}} onPress={this.visita01}></Avancar>
                 </Right>
             </CardItem>
              </Card>

              <Card style={{marginBottom:5}}>
              <CardItem>
              <Left>
                <Thumbnail source={require('../images/generalista.jpg')}/>
                <Body>
                  <Text style={{fontWeight:'bold', color:'#282c34'}}>GENERALISTA</Text>
                  <Text note>Orientação rápida de até 30 minutos.</Text>
                </Body>
              </Left>
             </CardItem>
             <Item style={{width:'90%', marginLeft:15}}></Item>
             <CardItem>
                 <Body>
                 <Text note style={{fontWeight:'bold'}}>VALOR R$:<Text style={{color:'#b9001f', fontWeight:"100"}}> 100,00</Text></Text>
                 </Body>
                 <Right>
                 <Avancar name='arrow-right' size={40} style={{color:'#282c34', marginTop:-3}} onPress={this.visita01}></Avancar>
                 </Right>
             </CardItem>
              </Card>

              <Card style={{marginBottom:40}}>
              <CardItem>
              <Left>
                <Thumbnail source={require('../images/especialista.jpg')}/>
                <Body>
                  <Text style={{fontWeight:'bold', color:'#282c34'}}>ESPECIALISTA</Text>
                  <Text note>Orientação rápida de até 30 minutos.</Text>
                </Body>
              </Left>
             </CardItem>
             <Item style={{width:'90%', marginLeft:15}}></Item>
             <CardItem>
                 <Body>
                 <Text note style={{fontWeight:'bold'}}>VALOR R$:<Text style={{color:'#b9001f', fontWeight:"100"}}> 150,00</Text></Text>
                 </Body>
                 <Right>
                 <Avancar name='arrow-right' size={40} style={{color:'#282c34', marginTop:-3}} onPress={this.visita01}></Avancar>
                 </Right>
             </CardItem>
              </Card>
            </View>
          </Drawer>
        )
    }
}