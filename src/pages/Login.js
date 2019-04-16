import React, { Component } from 'react';
import {StyleSheet, Image} from 'react-native';
import {View, Text, Form, Button, Item, Label, Input, Content} from 'native-base';
import ImageSlider from 'react-native-image-slider';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Actions} from 'react-native-router-flux';
import { TextInput } from 'react-native-paper';
import { TextInputMask } from 'react-native-masked-text';

export default class Login extends Component{
  constructor(props) {
    super(props)

    this.state = {
      phoneBR: '',
      dt: '',
    }
  }
    cadnewuser(){
        Actions.cadnewuser()
    }
    loginuser(){
      Actions.loginuser()
    }
    state = {
      text:'',
      email: '',
      senha: ''
    };
    render() {
        const images = [
          'https://apiagenciamcz.github.io/teledocs/src/images/slider01.jpg',
          'https://apiagenciamcz.github.io/teledocs/src/images/slider02.jpg',
          ];
      return (
        <View style={styles.container}>
        <ImageSlider 
          loop
          autoPlayWithInterval={3000}
          images={images} style={{marginBottom:10}}/>
         <Item>
         <Image style={{width: 100, height: 100, marginTop:-80, marginBottom:10}} source={require('../images/LogoB.jpg')} />
         </Item>
        <Item style={{marginBottom:-40}}>
        <Icon.Button name="facebook" backgroundColor="#3b5998" style={{marginTop:5, marginBottom:5, marginLeft:80, marginRight:80}}>
        <Text style={{ fontFamily: 'Arial', fontSize: 15, color: "#fff", textAlign:"center"}}>
          Login com Facebook
        </Text>
        </Icon.Button>
        </Item>
        

        <Form style={{width:'100%', padding:10, marginTop:25}}>
        <Item floatingLabel style={{marginBottom:-10}}>
            <Label style={{marginTop:-5}}>Digite o seu email</Label>
            <Input/>
        </Item>
        <Item floatingLabel style={{marginBottom:10}}>
            <Label style={{marginTop:-5}}>Digite a sua senha</Label>
            <Input secureTextEntry={true} maxLength={6}/>
        </Item>
        {/* <View style={{borderBottomWidth:1, borderBottomColor:'#282c34', marginBottom:10}}>
        <Text style={{color:'#282c34', marginBottom:-10}}>Digite o Telefone</Text>
        <TextInputMask
                                type={'cel-phone'}
                                value={this.state.phoneBR}
                                maxLength={15}
                                onChangeText={text => {
                                this.setState({
                                    phoneBR: text
                                    
                                })
                                }}
                            />
        </View>
        <View style={{borderBottomWidth:1, borderBottomColor:'#282c34', marginBottom:10}}>
        <Text style={{color:'#282c34', marginBottom:-10}}>Digite o Telefone</Text>
        <TextInputMask
                                type={'cel-phone'}
                                value={this.state.phoneBR}
                                maxLength={15}
                                onChangeText={text => {
                                this.setState({
                                    phoneBR: text
                                    
                                })
                                }}
                            />
        </View> */}

      {/* <Text note>Email</Text>
      <TextInput
        mode='flat'
        value={this.state.senha}
        secureTextEntry={true}
        maxLength={6}
        theme={{
          colors: {
            primary: '#282c34',
          }
        }}
        style={{backgroundColor:'#fff'}}
        onChangeText={senha => this.setState({ senha })}
      />
      <Text note>Senha</Text> */}
        {/* <TextInput
        value={this.state.email}
        mode='outlined'
        placeholder='Digite apenas os números'
        underlineColor='#999'

        onChangeText={email => this.setState({ email })}
        selectionColor='#3b5998'
        theme={{
          colors: {
            primary: '#282c34',
          }
        }}
        render={props =>
          <TextInputMask
                                type={'cel-phone'}
                                value={this.state.phoneBR}
                                maxLength={15}
                                onChangeText={text => {
                                this.setState({
                                    phoneBR: text
                                    
                                })
                                }}
                            />
        }
      style={{backgroundColor:'#fff'}}/> */}

                            <Button block style={{backgroundColor:'#282c34', marginTop:10, marginBottom:10}} onPress={this.home}><Text> ENTRAR </Text></Button>
                            <Text style={{fontSize:14, textAlign:'center'}}>Ainda não tem conta?<Text style={{fontWeight:'500', fontSize:14}} onPress={this.cadnewuser}> Cadastre-se</Text> </Text>
                        </Form>
      </View>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
    },
    welcome: {
      fontSize: 14,
      textAlign: 'center',
      margin: 10,
    },
    label:{
      fontSize: 16,
      color:'#999',
      // padding:3,
      // flex:1,
      // marginTop:-10,
  },
  inputs:{
      fontSize:14, 
      color:'#282c34',
      marginBottom:10,
  },
  });