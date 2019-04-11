import React, { Component } from 'react';
import { Image, ScrollView} from 'react-native';
import { Header, Left, Body, Text, Card, CardItem, Thumbnail, Title, Drawer, Right, Button, Icon } from 'native-base';



import {Actions} from 'react-native-router-flux';
import MenuHeader from 'react-native-vector-icons/MaterialCommunityIcons';



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
            
              <ScrollView style={{backgroundColor:'#eaebed', padding:20}} scrollEnabled={true}>
            

              <Card style={{marginBottom:20}}>
                  <CardItem cardBody>
                    <Image source={require('../images/generalista.jpg')} style={{height: 200, width: null, flex: 1}}/>
                  </CardItem>
                  <CardItem style={{marginBottom:-10}}>
                      <Text style={{fontWeight:'bold', color:'#282c34'}} >GENERALISTA</Text>
                  </CardItem>
                  <CardItem>
                      <Text>Orientação rápida de até 15 minutos.</Text>
                  </CardItem>
                  <CardItem>
                      <Text style={{fontWeight:'bold', color:'#b9001f'}}>R$ 50,00</Text>
                  </CardItem>
                  <CardItem>
                  <Button style={{padding:10, backgroundColor:'#17a2b8', width:'100%'}} onPress={this.visita01}><Text style={{color:'white', flex:1, textAlign:'center'}}>ACESSAR</Text></Button>
                  </CardItem>
              </Card>

              <Card style={{marginBottom:20}}>
                  <CardItem cardBody>
                    <Image source={require('../images/generalista.jpg')} style={{height: 200, width: null, flex: 1}}/>
                  </CardItem>
                  <CardItem style={{marginBottom:-10}}>
                      <Text style={{fontWeight:'bold', color:'#282c34'}} >GENERALISTA</Text>
                  </CardItem>
                  <CardItem>
                      <Text>Orientação com generalista de até 30 minutos.</Text>
                  </CardItem>
                  <CardItem>
                      <Text style={{fontWeight:'bold', color:'#b9001f'}}>R$ 100,00</Text>
                  </CardItem>
                  <CardItem>
                  <Button style={{padding:10, backgroundColor:'#17a2b8', width:'100%'}} onPress={this.visita01}><Text style={{color:'white', flex:1, textAlign:'center'}}>ACESSAR</Text></Button>
                  </CardItem>
              </Card>

              <Card style={{marginBottom:40}}>
                  <CardItem cardBody>
                    <Image source={require('../images/especialista.jpg')} style={{height: 200, width: null, flex: 1}}/>
                  </CardItem>
                  <CardItem style={{marginBottom:-10}}>
                      <Text style={{fontWeight:'bold', color:'#282c34'}} >ESPECIALISTA</Text>
                  </CardItem>
                  <CardItem>
                      <Text>Orientação com especialista de até 30 minutos.</Text>
                  </CardItem>
                  <CardItem>
                      <Text style={{fontWeight:'bold', color:'#b9001f'}}>R$ 150,00</Text>
                  </CardItem>
                  <CardItem>
                  <Button style={{padding:10, backgroundColor:'#17a2b8', width:'100%'}} onPress={this.visita01}><Text style={{color:'white', flex:1, textAlign:'center'}}>ACESSAR</Text></Button>
                  </CardItem>
              </Card>

          
            </ScrollView>
          </Drawer>
        )
    }
}