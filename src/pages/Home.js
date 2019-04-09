import React, { Component } from 'react';
import { Container, Header, Left, Body, Button, Icon, Title, Drawer } from 'native-base';
import {Actions} from 'react-native-router-flux';
import SideBar from './SideBar';

export default class Home extends Component{
    closeDrawer() {
        this._drawer._root.close()
      };
    openDrawer() { 
        this._drawer._root.open() 
    };
    render(){
        return(
            <Drawer ref={(ref) => { this._drawer = ref; }} 
            content={<SideBar navigator={this._navigator} />} 
            onClose={() => this.closeDrawer()} >
            <Container>
            <Header style={{backgroundColor:'#282c34'}}>
              <Left>
                <Button transparent onPress={() => this.openDrawer()}>
                  <Icon name='menu' />
                </Button>
              </Left>
              <Body style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginRight:50}}>
                <Title>TeleDocs</Title>
              </Body>
            </Header>
          </Container>
          </Drawer>
        )
    }
}