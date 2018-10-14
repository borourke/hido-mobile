import React, { Component } from 'react';
import { 
  Text, 
  View,
  StyleSheet
} from 'react-native';
import DeviceHome from './DeviceHome'
import TouchableButton from '../components/TouchableButton'

class AddMedicine extends Component {

  static navigationOptions = {
    title: 'Add Medication'
  }

  _onDonePush = () => {
    this.props.navigation.push('DeviceHome');
  }

  render() {
    const { navigation } = this.props;
    const slotId = navigation.getParam('slotId');

    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>1. Scan medicine using barcode scanner on device</Text>
        <Text>2. Add medication to slot designated slot on screen</Text>
        <TouchableButton text='Done Adding Medicine' onPress={this._onDonePush} />
      </View>
    );
  }
}

export default AddMedicine