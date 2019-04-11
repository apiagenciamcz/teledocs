import React, { Component } from 'react';
import { ScrollView, StyleSheet, Image} from 'react-native';
import { Header, Left, Body, Text, Accordion, Title, Drawer, Button, Right, Item} from 'native-base';

import Voltar from 'react-native-vector-icons/FontAwesome';

import {Actions} from 'react-native-router-flux';
import MenuHeader from 'react-native-vector-icons/MaterialCommunityIcons';





import SideBar from './SideBar';

const dataArray = [
    { title: "O que é o TeleDocs?", content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" },
    { title: "Precisa ter cartão de crédito?", content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" },
    { title: "Posso escolher meu médico?", content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" }
  ];

export default class Faq extends Component{
    closeDrawer() {
        this._drawer._root.close()
      };
    openDrawer() { 
        this._drawer._root.open() 
    };

    back(){
        Actions.pop()
    };

    state = {
        isModalVisible: false,
      };
    
      _toggleModal = () =>
        this.setState({ isModalVisible: !this.state.isModalVisible });
    
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
                <Text style={{fontWeight:'bold', color:'#282c34'}}>TeleDocs</Text>
                    <Text note style={{color:'#282c34'}}>Faq</Text>
                </Body>
                <Right>
                <MenuHeader name="menu" size={30} color="#282c34" onPress={() => this.openDrawer()} /> 
                </Right>
              </Header>
            
              <ScrollView style={{backgroundColor:'#eaebed', padding:20}} scrollEnabled={true}>
                <Item padder>
                    <Accordion dataArray={dataArray} expanded={0} headerStyle={{ backgroundColor: "#fff" }}/>
                </Item>


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