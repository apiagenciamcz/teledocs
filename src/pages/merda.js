import React, { Component } from 'react';
import { Item, Container, Content, Header, Left, Body, Button, Icon, Title, Drawer, Text} from 'native-base';

import AppHeader from './AppHeader';

export default class Home extends Component{

    render(){
        return(
            <Container>
            <AppHeader/>
            <Item>
                <Text> doidera meu irmão</Text>
            </Item>
            </Container>
            
        )
    }
}