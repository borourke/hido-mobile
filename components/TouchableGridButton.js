import React, { Component } from 'react';
import { 
  Text, 
  TouchableOpacity,
  StyleSheet 
} from 'react-native';

const TouchableGridButton = ({ text, onPress }) => (
  <TouchableOpacity
    style={styles.button}
    onPress={onPress}
  >
    <Text>{text}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    flex: 1,
    minWidth: '90%',
    minHeight: '90%',
    maxHeight: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
    borderRadius: 4,
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    marginLeft: 10,
    marginTop: 10
  }
})

export default TouchableGridButton;