import React, { Component } from 'react';
import { 
  Text, 
  View, 
  TouchableOpacity,
  StyleSheet 
} from 'react-native';

class ScheduleTab extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: 'Medicine'
  })

  render() {
    return(
      <View>
        <Text>I'm Schedule tab</Text>
      </View>
    )
  }
}

export default ScheduleTab