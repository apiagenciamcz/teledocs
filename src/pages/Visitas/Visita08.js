import React, { Component } from 'react';
import { ScrollView, StyleSheet, Image} from 'react-native';
import { Content, Left, Body, Text, Button, Item, Drawer, Header, Card, CardItem} from 'native-base';
import { ProgressBar, Colors } from 'react-native-paper';
import {Actions} from 'react-native-router-flux';
import MenuHeader from 'react-native-vector-icons/AntDesign';
import SideBar from '../SideBar';

export default class Visita08 extends Component{

    home(){
        Actions.home()
    };

    visita07(){
      Actions.visita07()
  };

    visita09(){
        Actions.visita09()
    };



    render(){
        return(
          <Drawer ref={(ref) => { this._drawer = ref; }} 
          content={<SideBar navigator={this._navigator} />} 
          onClose={() => this.closeDrawer()} >
          <Header style={{backgroundColor:'#282c34', shadowColor:'blue', shadowOpacity:2, height:60}}>
          <Item style={{borderBottomWidth:0, marginLeft:-210}}>
                    <MenuHeader name="arrowleft" size={30} color="#fff" onPress={this.visita07} />
                    <Text style={{color:"#fff", marginLeft:-30, fontSize:20, marginLeft:20}}>Médico</Text>  
                </Item> 
          </Header>
            <ScrollView style={{backgroundColor:'#eaebed'}}>
           
            <Content style={{padding:20}}>
                <Card style={{flex: 0}}>
                <CardItem>
                    <Body style={{backgroundColor:'#d4edda', padding:10, alignContent:'center', alignItems:'center'}}>
                    <Text style={{color:'#357042'}}>Médico encontrado com sucesso!</Text>
                    </Body>
                </CardItem>
            <CardItem style={{marginTop:-10}}>
              <Left>
                
                <Body>
                  <Text>Dr.Israel Moreira</Text>
                  <Text note>Clínico Geral | Maceió-Al</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Image source={require('../../images/doctor.jpg')} style={{height: 170, width: 280, flex: 1}}/>
                <Text note style={{marginTop:10, textAlign:'center'}}>
                Por favor, aguarde o Doutor ler os sintomas apresentados para esta consulta.
                </Text>
                <ProgressBar progress={0.5} color={'#282c34'} style={{width:'100%', marginBottom:-20}}/>
              </Body>
            </CardItem>
            <CardItem>
            <Button bordered danger style={{padding:10, width:'100%'}} onPress={this._toggleModal}>
                        <Text style={{flex:1, textAlign:'center'}} onPress={this.home}>CANCELAR</Text>
                    </Button>
            </CardItem>
            <CardItem>
            <Button style={{padding:10, backgroundColor:'#17a2b8', width:'100%', marginTop:-10, marginBottom:5}} onPress={this._toggleModal}>
                        <Text style={{color:'white', flex:1, textAlign:'center'}} onPress={this.visita09}>AVANÇAR</Text>
                    </Button>
            </CardItem>
          </Card>
            </Content>
         
           
            </ScrollView>
          </Drawer>
        )
    }
}

const styles = StyleSheet.create({
  title: {
    flex: 1,
    color:'#282c34',
    fontSize:18,
    fontWeight:'500',
    marginBottom:10,
},

  });