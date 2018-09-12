import React, { Component } from 'react';
import { 
  Text, 
  View, 
  TouchableOpacity,
  StyleSheet 
} from 'react-native';

class HistoryTab extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: 'Medicine'
  })

  render() {
    return(
      <View>
        <Text>I'm History tab</Text>
      </View>
    )
  }
}

export default HistoryTab