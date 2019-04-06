/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Image} from 'react-native';
import {View, Text, Container, Button} from 'native-base';
import ImageSlider from 'react-native-image-slider';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class App extends Component{
  render() {
    const images = [
      'https://placeimg.com/640/480/tech',
      'https://placeimg.com/640/640/people',
       'https://placeimg.com/640/480/tech',
      'https://placeimg.com/640/640/people',
    ];
    return (
      <View style={styles.container}>
        <ImageSlider 
          loop
          autoPlayWithInterval={3000}
          images={images} style={{marginBottom:5}}/>
      <Icon.Button name="facebook" backgroundColor="#3b5998" style={{marginTop:5, marginBottom:5, marginLeft:40, marginRight:40}}>
        <Text style={{ fontFamily: 'Arial', fontSize: 15, color: "#fff" }}>
          Login com Facebook
        </Text>
        </Icon.Button>
        
        <Text style={styles.welcome}>Ou use o seu email</Text>
        <Container style={{flex: 1, flexDirection: 'row', backgroundColor:'none', maxHeight: 50, marginBottom:5}}>
        
        <Button bordered style={{marginRight:15, padding:10, borderColor:'#282c34'}}>
            <Text style={{color:'#282c34'}}>CADASTRAR</Text>
          </Button>
        <Button style={{padding:10, backgroundColor:'#282c34'}}><Text style={{color:'white'}}>ENTRAR</Text></Button>
        </Container>
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
