import React, { Component } from 'react';
import { 
  Text, 
  View,
  StyleSheet
} from 'react-native';
import TextInputPlus from '../components/TextInputPlus'
import TouchableButton from '../components/TouchableButton'

class ViewDeviceMedicine extends Component {

  static navigationOptions = {
    title: 'View Medicine'
  }

  _onDispensePress = () => {
    this.props.navigation.navigate('AttemptingConnect');
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Info about this medicine goes here.  Yadiyada.</Text>
        <TouchableButton text='Dispense' onPress={this._onDispensePress} />
      </View>
    );
  }
}

export default ViewDeviceMedicine