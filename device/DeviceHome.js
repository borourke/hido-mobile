import React, { Component } from 'react';
import { 
  Text, 
  View 
} from 'react-native';
import ConnectionDetails from './ConnectionDetails'
import TouchableButton from '../components/TouchableButton'
import TouchableGridButton from '../components/TouchableGridButton'
import { Col, Row, Grid } from "react-native-easy-grid";

class DeviceHome extends Component {

  static navigationOptions = {
    title: 'Device'
  }

  _onConnectPush = () => {
    this.props.navigation.navigate('ConnectionDetails');
  }

  _onEmptyPush = () => {
    this.props.navigation.navigate('AddMedicine')
  }

  _onMedicinePush = () => {
    this.props.navigation.navigate('ViewDeviceMedicine')
  }

  render() {
    const { navigation } = this.props;
    const deviceConnected = navigation.getParam('deviceConnected', false);

    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        {this._homeDisplay(deviceConnected)}
      </View>
    );
  }

  _homeDisplay(deviceConnected) {
    if(deviceConnected) {
      return(
        <Grid>
          <Col>
            <Row><Text><TouchableGridButton text='Dispenser 1 - Tap To Add Medication' onPress={this._onEmptyPush} /></Text></Row>
            <Row><Text><TouchableGridButton text='Medicine 1 - 10mg orally twice daily' onPress={this._onMedicinePush} /></Text></Row>
            <Row><Text><TouchableGridButton text='Medicine 2 - 20mg orally once daily' onPress={this._onMedicinePush} /></Text></Row>
          </Col>
          <Col>
            <Row><Text><TouchableGridButton text='Dispenser 2 - Tap To Add Medication' onPress={this._onEmptyPush} /></Text></Row>
            <Row><Text><TouchableGridButton text='Dispenser 5 - Tap To Add Medication' onPress={this._onEmptyPush} /></Text></Row>
            <Row><Text><TouchableGridButton text='Medicine 3 - 5mg orally three times a day' onPress={this._onMedicinePush} /></Text></Row>
          </Col>
          <Col>
            <Row><Text><TouchableGridButton text='Dispenser 3 - Tap To Add Medication' onPress={this._onEmptyPush} /></Text></Row>
            <Row><Text><TouchableGridButton text='Medicine 4 - 20mg as needed' onPress={this._onMedicinePush} /></Text></Row>
            <Row><Text><TouchableGridButton text='Dispenser 9 - Tap To Add Medication' onPress={this._onEmptyPush} /></Text></Row>
          </Col>
        </Grid>
      )
    } else {
      return(<TouchableButton text='Connect New Device' onPress={this._onConnectPush} />)
    }
  }
}

export default DeviceHome