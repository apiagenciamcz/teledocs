import React, { Component } from 'react';
import { ScrollView, StyleSheet} from 'react-native';
import { Form, Content, Left, Body, Text, Button, Item, Footer, Right, Spinner, ListItem, CheckBox, View} from 'native-base';

import Voltar from 'react-native-vector-icons/EvilIcons';
import IcoHome from 'react-native-vector-icons/MaterialCommunityIcons';
import {Actions} from 'react-native-router-flux';


export default class Visita07 extends Component{

    home(){
        Actions.home()
    };

    visita06(){
        Actions.visita06()
    };

    visita08(){
        Actions.visita08()
    };



    render(){
        return(

            <ScrollView style={{backgroundColor:'#eaebed'}}>



            
            <Content style={{padding:20}}>
                <Item style={{borderBottomWidth:0}}>
                    <Text style={{color:"#282c34", fontSize:22, fontWeight:"bold", marginBottom:20}}>Aguarde, que estamos procurando um médico disponível para atendê-lo</Text>
                </Item>
                
                <Spinner color='#282c34' />
                    

                <Form>
                    
                    <Button style={{padding:10, backgroundColor:'#17a2b8', width:'100%', marginTop:20}} onPress={this._toggleModal}>
                        <Text style={{color:'white', flex:1, textAlign:'center'}} onPress={this.visita08}>AVANÇAR</Text>
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