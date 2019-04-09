import React, { Component } from 'react';
import { ScrollView, StyleSheet, Image} from 'react-native';
import { Header, Left, Body, Text, Form, Title, Drawer, Button, Right, Item, Card, CardItem, View, Label, Input} from 'native-base';

import Voltar from 'react-native-vector-icons/FontAwesome';

import {Actions} from 'react-native-router-flux';
import MenuHeader from 'react-native-vector-icons/MaterialCommunityIcons';
import Modal from "react-native-modal";
import { TextInputMask } from 'react-native-masked-text';



import SideBar from './SideBar';

export default class MeiosdePagt extends Component{
  constructor(props) {
    super(props)

    this.state = {
      cartao: '',
      nascimento: '',
      verificador: '',
    }
  }
    closeDrawer() {
        this._drawer._root.close()
      };
    openDrawer() { 
        this._drawer._root.open() 
    };

    back(){
        Actions.pop()
    };

    state = {
        isModalVisible: false,
      };
    
      _toggleModal = () =>
        this.setState({ isModalVisible: !this.state.isModalVisible });
    
    render(){
        return(
            
            <Drawer ref={(ref) => { this._drawer = ref; }} 
            content={<SideBar navigator={this._navigator} />} 
            onClose={() => this.closeDrawer()} >
            <Header style={{backgroundColor:'#fff', shadowColor:'blue', shadowOpacity:2}}>
                <Left>
                    <Button transparent onPress={() => this.back()}>
                            <Voltar name='arrow-left' size={20} style={{color:'#282c34'}}></Voltar>
                    </Button>
                </Left>
                <Body style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginLeft:50}}>
                  <Title style={{color:'#282c34'}}>TeleDocs</Title>
                </Body>
                <Right>
                    <MenuHeader name="menu" size={30} color="#282c34" onPress={() => this.openDrawer()} />
                </Right>
              </Header>
            
              <ScrollView style={{backgroundColor:'#eaebed', padding:20}} scrollEnabled={true}>
                <Item style={{marginBottom:20}}>
                    <Text style={styles.title}>Meios de Pagamento</Text>
                </Item>
                <Card>
            <CardItem header>
              <Text>DADOS DO CARTÃO</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text style={{fontWeight:'500'}}>BANDEIRA: <Text style={{fontWeight:'100'}}>MasterCard</Text></Text>
                <Text style={{fontWeight:'500'}}>TITULAR: <Text style={{fontWeight:'100'}}>Israel Moreira</Text></Text>
                <Text style={{fontWeight:'500'}}>CARTÃO: <Text style={{fontWeight:'100'}}>4001 6358 0635 0157</Text></Text>
                <Text style={{fontWeight:'500'}}>VALIDADE: <Text style={{fontWeight:'100'}}>05/19</Text></Text>
                <Text style={{fontWeight:'500'}}>CÓDIGO: <Text style={{fontWeight:'100'}}>579</Text></Text>
              </Body>
            </CardItem>
         </Card>

                <Button style={{padding:10, backgroundColor:'#17a2b8', width:'100%', marginTop:20}} onPress={this._toggleModal}><Text style={{color:'white', flex:1, textAlign:'center'}}>ADICIONAR NOVO CARTÃO</Text></Button>


                <Modal isVisible={this.state.isModalVisible} style={{maxHeight:380}}>
          <View style={{ flex: 1, backgroundColor:'#fff', padding:20 }} size={100}>
            <Item style={{borderBottomWidth:0, marginBottom:20}}>
                <Text style={{color:'#282c34', fontWeight:'bold', fontSize:16}}>TeleDocs</Text>
            </Item>
            <Form>
          <Item style={{borderBottomWidth:0}}>
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
                style={styles.inputMask}
                placeholder="Digite o número do cartão" type="credit-card"
              />
          </Item>

          <Item style={{borderBottomWidth:0, marginTop:-10}}>
                  <TextInputMask
                  type={'custom'}
                  options={{
                    mask: '99/99/9999'
                  }}
                  value={this.state.nascimento}
                  onChangeText={text => {
                    this.setState({
                      nascimento: text
                    })
                  }}
                  style={styles.inputMask}
                  placeholder="Digite a data de validade" type="datetime"
                />
            </Item>

            <Item style={{borderBottomWidth:0, marginTop:-10}}>
                  <TextInputMask
                  type={'custom'}
                  options={{
                    mask: '999'
                  }}
                  value={this.state.verificador}
                  onChangeText={text => {
                    this.setState({
                      verificador: text
                    })
                  }}
                  style={styles.inputMask}
                placeholder="Digite o código verificador" type="only-numbers" maxLength={3}
                />
            </Item>
            <Button style={{padding:10, backgroundColor:'#282c34', width:'100%'}} onPress={this._toggleModal}><Text style={{color:'white', flex:1, textAlign:'center'}}>CADASTRAR</Text></Button>
          </Form>
            
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