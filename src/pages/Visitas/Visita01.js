import React, { Component } from 'react';
import { ScrollView, StyleSheet} from 'react-native';
import { Card, Content, Left, Body, Text, CardItem, Button, Thumbnail, Item, Footer, Right} from 'native-base';

import Voltar from 'react-native-vector-icons/EvilIcons';

import IcoHome from 'react-native-vector-icons/MaterialCommunityIcons';



import {Actions} from 'react-native-router-flux';


export default class Visita01 extends Component{

    home(){
        Actions.home()
    };

    state = {
        isModalVisible: false,
      };
    
      _toggleModal = () =>
        this.setState({ isModalVisible: !this.state.isModalVisible });
    
    render(){
        return(
            <ScrollView style={{backgroundColor:'#eaebed'}}>
            <Item style={{borderBottomWidth:0, marginLeft:10, marginTop:10}}>
            <Button transparent onPress={this.home}><Voltar name='arrow-left' size={50} style={{color:'#282c34'}}></Voltar></Button>
            </Item>


            
            <Content style={{padding:20, borderColor:'pink'}}>
                <Item style={{borderBottomWidth:0}}>
                    <Text style={{color:"#282c34", fontSize:22, fontWeight:"bold", marginBottom:20}}>Para quem você deseja essa consulta?</Text>
                </Item>
                <Card style={{flex: 0, marginBottom:20}}>
                <CardItem >
                <Left>
                    <Thumbnail style={{backgroundColor:'#007bff'}} />
                    <Body>
                    <Text>Israel Moreira</Text>
                    </Body>
                </Left>
                </CardItem>
                </Card>


                <Card style={{flex: 0, marginBottom:20}}>
                <CardItem >
                <Left>
                    <Thumbnail style={{backgroundColor:'#e83e8c'}} />
                    <Body>
                    <Text>Meu Filho</Text>
                    <Text note>Obrigatório ser menor de 18 anos.</Text>
                    </Body>
                </Left>
                </CardItem>
                </Card>

                <Card style={{flex: 0}}>
                <CardItem >
                    <Body>
                    <Text>Para outra pessoa?</Text>
                    <Text note>Se o paciente tiver mais de 18 anos, ele precisará criar sua própria conta, mesmo que seja dependente do seu plano de saúde.</Text>
                    </Body>
                </CardItem>
                </Card>
            </Content>
            <Footer style={{backgroundColor:'#eaebed'}}>
                    <Left></Left>
                    <Body></Body>
                    <Right><Button transparent onPress={this.home}><IcoHome name='home-circle' size={50} style={{color:'#17a2b8'}}></IcoHome></Button></Right>
            </Footer>

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