import React, { Component } from 'react';
import { ScrollView, StyleSheet, Image, Dimensions} from 'react-native';
import { Header, Left, Body, Text, Thumbnail, Title, Drawer, Button, Right, Item, Card, CardItem, View, Icon} from 'native-base';

import Voltar from 'react-native-vector-icons/FontAwesome';

import {Actions} from 'react-native-router-flux';
import MenuHeader from 'react-native-vector-icons/AntDesign';
import Modal from "react-native-modal";
import Carousel from 'react-native-snap-carousel';



import SideBar from './SideBar';

export default class Consultas extends Component{
    closeDrawer() {
        this._drawer._root.close()
      };
    openDrawer() { 
        this._drawer._root.open() 
    };

    back(){
        Actions.pop()
    };

    home(){
        Actions.home()
    }
    state = {
        isModalVisible: false,
      };
    
      _toggleModal = () =>
        this.setState({ isModalVisible: !this.state.isModalVisible });
    
    render(){
        // let screenWidth = Dimensions.get('window').width;
        return(
            
            <Drawer ref={(ref) => { this._drawer = ref; }} 
            content={<SideBar navigator={this._navigator} />} 
            onClose={() => this.closeDrawer()} >
            <Header style={{backgroundColor:'#282c34', shadowColor:'blue', shadowOpacity:2, height:60}}>
                <Item style={{borderBottomWidth:0, marginLeft:-130}}>
                    <MenuHeader name="arrowleft" size={30} color="#fff" onPress={this.home} />
                    <Text style={{color:"#fff", marginLeft:-30, fontSize:20, marginLeft:20}}>Suas Consultas</Text>  
                </Item> 
            </Header>
              <ScrollView style={{backgroundColor:'#eaebed', padding:20}} >
              {/* scrollEnabled={true} horizontal={true} showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false} */}
              <Card style={{marginBottom:20}}>
              <CardItem>
              <Left>
                <Thumbnail source={require('../images/doctor.jpg')} />
                <Body>
                  <Text style={{fontWeight:'bold', color:'#282c34'}}>ESPECIALISTA</Text>
                  <Text note>Israel Moreira</Text>
                </Body>
              </Left>
             </CardItem>
             <Item style={{width:'90%', marginLeft:15}}></Item>
                  <CardItem>
                      <Text style={{fontWeight:'bold', color:'#282c34'}}>ESPECIALIDADE: <Text note>Neurologista</Text></Text>
                  </CardItem>
                  <CardItem style={{marginTop:-15}}>
                      <Text style={{fontWeight:'bold', color:'#282c34'}}>TEMPO: <Text note>30 Minutos</Text></Text>
                  </CardItem>
                  <CardItem style={{marginTop:-15}}>
                      <Text style={{fontWeight:'bold', color:'#282c34'}}>VALOR: <Text note style={{color:'#b9001f', fontWeight:"100"}}>R$ 150,00</Text></Text>
                  </CardItem>

                  <CardItem>  
                  <Button style={{width:'100%', marginBottom:-10, backgroundColor:'#f14336'}} onPress={this.loginuser} onPress={this._toggleModal}><Text style={{flex:1, textAlign:'center', color:'#fff'}}>PROBLEMA</Text></Button>
                  </CardItem>
                  <CardItem>
                  <Button style={{width:'100%',  marginBottom:-10, backgroundColor:'#ffc107'}} onPress={this.loginuser} onPress={this._toggleModal}><Text style={{flex:1, textAlign:'center', color:'#282c34'}}>RECEITA</Text></Button>
                  </CardItem>
                  <CardItem>
                      <Button info style={{width:'100%'}}><Text style={{flex:1, color:'#fff', marginLeft:85}}>MENSAGEM</Text><Icon active name="chatbubbles" style={{fontSize:22, color:'#fff'}}><Text style={{color:'#fff'}}>&nbsp;4</Text></Icon></Button>
                  </CardItem>
                  <CardItem>
                      <Right>
                      <Text style={{fontWeight:'bold', marginRight:-55, marginTop:-10}}>10/04/2019 | 11:11</Text>
                      </Right>
                  </CardItem>
              </Card>

              <Card style={{marginBottom:20}}>
              <CardItem>
              <Left>
                <Thumbnail source={require('../images/doctor.jpg')} />
                <Body>
                  <Text style={{fontWeight:'bold', color:'#282c34'}}>ESPECIALISTA</Text>
                  <Text note>Israel Moreira</Text>
                </Body>
              </Left>
             </CardItem>
             <Item style={{width:'90%', marginLeft:15}}></Item>
                  <CardItem>
                      <Text style={{fontWeight:'bold', color:'#282c34'}}>ESPECIALIDADE: <Text note>Neurologista</Text></Text>
                  </CardItem>
                  <CardItem style={{marginTop:-15}}>
                      <Text style={{fontWeight:'bold', color:'#282c34'}}>TEMPO: <Text note>30 Minutos</Text></Text>
                  </CardItem>
                  <CardItem style={{marginTop:-15}}>
                      <Text style={{fontWeight:'bold', color:'#282c34'}}>VALOR: <Text note style={{color:'#b9001f', fontWeight:"100"}}>R$ 150,00</Text></Text>
                  </CardItem>

                  <CardItem>  
                  <Button style={{width:'100%', marginBottom:-10, backgroundColor:'#f14336'}} onPress={this.loginuser} onPress={this._toggleModal}><Text style={{flex:1, textAlign:'center', color:'#fff'}}>PROBLEMA</Text></Button>
                  </CardItem>
                  <CardItem>
                  <Button style={{width:'100%',  marginBottom:-10, backgroundColor:'#ffc107'}} onPress={this.loginuser} onPress={this._toggleModal}><Text style={{flex:1, textAlign:'center', color:'#282c34'}}>RECEITA</Text></Button>
                  </CardItem>
                  <CardItem>
                      <Right>
                      <Text style={{fontWeight:'bold', marginRight:-55, marginTop:5}}>08/04/2019 | 09:05</Text>
                      </Right>
                  </CardItem>
              </Card>

              <Card style={{marginBottom:40}}>
              <CardItem>
              <Left>
                <Thumbnail source={require('../images/doctor.jpg')} />
                <Body>
                  <Text style={{fontWeight:'bold', color:'#282c34'}}>ESPECIALISTA</Text>
                  <Text note>Israel Moreira</Text>
                </Body>
              </Left>
             </CardItem>
             <Item style={{width:'90%', marginLeft:15}}></Item>
                  <CardItem>
                      <Text style={{fontWeight:'bold', color:'#282c34'}}>ESPECIALIDADE: <Text note>Neurologista</Text></Text>
                  </CardItem>
                  <CardItem style={{marginTop:-15}}>
                      <Text style={{fontWeight:'bold', color:'#282c34'}}>TEMPO: <Text note>30 Minutos</Text></Text>
                  </CardItem>
                  <CardItem style={{marginTop:-15}}>
                      <Text style={{fontWeight:'bold', color:'#282c34'}}>VALOR: <Text note style={{color:'#b9001f', fontWeight:"100"}}>R$ 150,00</Text></Text>
                  </CardItem>

                  <CardItem>  
                  <Button style={{width:'100%', marginBottom:-10, backgroundColor:'#f14336'}} onPress={this.loginuser} onPress={this._toggleModal}><Text style={{flex:1, textAlign:'center', color:'#fff'}}>PROBLEMA</Text></Button>
                  </CardItem>
                  <CardItem>
                  <Button style={{width:'100%',  marginBottom:-10, backgroundColor:'#ffc107'}} onPress={this.loginuser} onPress={this._toggleModal}><Text style={{flex:1, textAlign:'center', color:'#282c34'}}>RECEITA</Text></Button>
                  </CardItem>
                  <CardItem>
                      <Button info style={{width:'100%'}}><Text style={{flex:1, color:'#fff', marginLeft:85}}>MENSAGEM</Text><Icon active name="chatbubbles" style={{fontSize:22, color:'#fff'}}><Text style={{color:'#fff'}}>&nbsp;4</Text></Icon></Button>
                  </CardItem>
                  <CardItem>
                      <Right>
                      <Text style={{fontWeight:'bold', marginRight:-55, marginTop:-10}}>05/04/2019 | 15:10</Text>
                      </Right>
                  </CardItem>
              </Card>
              
                  <Modal isVisible={this.state.isModalVisible} style={{maxHeight:220}}>
            <View style={{ flex: 1, backgroundColor:'#fff', padding:20 }} size={100}>
                <Item style={{borderBottomWidth:0, marginBottom:20}}>
                    <Text style={{color:'#282c34', fontWeight:'bold', fontSize:16}}>TeleDocs</Text>
                </Item>
                <Item style={{marginTop:20, marginBottom:40, borderBottomWidth:0}}>
                    <Text style={{textAlign:'center'}}>Conteúdo do Modal.</Text>
                </Item>
            
                <Button style={{padding:10, backgroundColor:'#282c34', width:'100%'}} onPress={this._toggleModal}><Text style={{color:'white', flex:1, textAlign:'center'}}>FECHAR</Text></Button>
            </View>
        </Modal>


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
        marginLeft:20,
        marginTop:20,
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
       flex:1,
      alignContent:'center',
      color: '#282c34',
      fontSize:16,
      borderBottomWidth:0
    },



  });