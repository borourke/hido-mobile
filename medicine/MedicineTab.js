import React, { Component } from 'react';
import { 
  Text, 
  View, 
  TouchableOpacity,
  StyleSheet 
} from 'react-native';

class MedicineTab extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: 'Medicine'
  })

  render() {
    return(
      <View>
        <Text>I'm Medicine tab</Text>
      </View>
    )
  }
}

export default MedicineTab