import React, { Component } from 'react';
import { 
  Text, 
  View 
} from 'react-native';

class HistoryHome extends Component {

  static navigationOptions = {
    title: 'History Home'
  }
  
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>History Home!</Text>
      </View>
    );
  }
}

export default HistoryHome