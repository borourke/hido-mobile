import React, { Component } from 'react';
import { 
  Text, 
  View, 
  TouchableOpacity,
  StyleSheet 
} from 'react-native';

class DeviceTab extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: 'Device'
  })

  render() {
    return(
      <View>
        <Text>I'm Device tab</Text>
      </View>
    )
  }
}

export default DeviceTab