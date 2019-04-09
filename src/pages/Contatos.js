import React, { Component } from 'react';
import { ScrollView, TouchableOpacity, View} from 'react-native';
import { Header, Left, Body, Text, Form, Title, Drawer, Textarea, Button, Right, Item} from 'native-base';

import Voltar from 'react-native-vector-icons/FontAwesome';

import {Actions} from 'react-native-router-flux';
import MenuHeader from 'react-native-vector-icons/MaterialCommunityIcons';
import Modal from "react-native-modal";




import SideBar from './SideBar';

export default class Contatos extends Component{
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

                <Form>
                    <Textarea rowSpan={5} bordered placeholder="Digite sua mensagem" style={{backgroundColor:'#fff'}}/>
                    <Button style={{padding:10, backgroundColor:'#282c34', width:'100%', marginTop:20}} onPress={this._toggleModal}>
                        <Text style={{color:'white', flex:1, textAlign:'center'}}>ENVIAR</Text>
                    </Button>
                </Form>

        <Modal isVisible={this.state.isModalVisible} style={{maxHeight:220}}>
          <View style={{ flex: 1, backgroundColor:'#fff', padding:20 }} size={100}>
            <Item style={{borderBottomWidth:0}}>
                <Text style={{color:'#282c34', fontWeight:'bold', fontSize:16}}>TeleDocs</Text>
            </Item>
            <Item style={{marginTop:20, marginBottom:20, borderBottomWidth:0}}>
                <Text>O seu contato foi enviado com sucesso. Em breve, nossa equipe entrará em contato.</Text>
            </Item>
            <Button style={{padding:10, backgroundColor:'#282c34', width:'100%'}} onPress={this._toggleModal}><Text style={{color:'white', flex:1, textAlign:'center'}}>FECHAR</Text></Button>
          </View>
        </Modal>

            </ScrollView>
          </Drawer>
        )
    }
}