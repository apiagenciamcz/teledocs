import React, { Component } from 'react';
import { ScrollView, StyleSheet, Image} from 'react-native';
import { Header, Left, Body, Text, Accordion, Title, Drawer, Button, Right, Item} from 'native-base';

import Voltar from 'react-native-vector-icons/FontAwesome';

import {Actions} from 'react-native-router-flux';
import MenuHeader from 'react-native-vector-icons/AntDesign';





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

    home(){
        Actions.home()
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
            <Header style={{backgroundColor:'#282c34', shadowColor:'blue', shadowOpacity:2, height:60}}>
                <Item style={{borderBottomWidth:0, marginLeft:-240}}>
                    <MenuHeader name="arrowleft" size={30} color="#fff" onPress={this.home} />
                    <Text style={{color:"#fff", marginLeft:-30, fontSize:20, marginLeft:20}}>Faq</Text>  
                </Item> 
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