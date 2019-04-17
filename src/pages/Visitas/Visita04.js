import React, { Component } from 'react';
import { ScrollView, StyleSheet} from 'react-native';
import { Form, Content, Body, Text, Button, Item, List, ListItem, CheckBox, Header, Drawer} from 'native-base';

import {Actions} from 'react-native-router-flux';

import MenuHeader from 'react-native-vector-icons/AntDesign';
import SideBar from '../SideBar';



export default class Visita04 extends Component{

    home(){
        Actions.home()
    };

    visita03(){
        Actions.visita03()
    };

    visita05(){
        Actions.visita05()
    };

    constructor(props) {
        super(props)
        this.state = {item1: false, item2: false, item3: false, item4: false, item5: false, item6: false, item7: false, item8: false, item9: false, item10: false }
      }

    render(){
        return(
            <Drawer ref={(ref) => { this._drawer = ref; }} 
          content={<SideBar navigator={this._navigator} />} 
          onClose={() => this.closeDrawer()} >
          <Header style={{backgroundColor:'#282c34', shadowColor:'blue', shadowOpacity:2, height:60}}>
          <Item style={{borderBottomWidth:0, marginLeft:-190}}>
                    <MenuHeader name="arrowleft" size={30} color="#fff" onPress={this.visita03} />
                    <Text style={{color:"#fff", marginLeft:-30, fontSize:20, marginLeft:20}}>Sintomas</Text>  
                </Item>
          </Header>
            <ScrollView style={{backgroundColor:'#eaebed'}}>

            
            <Content style={{padding:20}}>
                <Item style={{borderBottomWidth:0}}>
                    <Text style={{color:"#282c34", fontSize:22, fontWeight:"bold", marginBottom:20}}>Você poderia especificar algums sintomas?</Text>
                </Item>
                

                    <List>
                        <ListItem itemDivider>
                            <Text>SINTOMAS GERAIS</Text>
                        </ListItem> 
                        <ListItem onPress={() => this.setState({ item1: !this.state.item1 })}>
                            <CheckBox checked={this.state.item1} onPress={() => this.setState({ item1: !this.state.item1 })} color="#282c34" />
                                <Body>
                                    <Text style={{color:'#282c34'}}>dificuldade em dormir</Text>
                                </Body>
                        </ListItem>
                        <ListItem onPress={() => this.setState({ item2: !this.state.item2 })}>
                            <CheckBox checked={this.state.item2} onPress={() => this.setState({ item2: !this.state.item2 })} color="#282c34" />
                                <Body>
                                    <Text style={{color:'#282c34'}}>fadiga</Text>
                                </Body>
                        </ListItem>
                        <ListItem onPress={() => this.setState({ item3: !this.state.item3 })}>
                            <CheckBox checked={this.state.item3} onPress={() => this.setState({ item3: !this.state.item3 })} color="#282c34" />
                                <Body>
                                    <Text style={{color:'#282c34'}}>febre</Text>
                                </Body>
                        </ListItem>
                        <ListItem onPress={() => this.setState({ item4: !this.state.item4 })}>
                            <CheckBox checked={this.state.item4} onPress={() => this.setState({ item4: !this.state.item4 })} color="#282c34" />
                                <Body>
                                    <Text style={{color:'#282c34'}}>perda de apetite</Text>
                                </Body>
                        </ListItem>
                        <ListItem onPress={() => this.setState({ item5: !this.state.item5 })}>
                            <CheckBox checked={this.state.item5} onPress={() => this.setState({ item5: !this.state.item5 })} color="#282c34" />
                                <Body>
                                    <Text style={{color:'#282c34'}}>mudança de humor</Text>
                                </Body>
                        </ListItem>

                        <ListItem itemDivider>
                            <Text>CABEÇA/PESCOÇO</Text>
                        </ListItem> 
                        <ListItem onPress={() => this.setState({ item6: !this.state.item6 })}>
                            <CheckBox checked={this.state.item6} onPress={() => this.setState({ item6: !this.state.item6 })} color="#282c34" />
                                <Body>
                                    <Text style={{color:'#282c34'}}>dificuldade em dormir</Text>
                                </Body>
                        </ListItem>
                        <ListItem onPress={() => this.setState({ item7: !this.state.item7 })}>
                            <CheckBox checked={this.state.item7} onPress={() => this.setState({ item7: !this.state.item7 })} color="#282c34" />
                                <Body>
                                    <Text style={{color:'#282c34'}}>fadiga</Text>
                                </Body>
                        </ListItem>
                        <ListItem onPress={() => this.setState({ item8: !this.state.item8 })}>
                            <CheckBox checked={this.state.item8} onPress={() => this.setState({ item8: !this.state.item8 })} color="#282c34" />
                                <Body>
                                    <Text style={{color:'#282c34'}}>febre</Text>
                                </Body>
                        </ListItem>
                        <ListItem onPress={() => this.setState({ item9: !this.state.item9 })}>
                            <CheckBox checked={this.state.item9} onPress={() => this.setState({ item9: !this.state.item9 })} color="#282c34" />
                                <Body>
                                    <Text style={{color:'#282c34'}}>perda de apetite</Text>
                                </Body>
                        </ListItem>
                        <ListItem onPress={() => this.setState({ item10: !this.state.item10 })}>
                            <CheckBox checked={this.state.item10} onPress={() => this.setState({ item10: !this.state.item10 })} color="#282c34" />
                                <Body>
                                    <Text style={{color:'#282c34'}}>mudança de humor</Text>
                                </Body>
                        </ListItem>
                    </List>

                <Form>
                    
                    <Button style={{padding:10, backgroundColor:'#17a2b8', width:'100%', marginTop:20}} onPress={this._toggleModal}>
                        <Text style={{color:'white', flex:1, textAlign:'center'}} onPress={this.visita05}>AVANÇAR</Text>
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