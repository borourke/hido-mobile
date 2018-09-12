import React, { Component } from 'react';
import { 
  Text, 
  View 
} from 'react-native';

class ScheduleHome extends Component {

  static navigationOptions = {
    title: 'Schedule Home'
  }
  
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Schedule Home!</Text>
      </View>
    );
  }
}

export default ScheduleHome