import React, { Component } from 'react';
import { ScrollView, StyleSheet, Image} from 'react-native';
import Face from 'react-native-vector-icons/FontAwesome';
import { Header, Left, Body, Text, Form, Title, Drawer, Button, Right, Item, Picker, Content, View, Label, Input} from 'native-base';

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
                <Item style={{borderBottomWidth:0, marginLeft:-165}}>
                    <MenuHeader name="close" size={30} color="#fff" onPress={this.home} />
                    <Text style={{color:"#fff", marginLeft:-30, fontSize:20, marginLeft:20}}>Editar Perfil</Text>  
                </Item> 
            </Header>
            
              <ScrollView style={{backgroundColor:'#fff', padding:20}} scrollEnabled={true}>
                

              <Content>
                    <Form style={{marginLeft:-10}}>
                        <Item stackedLabel>
                          <Label style={{fontSize:15, color:'#282c34'}}>Nome</Label>
                        <Input style={styles.inputs} placeholder="Israel Moreira dos Santos" placeholderTextColor="#999"/>
                        </Item>

                        <Item stackedLabel>
                        <Label style={{fontSize:15, color:'#282c34'}}>EMail</Label>
                        <Input style={styles.inputs} placeholder="israel.amoreira@gmail.com" placeholderTextColor="#999"/>
                        </Item>


                        <Item style={{marginTop:25}}>
                            <Picker
                              selectedValue={this.state.language}
                              style={{height: 50, width: 100}}
                            
                                onValueChange={(itemValue, itemIndex) =>
                                this.setState({language: itemValue})
                              }>
                              <Picker.Item label="Selecione o seu sexo" value="" color="#999"/>
                              <Picker.Item label="Masculino" value="Masculino" color="#282c34"/>
                              <Picker.Item label="Feminino" value="Feminino" color="#282c34"/>
                            </Picker>
                        </Item>
                        
                        <View style={{borderBottomWidth:1, padding:20, borderBottomColor:'#ccc', width:'100%', marginLeft:18}}>
                          <Label style={{fontSize:16, color:'#282c34', marginLeft:-20}}>Data de Nascimento</Label>
                          <TextInputMask
                                                  type={'datetime'}
                                                  maxLength={10}
                                                  options={{
                                                    mask: '99/99/9999'
                                                  }}
                                                  value={this.state.nascimento}
                                                  onChangeText={text => {
                                                    this.setState({
                                                      nascimento: text
                                                    })
                                                  }}
                                                  style={{marginBottom:-28, marginLeft:-18, fontSize:15}}
                                                  placeholder="99/99/9999"
                                              />
                        </View>

                        <View style={{borderBottomWidth:1, padding:20, borderBottomColor:'#ccc', width:'100%', marginLeft:18}}>
                          <Label style={{fontSize:16, color:'#282c34', marginLeft:-20}}>Telefone</Label>
                          <TextInputMask
                            type={'cel-phone'}
                            value={this.state.phoneBR}
                            maxLength={15}
                            onChangeText={text => {
                            this.setState({
                                phoneBR: text
                                
                            })
                            }}
                            style={{marginBottom:-28, marginLeft:-18, fontSize:15}}
                            placeholder="(99) 99999-9999"
                        />
                        </View>
                        
                        <Item stackedLabel>
                        <Label style={{fontSize:15, color:'#282c34'}}>Senha</Label>
                        <Input secureTextEntry={true} maxLength={6} style={styles.inputs} placeholder="Digite sua senha" placeholderTextColor="#999"/>
                        </Item>

                        <Button block style={{backgroundColor:'#282c34', marginTop:20, marginBottom:40}} onPress={this._toggleModal}><Text> ALTERAR </Text></Button>
                    </Form>
                </Content>


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