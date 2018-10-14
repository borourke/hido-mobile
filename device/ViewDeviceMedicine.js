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
    const { navigation } = this.props;
    const item = navigation.getParam('item');

    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', margin: 30 }}>
        <Text>Slot ID: {item.slot_id}</Text>
        <Text>Name: {item.name}</Text>
        <Text>Dosage: {item.dosage}</Text>
        <Text>Description: {item.description}</Text>
        <TouchableButton text='Dispense' onPress={this._onDispensePress} />
      </View>
    );
  }
}

export default ViewDeviceMedicine