import React, { Component } from 'react';
import {StyleSheet, Image} from 'react-native';
import { Container, Button, Text, Content, Form, Item, Input, Label} from 'native-base';
import Face from 'react-native-vector-icons/FontAwesome';
import {Actions} from 'react-native-router-flux';


export default class LoginUser extends Component{

    home(){
        Actions.home()
    }
    cadnewuser(){
        Actions.cadnewuser()
    }
    render(){
        return(
                
                <Container style={styles.container}>
                    
                    <Content>
                        <Item style={{flex: 1, justifyContent: 'center', alignItems: 'center',}}>
                            <Image style={{width: 100, height: 100, marginBottom:20}} source={require('../images/LogoB.jpg')} />
                        </Item>
                    
                        <Face.Button name="facebook" backgroundColor="#3b5998" style={{marginTop:5, marginBottom:5, marginLeft:40, marginRight:40}}>
                            <Text style={{ fontFamily: 'Arial', fontSize: 15, color: "#fff" }}>
                            Login com o Facebook
                            </Text>
                        </Face.Button>
                        
                        <Text style={styles.subtitle}>Ou use seu email.</Text>
                        <Form>
                            <Item floatingLabel>
                            <Label style={styles.label}>Digite o seu nome</Label>
                            <Input style={styles.inputs}/>
                            </Item>

                            <Item floatingLabel>
                            <Label style={styles.label}>Digite a sua senha</Label>
                            <Input secureTextEntry={true} maxLength={6} style={styles.inputs}/>
                            </Item>
                            <Button block style={{backgroundColor:'#282c34', marginTop:40, marginBottom:20}} onPress={this.home}><Text> ENTRAR </Text></Button>
                            <Text style={{fontSize:14, textAlign:'center'}}>Ainda não tem conta?<Text style={{fontWeight:'bold', fontSize:14}} onPress={this.cadnewuser}> Cadastre-se</Text> </Text>
                        </Form>
                    </Content>
                </Container>

            
        )
    }
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      padding:25,
      },

    title: {
        flex: 1,
        color:'#282c34',
        fontSize:30,
        marginBottom:10,
    },
    subtitle:{
        fontSize: 14,
        textAlign: 'center',
        marginTop:20,
        marginBottom:-20,
    },
    label:{
        fontSize: 16,
        color:'#999',
        // padding:3,
        // flex:1,
        // marginTop:-10,
    },
    inputs:{
        fontSize:16, 
        color:'#282c34',
    },

  });