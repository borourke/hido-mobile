import React, { Component } from 'react';
import { 
  Text, 
  View,
  StyleSheet,
  ActivityIndicator
} from 'react-native';
import DeviceHome from './DeviceHome'

class AttemptingConnect extends Component {

  static navigationOptions = {
    title: 'Connection Set Up'
  }

  componentDidMount(){
    // Start counting when the page is loaded
    this.timeoutHandle = setTimeout(()=>{
      this.props.navigation.navigate('DeviceHome', { 'deviceConnected': true });
    }, 5000);
  }

  componentWillUnmount(){
    clearTimeout(this.timeoutHandle); 
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size='large'/>
      </View>
    );
  }
}

export default AttemptingConnect