import React, { Component } from 'react';
import { ScrollView, StyleSheet} from 'react-native';
import { Form, Content, Left, Body, Text, Button, Thumbnail, Item, Footer, Right, View, Input, Picker} from 'native-base';

import Voltar from 'react-native-vector-icons/EvilIcons';
import IcoHome from 'react-native-vector-icons/MaterialCommunityIcons';
import {Actions} from 'react-native-router-flux';
import Modal from "react-native-modal";
import { TextInputMask } from 'react-native-masked-text';
import Slider from "react-native-slider";


export default class Visita03 extends Component{

    home(){
        Actions.home()
    };

    visita02(){
        Actions.visita02()
    };

    visita04(){
        Actions.visita04()
    };

    state = {
        value: 1
      };

    render(){
        return(
            <ScrollView style={{backgroundColor:'#eaebed'}}>
            


            
            <Content style={{padding:20}}>
                <Item style={{borderBottomWidth:0}}>
                    <Text style={{color:"#282c34", fontSize:22, fontWeight:"bold", marginBottom:30}}>Há quanto tempo está com o problema?</Text>
                </Item>
                <Item style={{borderBottomWidth:0}}>
                  <Left><Text style={{color:"#282c34"}}>1</Text></Left>
                  <Body></Body>
                  <Right><Text style={{color:"#282c34"}}>30</Text></Right>
                </Item>
                <Slider
                minimumValue={1}
                maximumValue={30}
                minimumTrackTintColor='#17a2b8'
                maximumTrackTintColor='#17a2b8'
                thumbTintColor='#282c34'
                step={1}
          value={this.state.value}
          onValueChange={value => this.setState({ value })}
        />
        <Item style={{borderBottomWidth:0, justifyContent:'center'}}>
        <Text style={{color:"#282c34"}}>
          {this.state.value}
        </Text>
        </Item>
        <Item style={{borderBottomWidth:0, marginTop:40}}>
          <Text style={{color:"#282c34", fontSize:18, fontWeight:"bold"}}>Dias, meses, ano?</Text>
        </Item>
        <Item>
                      <Picker
                        selectedValue={this.state.language}
                        style={{height: 50, width: 100}}
                        onValueChange={(itemValue, itemIndex) =>
                            this.setState({language: itemValue})
                        }>
                        <Picker.Item label="Dias" value="Dias" color="#999"/>
                        <Picker.Item label="Meses" value="Meses" color="#282c34"/>
                        <Picker.Item label="Ano" value="Anos" color="#282c34"/>
                    </Picker>
        </Item>

                <Form>
                    
                    <Button style={{padding:10, backgroundColor:'#17a2b8', width:'100%', marginTop:40}} onPress={this._toggleModal}>
                        <Text style={{color:'white', flex:1, textAlign:'center'}} onPress={this.visita04}>AVANÇAR</Text>
                    </Button>
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
    fontSize:18,
    fontWeight:'500',
    marginBottom:10,
},

  });