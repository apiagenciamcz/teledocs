import React, { Component } from 'react';
import { Content, View, Text } from 'native-base';

export default class SideBar extends Component{
    render(){
        return(
            <Content style={{backgroundColor:"#fff"}}>
                <View>
                <Text>Item 01</Text>
                <Text>Item 02</Text>
                </View>
            </Content>
            
        )
    }
}