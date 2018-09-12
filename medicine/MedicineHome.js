import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import * as Animatable from 'react-native-animatable';
import Collapsible from 'react-native-collapsible';
import Accordion from 'react-native-collapsible/Accordion';

const BACON_IPSUM =
  'Dosage: 10 mg\n\nInstructions: Take orally twice daily at 10 mg each time.  Side effects include dizziness, nausea, upset stomach and diarhea.  Also you may die.';

const CONTENT = [
  {
    title: 'Medicine 1',
    content: BACON_IPSUM,
  },
  {
    title: 'Medicine 2',
    content: BACON_IPSUM,
  },
  {
    title: 'Medicine 3',
    content: BACON_IPSUM,
  },
  {
    title: 'Medicine 4',
    content: BACON_IPSUM,
  },
  {
    title: 'Medicine 5',
    content: BACON_IPSUM,
  }
];

class MedicineHome extends Component {

  static navigationOptions = {
    title: 'Medications'
  }

  state = {
    activeSection: false,
    collapsed: true,
  };

  toggleExpanded = () => {
    this.setState({ collapsed: !this.state.collapsed });
  };

  setSection = section => {
    this.setState({ activeSection: section });
  };

  renderHeader = (section, _, isActive) => {
    return (
      <Animatable.View
        duration={400}
        style={[styles.header, isActive ? styles.active : styles.inactive]}
        transition="backgroundColor"
      >
        <Text style={styles.headerText}>{section.title}</Text>
      </Animatable.View>
    );
  };

  renderContent(section, _, isActive) {
    return (
      <Animatable.View
        duration={400}
        style={[styles.content, isActive ? styles.active : styles.inactive]}
        transition="backgroundColor"
      >
        <Animatable.Text animation={isActive ? 'bounceIn' : undefined}>
          {section.content}
        </Animatable.Text>
      </Animatable.View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <Accordion
          activeSection={this.state.activeSection}
          sections={CONTENT}
          touchableComponent={TouchableOpacity}
          renderHeader={this.renderHeader}
          renderContent={this.renderContent}
          duration={400}
          onChange={this.setSection}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  title: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: '300',
    marginBottom: 50,
  },
  header: {
    backgroundColor: 'silver'
  },
  headerText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
    minWidth: '100%',
    minHeight: 60,
    justifyContent: 'center',
    padding: 25,
    textAlign: 'center',
    backgroundColor: '#F5FCFF',
    borderColor: 'black',
    borderWidth: 1
  },
  content: {
    padding: 20,
    backgroundColor: '#fff',
  },
  active: {
    backgroundColor: 'rgba(255,255,255,1)',
  },
  inactive: {
    backgroundColor: 'rgba(245,252,255,1)',
  },
  selectors: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  selector: {
    backgroundColor: '#F5FCFF',
    padding: 10,
  },
  activeSelector: {
    fontWeight: 'bold',
  },
  selectTitle: {
    fontSize: 14,
    fontWeight: '500',
    padding: 10,
  },
});

export default MedicineHome