import React, { Component } from 'react';
import { ScrollView, StyleSheet} from 'react-native';
import { Form, Content, Left, Body, Text, Button, Item, Footer, Right, List, ListItem, CheckBox, View} from 'native-base';

import Voltar from 'react-native-vector-icons/EvilIcons';
import IcoHome from 'react-native-vector-icons/MaterialCommunityIcons';
import {Actions} from 'react-native-router-flux';


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