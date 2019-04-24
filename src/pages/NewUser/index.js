import React, { Component } from "react";
import { ScrollView, Platform } from "react-native";

import {
  View,
  Picker,
  Header,
  Button,
  Text,
  Content,
  Form,
  Item,
  Input,
  Icon,
  Label,
  Left,
  Right,
  Title,
  Body
} from "native-base";
import Face from "react-native-vector-icons/FontAwesome";
import { Actions } from "react-native-router-flux";
import { TextInputMask } from "react-native-masked-text";

import MenuHeader from "react-native-vector-icons/AntDesign";

import styles from "./styles";

export default class NewUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      phoneBR: "",
      dt: "",
      selected: ""
    };
  }

  home() {
    Actions.home();
  }
  login() {
    Actions.login();
  }

  onValueChange(value) {
    this.setState({
      selected: value
    });
  }

  render() {
    return (
      <ScrollView style={{ backgroundColor: "#fff", padding: 20 }}>
        <MenuHeader
          name="arrowleft"
          size={30}
          color="#282c34"
          onPress={this.login}
        />
        <Content>
          <Text style={styles.title}>Criar Nova Conta</Text>
          <Face.Button
            name="facebook"
            backgroundColor="#3b5998"
            style={{
              marginTop: 5,
              marginBottom: 5,
              marginLeft: 40,
              marginRight: 40
            }}
          >
            <Text style={{ fontFamily: "Arial", fontSize: 15, color: "#fff" }}>
              Cadastre-se com o Facebook
            </Text>
          </Face.Button>
          <Content
            style={{ width: "100%", borderBottomWidth: 0, marginTop: 10 }}
          >
            <Left style={{ width: "80%", marginTop: 16 }}>
              <Item style={{ width: "40%" }} />
            </Left>
            <Body style={{ marginTop: -15 }}>
              <Text>OU</Text>
            </Body>
            <Right style={{ width: "80%", marginTop: -5 }}>
              <Item style={{ width: "40%" }} />
            </Right>
          </Content>
          <Text style={styles.subtitle}>entre com os seus dados:</Text>
          <Form style={{ marginLeft: -10 }}>
            <Item stackedLabel style={styles.inputContainer}>
              <Label style={styles.inputLabel}>Nome</Label>
              <Input
                style={styles.input}
                placeholder="Digite seu nome aqui."
                placeholderTextColor="#999"
              />
            </Item>
            <Item stackedLabel style={styles.inputContainer}>
              <Label style={styles.inputLabel}>Email</Label>
              <Input
                style={styles.input}
                placeholder="Digite seu email aqui."
                placeholderTextColor="#999"
              />
            </Item>
            <Item stackedLabel style={styles.inputContainer}>
              <Label style={styles.inputLabel}>Gênero</Label>
              <Picker
                selectedValue={this.state.language}
                style={{ height: 50, width: "100%" }}
                onValueChange={(itemValue, itemIndex) =>
                  this.setState({ language: itemValue })
                }
                placeholder="Selecione o seu sexo"
              >
                <Picker.Item
                  label="Selecione o seu sexo"
                  value=""
                  color="#999"
                />
                <Picker.Item
                  label="Masculino"
                  value="Masculino"
                  color="#282c34"
                />
                <Picker.Item
                  label="Feminino"
                  value="Feminino"
                  color="#282c34"
                />
              </Picker>
            </Item>

            <Item stackedLabel style={styles.inputContainer}>
              <Label style={styles.inputLabel}>Data de nascimento</Label>
              <TextInputMask
                type={"datetime"}
                maxLength={10}
                style={{
                  width: "100%",
                  marginTop: 15,
                  paddingLeft: Platform.OS === "ios" ? 20 : 10
                }}
                options={{
                  mask: "99/99/9999"
                }}
                value={this.state.nascimento}
                onChangeText={text => {
                  this.setState({
                    nascimento: text
                  });
                }}
                placeholder="99/99/9999"
              />
            </Item>
            <Item stackedLabel style={styles.inputContainer}>
              <Label style={styles.inputLabel}>Celular</Label>
              <TextInputMask
                type={"cel-phone"}
                maxLength={15}
                onChangeText={text => {
                  this.setState({
                    phoneBR: text
                  });
                }}
                style={{
                  width: "100%",
                  marginTop: 15,
                  paddingLeft: Platform.OS === "ios" ? 20 : 10
                }}
                options={{
                  mask: "(99) 99999-9999"
                }}
                value={this.state.phoneBR}
                placeholder="(99) 99999-9999"
              />
            </Item>
            <Item stackedLabel style={styles.inputContainer}>
              <Label style={styles.inputLabel}>Senha</Label>
              <Input
                secureTextEntry={true}
                maxLength={6}
                style={styles.input}
                placeholder="Digite sua senha"
                placeholderTextColor="#999"
              />
            </Item>

            <Button
              block
              style={{
                backgroundColor: "#282c34",
                marginTop: 20,
                marginBottom: 40
              }}
              onPress={this.home}
            >
              <Text> Cadastrar </Text>
            </Button>
          </Form>
        </Content>
      </ScrollView>
    );
  }
}
