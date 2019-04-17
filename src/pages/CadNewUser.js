import React, { Component } from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import { View, Picker, Button, Text, Content, Form, Item, Input, Label, Left, Right, Body} from 'native-base';
import Face from 'react-native-vector-icons/FontAwesome';
import {Actions} from 'react-native-router-flux';
import { TextInputMask } from 'react-native-masked-text';

import MenuHeader from 'react-native-vector-icons/AntDesign';

export default class CadNewUser extends Component{
    constructor(props) {
        super(props)
    
        this.state = {
          phoneBR: '',
          dt: '',
        }
      }
    home(){
        Actions.home()
    }
    login(){
      Actions.login()
  }
    render(){
        return(
                    
                    <ScrollView style={{backgroundColor:"#fff", padding:20}}>
                    <MenuHeader name="arrowleft" size={30} color="#282c34" onPress={this.login} />
                    <Content>
                    
                        <Text style={styles.title}>Criar Nova Conta</Text>
                        <Face.Button name="facebook" backgroundColor="#3b5998" style={{marginTop:5, marginBottom:5, marginLeft:40, marginRight:40}}>
                            <Text style={{ fontFamily: 'Arial', fontSize: 15, color: "#fff" }}>
                            Cadastre-se com o Facebook
                            </Text>
                        </Face.Button>
                        <Content style={{width:'100%', borderBottomWidth:0, marginTop:10}}>
                        <Left style={{width:'80%', marginTop:16}}><Item style={{width:'40%'}}></Item></Left>
                        <Body style={{marginTop:-15}}><Text>OU</Text></Body>
                        <Right style={{width:'80%', marginTop:-5}}><Item style={{width:'40%'}}></Item></Right>
                    </Content>
                        <Text style={styles.subtitle}>entre com os seus dados:</Text>
                        <Form style={{marginLeft:-10}}>
                            <Item stackedLabel>
                              <Label style={{fontSize:15, color:'#282c34'}}>Nome</Label>
                            <Input style={styles.inputs} placeholder="Digite seu nome aqui." placeholderTextColor="#999"/>
                            </Item>

                            <Item stackedLabel>
                            <Label style={{fontSize:15, color:'#282c34'}}>Email</Label>
                            <Input style={styles.inputs} placeholder="Digite seu email aqui." placeholderTextColor="#999"/>
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
                              <Label style={{fontSize:16, color:'#282c34', marginLeft:-20}}>Digite a data de nascimento</Label>
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
                              <Label style={{fontSize:16, color:'#282c34', marginLeft:-20}}>Digite o seu telefone</Label>
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

                            <Button block style={{backgroundColor:'#282c34', marginTop:20, marginBottom:40}} onPress={this.home}><Text> Cadastrar </Text></Button>
                        </Form>
                    </Content>
                    </ScrollView>


            
        )
    }
}

const styles = StyleSheet.create({
    title: {
        flex: 1,
        color:'#282c34',
        fontSize:30,
        marginBottom:10,
    },
    subtitle:{
        fontSize: 16,
        textAlign: 'center',
        margin: 10,
    },

    label:{
        fontSize: 14,
        color:'#999',
        padding:3,
        flex:1,
        marginTop:-10,
    },
    inputs:{
        fontSize:15, 
        color:'#282c34',
    },
    

  });