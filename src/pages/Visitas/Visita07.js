import React, { Component } from 'react';
import { ScrollView, StyleSheet} from 'react-native';
import { Form, Content, Text, Button, Item, Spinner, Header, Drawer} from 'native-base';


import {Actions} from 'react-native-router-flux';
import MenuHeader from 'react-native-vector-icons/AntDesign';
import SideBar from '../SideBar';
export default class Visita07 extends Component{

    home(){
        Actions.home()
    };

    visita08(){
        Actions.visita08()
    };

    visita06(){
        Actions.visita06()
    };



    render(){
        return(
            <Drawer ref={(ref) => { this._drawer = ref; }} 
          content={<SideBar navigator={this._navigator} />} 
          onClose={() => this.closeDrawer()} >
          <Header style={{backgroundColor:'#282c34', shadowColor:'blue', shadowOpacity:2, height:60}}>
          <Item style={{borderBottomWidth:0, marginLeft:-210}}>
                    <MenuHeader name="arrowleft" size={30} color="#fff" onPress={this.visita06} />
                    <Text style={{color:"#fff", marginLeft:-30, fontSize:20, marginLeft:20}}>Buscar</Text>  
                </Item>
          </Header>
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
        </Drawer>
        )
    }
}