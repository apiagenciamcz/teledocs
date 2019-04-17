import React, { Component } from 'react';
import { ScrollView, StyleSheet} from 'react-native';
import { Header, Card, Content, Left, Body, Text, CardItem, Button, Thumbnail, Item, Drawer, Label, View, Input, Picker} from 'native-base';

import Voltar from 'react-native-vector-icons/EvilIcons';
import IcoHome from 'react-native-vector-icons/MaterialCommunityIcons';
import {Actions} from 'react-native-router-flux';
import Modal from "react-native-modal";
import { TextInputMask } from 'react-native-masked-text';

import MenuHeader from 'react-native-vector-icons/AntDesign';
import MenuModal from 'react-native-vector-icons/EvilIcons';
import SideBar from '../SideBar';

export default class Visita01 extends Component{

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
        isModalVisible: false,
      };
    
      _toggleModal = () =>
        this.setState({ isModalVisible: !this.state.isModalVisible });
    
    render(){
        return(
            <Drawer ref={(ref) => { this._drawer = ref; }} 
            content={<SideBar navigator={this._navigator} />} 
            onClose={() => this.closeDrawer()} >
            <Header style={{backgroundColor:'#282c34', shadowColor:'blue', shadowOpacity:2, height:60}}>
            <Item style={{borderBottomWidth:0, marginLeft:-190}}>
                    <MenuHeader name="arrowleft" size={30} color="#fff" onPress={this.home} />
                    <Text style={{color:"#fff", marginLeft:-30, fontSize:20, marginLeft:20}}>Paciente</Text>  
                </Item> 
            </Header>
            <ScrollView style={{backgroundColor:'#eaebed'}}>



            
            <Content style={{padding:20, borderColor:'pink'}}>
                <Item style={{borderBottomWidth:0}}>
                    <Text style={{color:"#282c34", fontSize:22, fontWeight:"bold", marginBottom:20}}>Para quem você deseja essa consulta?</Text>
                </Item>
                <Card transparent style={{flex: 0, marginBottom:10}}>
                <CardItem >
                    <Item onPress={this.visita02} style={{borderBottomWidth:0}}>
                    <Left >
                    <Thumbnail style={{backgroundColor:'#007bff'}} />
                    <Body>
                    <Text style={{marginTop:-40, marginLeft:-45}}>Israel Moreira</Text>
                    </Body>
                </Left>
                    </Item>
                
                </CardItem>
                </Card>


                <Card transparent style={{flex: 0, marginBottom:10}}>
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

                    <Card transparent style={{flex: 0}}>
                    <CardItem >
                        <Body >
                        <Text >Para outra pessoa?</Text>
                        <Text note >Se o paciente tiver mais de 18 anos, mesmo que seja dependente do seu plano de saúde, ele precisará <Text style={{fontWeight:'bold', color:'#282c34'}}>criar sua própria conta.</Text></Text>
                        </Body>
                    </CardItem>
                    </Card>
                <Modal isVisible={this.state.isModalVisible} style={{maxHeight:460}}>
                
          <View style={{ flex: 1, backgroundColor:'#fff', padding:20 }} size={100}>
          <MenuModal name="close" size={30} color="#282c34" onPress={this._toggleModal} style={{marginBottom:20}} />
            <Item stackedLabel>
                    <Label style={{fontSize:15, color:'#282c34'}}>Nome</Label>
                    <Input style={styles.inputs} placeholder="Digite aqui o nome do seu filho" placeholderTextColor="#999"/>
            </Item>
                <Item style={{marginTop:25}}>
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
                <View style={{borderBottomWidth:1, padding:20, borderBottomColor:'#ccc', width:'100%'}}>
                              <Label style={{fontSize:16, color:'#282c34', marginLeft:-20}}>Digite a data de nascimento</Label>
                              <TextInputMask
                                                      type={'datetime'}
                                                      maxLength={10}
                                                      options={{
                                                        mask: '99/99/9999'
                                                      }}
                                                      value={this.state.nascimento}
                                                      onChangeText={text => {
                                                        this.setState({
                                                          nascimento: text
                                                        })
                                                      }}
                                                      style={{marginBottom:-28, fontSize:15, marginLeft:-15}}
                                                      placeholder="99/99/9999"
                                                  />
                            </View>

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