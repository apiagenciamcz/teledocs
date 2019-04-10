import React, { Component } from 'react';
import { ScrollView, StyleSheet, Image} from 'react-native';
import { Header, Left, Body, Text, Form, Title, Drawer, Button, Right, Item, Label, Input, View} from 'native-base';

import Voltar from 'react-native-vector-icons/FontAwesome';

import {Actions} from 'react-native-router-flux';
import MenuHeader from 'react-native-vector-icons/MaterialCommunityIcons';
import Modal from "react-native-modal";




import SideBar from './SideBar';

export default class AplicarCupom extends Component{
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
                <Body style={{flex: 1}}>
                  <Title style={{color:'#282c34'}}>Aplicar Cupom</Title>
                </Body>
                <Right>
                    <MenuHeader name="menu" size={30} color="#282c34" onPress={() => this.openDrawer()} />
                </Right>
              </Header>
            
              <ScrollView style={{backgroundColor:'#eaebed', padding:20}} scrollEnabled={true}>
                <Item style={{borderBottomWidth:0, marginBottom:20}}>
                    <Text>Observe que o seu cupom não pode ser utilizado em caso de consulta subsídiada pelo seu plano de saúde ou empregador.</Text>
                </Item>
                <Form>
            <Item floatingLabel style={{marginBottom:40}}>
              <Label style={styles.label}>Digite o número de seu cupom aqui.</Label>
              <Input />
            </Item>
          </Form>
                <Button style={{padding:10, backgroundColor:'#17a2b8', width:'100%'}} onPress={this._toggleModal}><Text style={{color:'white', flex:1, textAlign:'center'}}>APLiCAR</Text></Button>


                <Modal isVisible={this.state.isModalVisible} style={{maxHeight:390}}>
          <View style={{ flex: 1, backgroundColor:'#fff', padding:20 }} size={100}>
            <Item style={{borderBottomWidth:0}}>
                <Text style={{color:'#282c34', fontWeight:'bold', fontSize:16}}>TeleDocs</Text>
            </Item>
            <Image style={{width: 250, height: 250, marginLeft:20, marginTop:-50, marginBottom:-30}} source={require('../images/parabens.png')} />
            <Item style={{marginTop:20, marginBottom:20, borderBottomWidth:0}}>
                <Text style={{textAlign:'center'}}>O Seu Cupom foi validado com sucesso. Aproveite os benefícios de nossa plataforma</Text>
            </Item>
            <Button style={{padding:10, backgroundColor:'#17a2b8', width:'100%'}} onPress={this._toggleModal}><Text style={{color:'white', flex:1, textAlign:'center'}}>FECHAR</Text></Button>
          </View>
        </Modal>


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
    label:{
        fontSize: 14,
        color:'#999',
        padding:3,
        flex:1,
        marginTop:-10,
    },
  });