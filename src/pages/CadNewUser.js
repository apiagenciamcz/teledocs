import React, { Component } from 'react';
import {StyleSheet} from 'react-native';
import { Container, Picker, Button, Text, Content, Form, Item, Input} from 'native-base';
import Face from 'react-native-vector-icons/FontAwesome';
import {Actions} from 'react-native-router-flux';
import { TextInputMask } from 'react-native-masked-text';

import DataPicker from '../components/Data'; 




export default class CadNewUser extends Component{
    constructor(props) {
        super(props)
    
        this.state = {
          phoneBR: '',
          dt: '',
        }
      }
    home(){
        Actions.home()
    }
    render(){
        return(
                <Container style={{padding:20}}>
                    
                    <Content>
                    
                        <Text style={styles.title}>Criar Nova Conta</Text>
                        <Face.Button name="facebook" backgroundColor="#3b5998" style={{marginTop:5, marginBottom:5, marginLeft:40, marginRight:40}}>
                            <Text style={{ fontFamily: 'Arial', fontSize: 15, color: "#fff" }}>
                            Cadastre-se com o Facebook
                            </Text>
                        </Face.Button>
                        <Text style={styles.subtitle}>Ou entre com os seus dados.</Text>
                        <Form>
                            <Item>
                            <Input style={styles.inputs} placeholder="Digite o seu nome" placeholderTextColor="#999"/>
                            </Item>

                            <Item>
                            <Input style={styles.inputs} placeholder="Digite o seu email" placeholderTextColor="#999"/>
                            </Item>


                            <Item>
                            <Picker
  selectedValue={this.state.language}
  style={{height: 50, width: 100}}
  onValueChange={(itemValue, itemIndex) =>
    this.setState({language: itemValue})
  }>
  <Picker.Item label="Selecione o seu sexo" value="" color="#999"/>
  <Picker.Item label="Masculino" value="Masculino" color="#282c34"/>
  <Picker.Item label="Feminino" value="Feminino" color="#282c34"/>
</Picker>

                            </Item>
                            <DataPicker/>

                            <Item>
                            <TextInputMask
                                type={'cel-phone'}
                                value={this.state.phoneBR}
                                maxLength={15}
                                onChangeText={text => {
                                this.setState({
                                    phoneBR: text
                                    
                                })
                                }}
                                style={{height: 50, width: '100%', marginTop:5, fontSize:16, color:'#282c34'}}
                                placeholder="Digite o seu telefone"
                            />
                            </Item>

                            <Item>
                            <Input secureTextEntry={true} maxLength={6} style={styles.inputs} placeholder="Digite sua senha" placeholderTextColor="#999"/>
                            </Item>



                            <Button block style={{backgroundColor:'#282c34', marginTop:20, marginBottom:20}} onPress={this.home}><Text> Cadastrar </Text></Button>
                        </Form>
                    </Content>
                </Container>

            
        )
    }
}

const styles = StyleSheet.create({
    title: {
        flex: 1,
        color:'#282c34',
        fontSize:30,
        marginBottom:10,
    },
    subtitle:{
        fontSize: 14,
        textAlign: 'center',
        margin: 10,
    },
    label:{
        fontSize: 14,
        color:'#999',
        padding:3,
        flex:1,
        marginTop:-10,
    },
    inputs:{
        fontSize:16, 
        color:'#282c34',
    },

  });