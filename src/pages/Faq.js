import React, { Component } from 'react';
import { ScrollView, StyleSheet} from 'react-native';
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
            <Header style={{backgroundColor:'#fff', shadowColor:'blue', shadowOpacity:2}}>
                <Left>
                    <Button transparent onPress={() => this.back()}>
                            <Voltar name='arrow-left' size={20} style={{color:'#282c34'}}></Voltar>
                    </Button>
                </Left>
                <Body style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginLeft:50}}>
                  <Title style={{color:'#282c34'}}>TeleDocs</Title>
                </Body>
                <Right>
                    <MenuHeader name="menu" size={30} color="#282c34" onPress={() => this.openDrawer()} />
                </Right>
              </Header>
            
              <ScrollView style={{backgroundColor:'#eaebed', padding:20}} scrollEnabled={true}>
                <Item style={{marginBottom:20}}>
                    <Text style={styles.title}>FAQ</Text>
                </Item>
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
        fontSize:20,
        marginBottom:10,
    },
  });