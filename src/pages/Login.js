import React, { Component } from 'react';
import {StyleSheet, Image} from 'react-native';
import {View, Text, Container, Button} from 'native-base';
import ImageSlider from 'react-native-image-slider';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Actions} from 'react-native-router-flux';

export default class Login extends Component{
    cadnewuser(){
        Actions.cadnewuser()
    }
    loginuser(){
      Actions.loginuser()
    }
    render() {
        const images = [
          'http://teledocs.clientesapidigital.com.br/appSlider/slider01.jpg',
          'http://teledocs.clientesapidigital.com.br/appSlider/slider02.jpg',
          ];
      return (
        <View style={styles.container}>
        <ImageSlider 
          loop
          autoPlayWithInterval={3000}
          images={images} style={{marginBottom:5}}/>
          <Image style={{width: 100, height: 100, marginTop:-65, marginBottom:25}} source={require('../images/LogoB.jpg')} />
      <Icon.Button name="facebook" backgroundColor="#3b5998" style={{marginTop:5, marginBottom:5, marginLeft:70, marginRight:70}}>
        <Text style={{ fontFamily: 'Arial', fontSize: 15, color: "#fff", textAlign:"center"}}>
          Login com Facebook
        </Text>
        </Icon.Button>
        
        <Text style={styles.welcome}>Ou use o seu email</Text>
        <Container style={{flex: 1, flexDirection: 'row', backgroundColor:'none', maxHeight: 50, marginBottom:5}}>
        
        <Button bordered style={{marginRight:20,padding:10, borderColor:'#282c34'}} onPress={this.cadnewuser}>
            <Text style={{color:'#282c34', marginLeft:10, marginRight:10}}>CADASTRAR</Text>
          </Button>
        <Button style={{padding:10, backgroundColor:'#282c34'}} onPress={this.loginuser}><Text style={{color:'white', marginLeft:25, marginRight:25}}>LOGIN</Text></Button>
        
        </Container>
        <Text style={styles.welcome}>Ao entrar você concorda com os nossos</Text><Text style={{fontWeight:'bold', marginTop:-10, marginBottom:15, fontSize:14}}> Termos de Uso e Política de Privacidade</Text>
      </View>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    welcome: {
      fontSize: 14,
      textAlign: 'center',
      margin: 10,
    },
  });