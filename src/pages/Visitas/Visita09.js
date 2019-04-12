import React, { Component } from 'react';
import { ScrollView, StyleSheet,View} from 'react-native';
import { Form, Content, Left, Body, Text, Button, Item, List, ListItem, CheckBox, Right} from 'native-base';
import { RadioButton, Rad } from 'react-native-paper';
import Voltar from 'react-native-vector-icons/EvilIcons';
import IcoHome from 'react-native-vector-icons/MaterialCommunityIcons';
import {Actions} from 'react-native-router-flux';
import StarRating from 'react-native-star-rating';
import Modal from "react-native-modal";

export default class Visita09 extends Component{
    
    state = {
        checked: 'naourgente',
        checked: 'sim',
        
      };

    home(){
        Actions.home()
    };

    home(){
        Actions.home()
    };

    state = {
        isModalVisible: false,
      };
    
      _toggleModal = () =>
        this.setState({ isModalVisible: !this.state.isModalVisible });
    
        constructor(props) {
            super(props);
            this.state = {
              starCount: 0
            };
          }
        
          onStarRatingPress(rating) {
            this.setState({
              starCount: rating
            });
          }

    render(){
        const { checked } = this.state;
        return(

            <ScrollView style={{backgroundColor:'#eaebed'}}>
           
            <Content style={{padding:20}}>
                <Item style={{borderBottomWidth:0}}>
                    <Text style={{color:"#282c34", fontSize:22, fontWeight:"bold", marginBottom:10}}>Por favor, nos dê um feedback.</Text>
                </Item>
                
                <Item style={{borderBottomWidth:0, marginTop:20, marginBottom:20}}>
                    <Text style={{color:"#282c34", fontSize:16, fontWeight:"bold"}}>Como você percebe a urgência do seu problema?</Text>
                </Item>
                <Item>
                    <Left>
                        <Text style={{color:'#2ab200'}}>Não Urgente</Text>
                    </Left>
                    <Right>
                        <RadioButton
                            value="naourgente"
                            color="#2ab200"
                            status={checked === 'naourgente' ? 'checked' : 'unchecked'}
                            onPress={() => { this.setState({ checked: 'naourgente' }); }}
                            />
                    </Right>
                </Item>
                <Item>
                    <Left>
                        <Text style={{color:'#ffc107'}}>Urgente</Text>
                    </Left>
                    <Right>
                        <RadioButton
                            value="urgente"
                            color="#ffc107"
                            status={checked === 'urgente' ? 'checked' : 'unchecked'}
                            onPress={() => { this.setState({ checked: 'urgente' }); }}
                            />
                    </Right>
                </Item>
                <Item>
                    <Left>
                        <Text style={{color:'#dc3545'}}>Grave</Text>
                    </Left>
                    <Right>
                        <RadioButton
                            value="grave"
                            color="#dc3545"
                            status={checked === 'grave' ? 'checked' : 'unchecked'}
                            onPress={() => { this.setState({ checked: 'grave' }); }}
                            />
                    </Right>
                </Item>
                <Item style={{borderBottomWidth:0, marginTop:20, marginBottom:20}}>
                    <Text style={{color:"#282c34", fontSize:16, fontWeight:"bold"}}>O médico te encaminhou para o pronto-socorro?</Text>
                </Item>
                <RadioButton.Group
        onValueChange={value => this.setState({ value })}
        value={this.state.value}
      >
                <Item>
                    <Left>
                        <Text style={{color:'#282c34'}}>Sim</Text>
                    </Left>
                    <Right>
                        <RadioButton value="sim" color="#282c34"/>
                    </Right>
                </Item>
                <Item>
                    <Left>
                        <Text style={{color:'#282c34'}}>Não</Text>
                    </Left>
                    <Right>
                    <RadioButton value="nao" color="#282c34"/>
                    </Right>
                </Item>
                </RadioButton.Group>
                <Item style={{borderBottomWidth:0, marginTop:20, marginBottom:20}}>
                    <Text style={{color:"#282c34", fontSize:16, fontWeight:"bold"}}>Quantas estrelas você dá para o médico que fez o seu atendimento?</Text>
                </Item>
                <Item style={{marginBottom:10, borderBottomWidth:0}}>
                <StarRating
        disabled={false}
        maxStars={5}
        rating={this.state.starCount}
        emptyStarColor={'#eebb02'}
        fullStarColor={'#eebb02'}
        halfStarColor={'#eebb02'}
        selectedStar={(rating) => this.onStarRatingPress(rating)}
      />
                </Item>
                <Form>
                    <Button style={{padding:10, backgroundColor:'#17a2b8', width:'100%', marginTop:20}} onPress={this._toggleModal}>
                        <Text style={{color:'white', flex:1, textAlign:'center'}} onPress={this.home}>CONCLUIR</Text>
                    </Button>
                </Form>
            </Content>
         
            <Modal isVisible={this.state.isModalVisible} style={{maxHeight:160}}>
          <View style={{ flex: 1, backgroundColor:'#fff', padding:20 }} size={100}>
            <Item style={{borderBottomWidth:0, marginBottom:20}}>
                <Text style={{color:'#282c34', fontWeight:'bold', fontSize:16}}>TeleDocs</Text>
            </Item>
            <Item style={{borderBottomWidth:0, marginBottom:20, justifyContent:'center'}}>
                <Text note style={{color:'#282c34'}}>Obrigado pelo seu feedback!</Text>
            </Item>
            <Form>
          
            <Button style={{padding:10, backgroundColor:'#282c34', width:'100%'}} onPress={this.homel}><Text style={{color:'white', flex:1, textAlign:'center'}}>VOLTAR PARA A HOME</Text></Button>
          </Form>
            
          </View>
        </Modal>
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