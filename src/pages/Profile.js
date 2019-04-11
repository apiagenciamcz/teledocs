import React, { Component } from 'react';
import { ScrollView, StyleSheet, Image} from 'react-native';
import { Header, Left, Body, Text, Form, Title, Drawer, Button, Right, Item, Picker, CardItem, View, Label, Input} from 'native-base';

import Voltar from 'react-native-vector-icons/FontAwesome';

import {Actions} from 'react-native-router-flux';
import MenuHeader from 'react-native-vector-icons/MaterialCommunityIcons';
import Modal from "react-native-modal";
import { TextInputMask } from 'react-native-masked-text';



import SideBar from './SideBar';

export default class MeiosdePagt extends Component{
  constructor(props) {
    super(props)

    this.state = {
      telefone: '',
      nascimento: '',
    }
  }
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
                    <Text note style={{color:'#282c34'}}>Editar Perfil</Text>
                </Body>
                <Right>
                <MenuHeader name="menu" size={30} color="#282c34" onPress={() => this.openDrawer()} /> 
                </Right>
              </Header>
            
              <ScrollView style={{backgroundColor:'#eaebed', padding:20}} scrollEnabled={true}>
                <Item>
                    <Input placeholder="Israel Moreira dos Santos" style={{color:'#282c34', fontSize:16}} placeholderTextColor="#999"/>
                </Item>
                <Item>
                    <Input placeholder="api.agenciadigital@gmail.com" style={{color:'#282c34', fontSize:16}} placeholderTextColor="#999"/>
                </Item>
                <Item>
                    <Picker
                        selectedValue={this.state.language}
                        style={{height: 50, width: 100}}
                        onValueChange={(itemValue, itemIndex) =>
                            this.setState({language: itemValue})
                        }>
                        <Picker.Item label="Masculino" value="Masculino" color="#999"/>
                        <Picker.Item label="Feminino" value="Feminino" color="#282c34"/>
                    </Picker>
                </Item>

                <Item style={{borderBottomWidth:1}}>
                  <TextInputMask
                  type={'custom'}
                  options={{
                    mask: '99/99/9999'
                  }}
                  value={this.state.nascimento}
                  onChangeText={text => {
                    this.setState({
                      nascimento: text
                    })
                  }}
                  style={styles.inputMask}
                  placeholder=" 21/11/1983" type="datetime"
                />
            </Item>

            <Item style={{borderBottomWidth:1}}>
                  <TextInputMask
                  type={'custom'}
                  options={{
                    mask: '(99) 9999-9999'
                  }}
                  value={this.state.telefone}
                  onChangeText={text => {
                    this.setState({
                      telefone: text
                    })
                  }}
                  style={styles.inputMask}
                  placeholder=" 82 99955-0695" type="cel-phone"
                />
            </Item>

                <Item>
                    <Input placeholder="Confirme/Altere sua senha" style={{color:'#282c34', fontSize:16}} placeholderTextColor="#999" secureTextEntry={true} maxLength={6}/>
                </Item>

                <Button style={{padding:10, backgroundColor:'#17a2b8', width:'100%', marginTop:40}} onPress={this._toggleModal}><Text style={{color:'white', flex:1, textAlign:'center'}}>ALTERAR</Text></Button>


                <Modal isVisible={this.state.isModalVisible} style={{maxHeight:250}}>
          <View style={{ flex: 1, backgroundColor:'#fff', padding:20 }} size={100}>
            <Item style={{borderBottomWidth:0, marginBottom:20}}>
                <Text style={{color:'#282c34', fontWeight:'bold', fontSize:16}}>TeleDocs</Text>
            </Item>
            <Item style={{marginTop:20, marginBottom:40, borderBottomWidth:0}}>
                <Text style={{textAlign:'center'}}>Os seus dados foram editados com sucesso.</Text>
            </Item>
          
            <Button style={{padding:10, backgroundColor:'#282c34', width:'100%'}} onPress={this._toggleModal}><Text style={{color:'white', flex:1, textAlign:'center'}}>FECHAR</Text></Button>

            
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
    inputMask:{
      width: '100%',
      borderColor: '#999',
       flex:1,
      alignContent:'center',
      color: '#282c34',
      fontSize:16,
      borderBottomWidth:0
    },



  });