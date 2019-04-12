import React, { Component } from 'react';
import { ScrollView, StyleSheet} from 'react-native';
import { Card, Content, Left, Body, Text, CardItem, Button, Thumbnail, Item, Footer, Right, View, Input, Picker} from 'native-base';

import Voltar from 'react-native-vector-icons/EvilIcons';
import IcoHome from 'react-native-vector-icons/MaterialCommunityIcons';
import {Actions} from 'react-native-router-flux';
import Modal from "react-native-modal";
import { TextInputMask } from 'react-native-masked-text';


export default class Visita01 extends Component{

    home(){
        Actions.home()
    };

    visita02(){
        Actions.visita02()
    };

    state = {
        isModalVisible: false,
      };
    
      _toggleModal = () =>
        this.setState({ isModalVisible: !this.state.isModalVisible });
    
    render(){
        return(
            <ScrollView style={{backgroundColor:'#eaebed'}}>



            
            <Content style={{padding:20, borderColor:'pink'}}>
                <Item style={{borderBottomWidth:0}}>
                    <Text style={{color:"#282c34", fontSize:22, fontWeight:"bold", marginBottom:20}}>Para quem você deseja essa consulta?</Text>
                </Item>
                <Card style={{flex: 0, marginBottom:10}}>
                <CardItem >
                <Left>
                    <Thumbnail style={{backgroundColor:'#007bff'}} />
                    <Body>
                    <Text onPress={this.visita02}>Israel Moreira</Text>
                    </Body>
                </Left>
                </CardItem>
                </Card>


                <Card style={{flex: 0, marginBottom:10}}>
                <CardItem >
                <Left>
                    <Thumbnail style={{backgroundColor:'#e83e8c'}}  />
                    <Body>
                    <Text>Meu Filho</Text>
                    <Text note onPress={this._toggleModal}>Obrigatório ser menor de 18 anos.</Text>
                    </Body>
                </Left>
                </CardItem>
                </Card>

                    <Card style={{flex: 0}}>
                    <CardItem >
                        <Body >
                        <Text >Para outra pessoa?</Text>
                        <Text note >Se o paciente tiver mais de 18 anos, mesmo que seja dependente do seu plano de saúde, ele precisará <Text style={{fontWeight:'bold', color:'#282c34'}}>criar sua própria conta.</Text></Text>
                        </Body>
                    </CardItem>
                    </Card>
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