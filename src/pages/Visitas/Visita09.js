import React, { Component } from 'react';
import { ScrollView, StyleSheet,View} from 'react-native';
import { Form, Content, Left, Body, Text, Button, Item, Right} from 'native-base';
import { RadioButton} from 'react-native-paper';

import {Actions} from 'react-native-router-flux';
import StarRating from 'react-native-star-rating';


export default class Visita09 extends Component{
    
    state = {
        checked: 'naourgente',
        checked: 'sim',
        
      };


    home(){
        Actions.home()
    };

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
                    <Text style={{color:"#282c34", fontSize:16}}>Como você percebe a urgência do seu problema?</Text>
                </Item>
                <Item style={{backgroundColor:'#fff', padding:10}}>
                    <Left style={{width:'10%'}}>
                        <RadioButton
                            value="naourgente"
                            color="#2ab200"
                            status={checked === 'naourgente' ? 'checked' : 'unchecked'}
                            onPress={() => { this.setState({ checked: 'naourgente' }); }}
                            />
                    </Left>
                    <Body style={{width:'90%', marginLeft:-500}}>
                        <Text style={{color:'#2ab200'}}>Não Urgente</Text>
                    </Body>
                </Item>
                <Item style={{backgroundColor:'#fff', padding:10}}>
                    <Left style={{width:'10%'}}>
                        <RadioButton
                            value="urgente"
                            color="#ffc107"
                            status={checked === 'urgente' ? 'checked' : 'unchecked'}
                            onPress={() => { this.setState({ checked: 'urgente' }); }}
                            />
                    </Left>
                    <Body style={{width:'90%', marginLeft:-570}}>
                        <Text style={{color:'#ffc107'}}>Urgente</Text>
                    </Body>
                </Item>
                <Item style={{backgroundColor:'#fff', padding:10}}>
                    <Left style={{width:'10%'}}>
                        <RadioButton
                            value="grave"
                            color="#dc3545"
                            status={checked === 'grave' ? 'checked' : 'unchecked'}
                            onPress={() => { this.setState({ checked: 'grave' }); }}
                            />
                    </Left>
                    <Body style={{width:'90%', marginLeft:-150}}>
                        <Text style={{color:'#dc3545'}}>Grave</Text>
                    </Body>
                    <Right>
                        
                    </Right>
                </Item>
                <Item style={{borderBottomWidth:0, marginTop:20, marginBottom:20}}>
                    <Text style={{color:"#282c34", fontSize:16}}>O médico te encaminhou para o pronto-socorro?</Text>
                </Item>
                <RadioButton.Group
        onValueChange={value => this.setState({ value })}
        value={this.state.value}
      >
                <Item style={{backgroundColor:'#fff', padding:10}}>
                    <Left style={{width:'10%'}}>
                        <RadioButton value="sim" color="#282c34"/>
                    </Left>
                    <Body style={{width:'90%', marginLeft:-150}}>
                        <Text style={{color:'#282c34'}}>Sim</Text>
                    </Body>
                    <Right>
                    </Right>
                </Item>
                <Item style={{backgroundColor:'#fff', padding:10}}>
                    <Left style={{width:'10%'}}>
                        <RadioButton value="nao" color="#282c34"/>
                    </Left>
                    <Body style={{width:'90%', marginLeft:-150}}>
                        <Text style={{color:'#282c34'}}>Não</Text>
                        
                    </Body>
                    <Right>
                    
                    </Right>
                </Item>
                </RadioButton.Group>
                <Item style={{borderBottomWidth:0, marginTop:20, marginBottom:20}}>
                    <Text style={{color:"#282c34", fontSize:16}}>Quantas estrelas você dá para o médico que fez o seu atendimento?</Text>
                </Item>
                <Item style={{marginBottom:10, borderBottomWidth:0, backgroundColor:'#fff', padding:10}}>
                        <Item style={{marginLeft:50, borderBottomWidth:0}}>
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
                </Item>
                <Form>
                    <Button style={{padding:10, backgroundColor:'#17a2b8', width:'100%', marginTop:20}} onPress={this._toggleModal}>
                        <Text style={{color:'white', flex:1, textAlign:'center'}} onPress={this.home}>CONCLUIR</Text>
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