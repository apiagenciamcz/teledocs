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
        value: 1
      };

    render(){
        return(
          <Drawer ref={(ref) => { this._drawer = ref; }} 
          content={<SideBar navigator={this._navigator} />} 
          onClose={() => this.closeDrawer()} >
          <Header style={{backgroundColor:'#282c34', shadowColor:'blue', shadowOpacity:2, height:60}}>
              <Item style={{borderBottomWidth:0, marginLeft:-290}}>
                  <MenuHeader name="arrowleft" size={30} color="#fff" onPress={this.visita02} />
              </Item> 
          </Header>
            <ScrollView style={{backgroundColor:'#eaebed'}}>
            


            
            <Content style={{padding:20}}>
                <Item style={{borderBottomWidth:0, marginBottom:100}}>
                    <Text style={{color:"#282c34", fontSize:22, fontWeight:"bold", marginBottom:30}}>Há quanto tempo está com o problema?</Text>
                </Item>
                <Item style={{borderBottomWidth:0, width:'48%'}}>
                  <Left><Text style={{color:"#282c34"}}>1</Text></Left>
                  <Body></Body>
                  <Right><Text style={{color:"#282c34"}}>30</Text></Right>
                </Item>
                <Slider
                style={customStyles8.container}
                trackStyle={customStyles8.track}
                thumbStyle={customStyles8.thumb}
                minimumTrackTintColor='#282c34'
                thumbTouchSize={{width: 50, height: 40}}
                minimumValue={1}
                maximumValue={30}
                minimumTrackTintColor='#17a2b8'
                maximumTrackTintColor='#17a2b8'
                thumbTintColor='#282c34'
                step={1}
          value={this.state.value}
          onValueChange={value => this.setState({ value })}
              style={{width:'48%'}}
        />
        <Item style={{borderBottomWidth:0, justifyContent:'center', width:'48%'}}>
        <Text style={{color:"#282c34"}}>
          {this.state.value}
        </Text>
        </Item>
        <Item style={{width:'40%', marginLeft:'60%', marginTop:-90}}>
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
                    
                    <Button style={{padding:10, backgroundColor:'#17a2b8', width:'100%', marginTop:180}} onPress={this._toggleModal}>
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
      backgroundColor: '#303030',
    },
    thumb: {
      width: 20,
      height: 20,
      backgroundColor: '#282c34',
      borderRadius: 20 / 2,
      shadowColor: '#282c34',
      shadowOffset: {width: 0, height: 0},
      shadowRadius: 2,
      shadowOpacity: 1,
    }
  });