import React, { Component } from 'react';
import { 
  Text, 
  TouchableOpacity,
  StyleSheet 
} from 'react-native';

const TouchableButton = ({ text, onPress }) => (
  <TouchableOpacity
    style={styles.button}
    onPress={onPress}
  >
    <Text>{text}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    borderRadius: 4,
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    minWidth: 200,
    marginTop: 30
  }
})

export default TouchableButton;