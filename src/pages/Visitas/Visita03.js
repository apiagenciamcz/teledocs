import React, { Component } from 'react';
import { ScrollView, StyleSheet} from 'react-native';
import { Form, Content, Left, Body, Text, Button, Thumbnail, Item, Footer, Right, View, Input, Picker} from 'native-base';

import Voltar from 'react-native-vector-icons/EvilIcons';
import IcoHome from 'react-native-vector-icons/MaterialCommunityIcons';
import {Actions} from 'react-native-router-flux';
import Modal from "react-native-modal";
import { TextInputMask } from 'react-native-masked-text';
import Slider from "react-native-slider";


export default class Visita03 extends Component{

    home(){
        Actions.home()
    };

    visita01(){
        Actions.visita01()
    };

    visita02(){
        Actions.visita02()
    };

    state = {
        value: 1
      };

    render(){
        return(
            <ScrollView style={{backgroundColor:'#eaebed'}}>
            <Item style={{borderBottomWidth:0, marginLeft:10, marginTop:10}}>
            <Button transparent onPress={this.visita02}><Voltar name='arrow-left' size={50} style={{color:'#282c34'}}></Voltar></Button>
            </Item>


            
            <Content style={{padding:20}}>
                <Item style={{borderBottomWidth:0}}>
                    <Text style={{color:"#282c34", fontSize:22, fontWeight:"bold", marginBottom:20}}>Há quanto tempo está com o problema?</Text>
                </Item>
                <Item style={{borderBottomWidth:0}}>
                  <Left><Text style={{color:"#282c34"}}>0</Text></Left>
                  <Body></Body>
                  <Right><Text style={{color:"#282c34"}}>30</Text></Right>
                </Item>
                <Slider
                minimumValue={0}
                maximumValue={30}
                minimumTrackTintColor='#17a2b8'
                maximumTrackTintColor='#17a2b8'
                thumbTintColor='#282c34'
                step={1}
          value={this.state.value}
          onValueChange={value => this.setState({ value })}
        />
        <Item style={{borderBottomWidth:0, justifyContent:'center'}}>
        <Text style={{color:"#282c34"}}>
          {this.state.value}
        </Text>
        </Item>
        <Item style={{borderBottomWidth:0, marginTop:20}}>
          <Text style={{color:"#282c34", fontSize:18, fontWeight:"bold"}}>Dias, meses, ano?</Text>
        </Item>
        <Item>
                      <Picker
                        selectedValue={this.state.language}
                        style={{height: 50, width: 100}}
                        onValueChange={(itemValue, itemIndex) =>
                            this.setState({language: itemValue})
                        }>
                        <Picker.Item label="Dias" value="Dias" color="#999"/>
                        <Picker.Item label="Meses" value="Meses" color="#282c34"/>
                        <Picker.Item label="Ano" value="Anos" color="#282c34"/>
                    </Picker>
        </Item>

                <Form>
                    
                    <Button style={{padding:10, backgroundColor:'#17a2b8', width:'100%', marginTop:20}} onPress={this._toggleModal}>
                        <Text style={{color:'white', flex:1, textAlign:'center'}} onPress={this.visita04}>AVANÇAR</Text>
                    </Button>
                </Form>


                <Modal isVisible={this.state.isModalVisible} style={{maxHeight:400}}>
          <View style={{ flex: 1, backgroundColor:'#fff', padding:20 }} size={100}>
            <Item style={{borderBottomWidth:0}}>
                    <Text style={{color:"#282c34", fontSize:22, fontWeight:"bold", marginBottom:20}}>Adicione seu filho</Text>
            </Item>
            <Item>
                    <Input placeholder="Digite o nome" style={{color:'#282c34', fontSize:16}} placeholderTextColor="#999"/>
                </Item>
                <Item>
                    <Picker
                        selectedValue={this.state.language}
                        style={{height: 50, width: 100}}
                        onValueChange={(itemValue, itemIndex) =>
                            this.setState({language: itemValue})
                        }>
                        <Picker.Item label="Selecione o sexo" value="Masculino" color="#999"/>
                        <Picker.Item label="Masculino" value="Masculino" color="#282c34"/>
                        <Picker.Item label="Feminino" value="Feminino" color="#282c34"/>
                    </Picker>
                </Item>

                <Item style={{borderBottomWidth:1}}>
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
                  placeholder=" 21/11/1983" type="datetime"
                />
            </Item>
            <Item style={{marginTop:20, marginBottom:20, borderBottomWidth:0}}>
            <Text style={{fontWeight:'bold', color:'#282c34'}}>Nota: <Text note style={{fontWeight:'100'}}>Ao continuar, concordo que estou legalmente autorizado a tomar decisões médicas para esta pessoa. </Text></Text>
            </Item>
            <Button style={{padding:10, backgroundColor:'#17a2b8', width:'100%'}} onPress={this._toggleModal}><Text style={{color:'white', flex:1, textAlign:'center'}}>SALVAR</Text></Button>
          </View>
        </Modal>

        
            </Content>

            <Footer style={{backgroundColor:'#eaebed'}}>
                    <Left></Left>
                    <Body></Body>
                    <Right><Button transparent onPress={this.home}><IcoHome name='home-circle' size={50} style={{color:'#17a2b8', marginRight:20}}></IcoHome></Button></Right>
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