import React, { Component } from 'react';
import { 
  Text, 
  TextInput,
  StyleSheet,
  View
} from 'react-native';

const TextInputPlus = ({ title, placeholder }) => (
  <View style={{justifyContent: 'center', alignItems: 'center' }}>
    <Text style={styles.searchTitle}>{title}</Text>
    <TextInput 
      style={styles.searchInput} 
      placeholder={placeholder} />
  </View>
);

const styles = StyleSheet.create({
  searchInput: {
    height: 36,
    maxHeight: 36,
    padding: 4,
    marginRight: 5,
    flexGrow: 1,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#48BBEC',
    borderRadius: 8,
    color: '#48BBEC',
    minWidth: 250,
    marginBottom: 30,
    backgroundColor: '#F5FCFF'
  },
  searchTitle: {
    paddingBottom: 15,
    paddingTop: 15,
    fontSize: 18
  }
});

export default TextInputPlus;