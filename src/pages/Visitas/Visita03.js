import React, { Component } from 'react';
import { ScrollView, StyleSheet} from 'react-native';
import { Form, Content, Left, Body, Text, Button, Thumbnail, Item, Footer, Right, View, Input, Picker, Header, Drawer} from 'native-base';

import {Actions} from 'react-native-router-flux';
import Slider from "react-native-slider";

import MenuHeader from 'react-native-vector-icons/AntDesign';
import SideBar from '../SideBar';


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
        value: 2
      };

    render(){
        return(
          <Drawer ref={(ref) => { this._drawer = ref; }} 
          content={<SideBar navigator={this._navigator} />} 
          onClose={() => this.closeDrawer()} >
          <Header style={{backgroundColor:'#282c34', shadowColor:'blue', shadowOpacity:2, height:60}}>
          <Item style={{borderBottomWidth:0, marginLeft:-210}}>
                    <MenuHeader name="arrowleft" size={30} color="#fff" onPress={this.visita02} />
                    <Text style={{color:"#fff", marginLeft:-30, fontSize:20, marginLeft:20}}>Tempo</Text>  
                </Item>
          </Header>
            <ScrollView style={{backgroundColor:'#eaebed'}}>
            


            
            <Content style={{padding:20}}>
                <Item style={{borderBottomWidth:0, marginBottom:40}}>
                    <Text style={{color:"#282c34", fontSize:22, fontWeight:"bold", marginBottom:30}}>Há quanto tempo está com o problema?</Text>
                </Item>
                <Slider
                style={customStyles8.container}
                trackStyle={customStyles8.track}
                thumbStyle={customStyles8.thumb}
                minimumTrackTintColor='#17a2b8'
                thumbTouchSize={{width: 50, height: 40}}
                
                minimumValue={1}
                maximumValue={30}
                maximumTrackTintColor='#999'
                thumbTintColor='#999'
                step={1}
          value={this.state.value}
          onValueChange={value => this.setState({ value })}
              style={{width:'60%'}}
        />
        <Item style={{borderBottomWidth:0, justifyContent:'center', width:'60%'}}>
        <Text style={{color:"#282c34"}}>
          {this.state.value}
        </Text>
        </Item>
        <Item style={{width:'30%', marginLeft:'70%', marginTop:-90}}>
                      <Picker
                        selectedValue={this.state.language}
                        style={{height: 50, width: 100}}
                        onValueChange={(itemValue, itemIndex) =>
                            this.setState({language: itemValue})
                        }>
                        <Picker.Item label="Dias" value="Dias" color="#282c34"/>
                        <Picker.Item label="Meses" value="Meses" color="#282c34"/>
                        <Picker.Item label="Ano" value="Anos" color="#282c34"/>
                    </Picker>
        </Item>

                <Form>
                    
                    <Button style={{padding:10, backgroundColor:'#17a2b8', width:'100%', marginTop:120}} onPress={this._toggleModal}>
                        <Text style={{color:'white', flex:1, textAlign:'center'}} onPress={this.visita04}>AVANÇAR</Text>
                    </Button>
                </Form>


                        
            </Content>

          
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



  });

  var customStyles8 = StyleSheet.create({
    container: {
      height: 30,
    },
    track: {
      height: 3,
      backgroundColor: '#ccc',
    },
    thumb: {
      width: 20,
      height: 20,
      backgroundColor: '#17a2b8',
      borderRadius: 20 / 2,
      shadowColor: '#17a2b8',
      shadowOffset: {width: 0, height: 0},
      shadowRadius: 2,
      shadowOpacity: 1,
    }
  });