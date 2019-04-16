import React, { Component } from 'react';
import { ScrollView, StyleSheet, Image} from 'react-native';
import { Header, Left, Body, Text, Form, Title, Drawer, Button, Right, Item, Card, CardItem, View, Label, Input, List, ListItem} from 'native-base';

import Voltar from 'react-native-vector-icons/FontAwesome';

import {Actions} from 'react-native-router-flux';
import MenuHeader from 'react-native-vector-icons/AntDesign';
import Modal from "react-native-modal";
import { TextInputMask } from 'react-native-masked-text';

import Icon from 'react-native-vector-icons/AntDesign';

import SideBar from './SideBar';

export default class AddMeiosdePagt extends Component{
  constructor(props) {
    super(props)

    this.state = {
      cartao: '',
      validade: '',
      verificador: '',
    }
  }
    closeDrawer() {
        this._drawer._root.close()
      };
    openDrawer() { 
        this._drawer._root.open() 
    };

    meiosdepagt(){
        Actions.meiosdepagt()
    };

  
    render(){
        return(
            
            <Drawer ref={(ref) => { this._drawer = ref; }} 
            content={<SideBar navigator={this._navigator} />} 
            onClose={() => this.closeDrawer()} >
            <Header style={{backgroundColor:'#282c34', shadowColor:'blue', shadowOpacity:2, height:60}}>
                <Item style={{borderBottomWidth:0, marginLeft:-130}}>
                    <MenuHeader name="arrowleft" size={30} color="#fff" onPress={this.meiosdepagt} />
                    <Text style={{color:"#fff", marginLeft:-30, fontSize:20, marginLeft:20}}>Adicionar Cartão</Text>  
                </Item> 
            </Header>
            
              <ScrollView style={{backgroundColor:'#eaebed', padding:20}} scrollEnabled={true}>
              <View style={{borderBottomWidth:1, borderBottomColor:'#ccc', width:'100%'}}>
                    <Label style={{fontSize:16, color:'#282c34'}}>Número do Cartão</Label>
                    <TextInputMask
                        type={'custom'}
                        options={{
                        mask: '9999 9999 9999 9999'
                        }}
                        value={this.state.cartao}
                        onChangeText={text => {
                        this.setState({
                            cartao: text
                        })
                        }}
                        style={{fontSize:15}}
                        placeholder="9999 9999 9999 9999" type="credit-card"
                    />
                </View>
                <View>
                    <Left style={{width:'45%', marginLeft:-175, borderBottomWidth:0}}>
                    <View style={{borderBottomWidth:1, borderBottomColor:'#ccc', width:'100%', marginTop:5}}>
                    <Label style={{fontSize:16, color:'#282c34'}}>Data de Validade</Label>
                            <TextInputMask
                        type={'custom'}
                        options={{
                            mask: '99/99'
                        }}
                        value={this.state.validade}
                        onChangeText={text => {
                            this.setState({
                            validade: text
                            })
                        }}
                        style={{borderBottomWidth:0, marginRight:-10}}
                        placeholder="MM/AA" type="datetime" maxLength={5}
                        />
                        </View>
                    </Left>
                    <Right style={{width:'45%', marginRight:-180, marginTop:-75}}>
                    <Item stackedLabel style={{width:'100%'}}>
                            <Label style={{fontSize:15, color:'#282c34', width:'100%'}}>Código Verificador</Label>
                            <Input style={{width:'100%'}} placeholder="CVV" placeholderTextColor="#999" keyboardType = 'numeric' maxLength={3}/>
                    </Item>
                    </Right>
                </View>
                <Button style={{padding:10, backgroundColor:'#17a2b8', width:'100%', marginTop:20}} onPress={this.meiosdepagt}><Text style={{color:'white', flex:1, textAlign:'center'}}>ADICIONAR</Text></Button>


                


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
      borderBottomWidth: 1,
      marginBottom:40,
      marginLeft:-10,
      flex:1,
      alignContent:'center',
      color: '#282c34'
    },



  });