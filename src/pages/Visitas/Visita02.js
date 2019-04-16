import React, { Component } from 'react';
import { ScrollView, StyleSheet} from 'react-native';
import { Form, Content, Header, Drawer, Text, Button, Item, View, Input, Picker} from 'native-base';

import Voltar from 'react-native-vector-icons/EvilIcons';
import IcoHome from 'react-native-vector-icons/MaterialCommunityIcons';
import {Actions} from 'react-native-router-flux';
import Modal from "react-native-modal";
import { TextInputMask } from 'react-native-masked-text';
import Textarea from 'react-native-textarea';

import MenuHeader from 'react-native-vector-icons/AntDesign';
import MenuModal from 'react-native-vector-icons/EvilIcons';
import SideBar from '../SideBar';


export default class Visita02 extends Component{

    home(){
        Actions.home()
    };

    visita01(){
        Actions.visita01()
    };

    visita03(){
        Actions.visita03()
    };

    state = {
        isModalVisible: false,
        text: '',
      };
      onChange = (value) => {
        this.setState({ text: value });
      }
    
      _toggleModal = () =>
        this.setState({ isModalVisible: !this.state.isModalVisible });
    
    render(){
        return(
          <Drawer ref={(ref) => { this._drawer = ref; }} 
          content={<SideBar navigator={this._navigator} />} 
          onClose={() => this.closeDrawer()} >
          <Header style={{backgroundColor:'#282c34', shadowColor:'blue', shadowOpacity:2, height:60}}>
              <Item style={{borderBottomWidth:0, marginLeft:-290}}>
                  <MenuHeader name="arrowleft" size={30} color="#fff" onPress={this.visita01} />
              </Item> 
          </Header>
            <ScrollView style={{backgroundColor:'#eaebed'}}>



            
            <Content style={{padding:20}}>
                <Item style={{borderBottomWidth:0}}>
                    <Text style={{color:"#282c34", fontSize:22, fontWeight:"bold", marginBottom:20}}>Qual a razão dessa consulta?</Text>
                </Item>


                <Form>
                <View style={styles.container}>
        <Textarea
          containerStyle={{backgroundColor:'#fff'}}
          style={{padding:10, fontSize:16}}
          onChangeText={this.onChange}
          defaultValue={this.state.text}
          maxLength={280}
          placeholder={'Descreva aqui os motivos de sua consulta'}
          placeholderTextColor={'#c7c7c7'}
          underlineColorAndroid={'transparent'}
        />
      </View>
                  
                    <Button style={{padding:10, backgroundColor:'#17a2b8', width:'100%', marginTop:20}} onPress={this.visita03}>
                        <Text style={{color:'white', flex:1, textAlign:'center'}}>AVANÇAR</Text>
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