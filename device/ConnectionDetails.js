import React, { Component } from 'react';
import { 
  Text, 
  View,
  StyleSheet
} from 'react-native';
import TextInputPlus from '../components/TextInputPlus'
import TouchableButton from '../components/TouchableButton'

class ConnectionDetails extends Component {

  static navigationOptions = {
    title: 'Connection Set Up'
  }

  _onConnectPress = () => {
    this.props.navigation.navigate('AttemptingConnect');
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <TextInputPlus title='Device Network' placeholder='Device Network' />
        <TextInputPlus title='Wifi Network' placeholder='Wifi Network' />
        <TextInputPlus title='Wifi Password' placeholder='Wifi Password' />
        <TouchableButton text='Connect' onPress={this._onConnectPress} />
      </View>
    );
  }
}

export default ConnectionDetails