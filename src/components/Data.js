import React, { Component } from 'react';
import { DatePicker} from 'native-base';

export default class Data extends Component {
  constructor(props) {
    super(props);
    this.state = { chosenDate: new Date() };
    this.setDate = this.setDate.bind(this);
  }
  setDate(newDate) {
    this.setState({ chosenDate: newDate });
  }
  render() {
    return (
          <DatePicker
            defaultDate={new Date(2018, 4, 4)}
            minimumDate={new Date(1960, 1, 1)}
            maximumDate={new Date(2018, 12, 31)}
            locale={"en"}
            timeZoneOffsetInMinutes={undefined}
            modalTransparent={false}
            animationType={"fade"}
            androidMode={"default"}
            placeHolderText="Informe a sua data de nascimento"
            textStyle={{marginLeft:10, borderBottomWidth:1, borderBottomColor:'#ccc', marginTop:15, fontSize:16, color:'#282c34'}}
            placeHolderTextStyle={{ color: "#999", fontSize:16, marginLeft:10, marginTop:15, borderBottomWidth:1, borderBottomColor:'#ccc' }}
            onDateChange={this.setDate}
            disabled={false}
            
            />
    );
  }
}