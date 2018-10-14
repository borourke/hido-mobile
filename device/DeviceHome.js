import React, { Component } from 'react';
import { 
  Text, 
  View,
  TouchableHighlight,
  FlatList
} from 'react-native';
import ConnectionDetails from './ConnectionDetails'
import TouchableButton from '../components/TouchableButton'
import TouchableGridButton from '../components/TouchableGridButton'
import Zeroconf from 'react-native-zeroconf'

class DeviceHome extends Component {
  constructor() {
    super();
    this.state = {
      dataSource: []
    };
  };

  static navigationOptions = {
    title: 'Device'
  }

  _onConnectPush = () => {
    this.props.navigation.navigate('ConnectionDetails');
  }

  _onEmptyPush = (slotId) => {
    const BARCODEURL='http://localhost:3000/device/' + slotId + '/medicine';
    fetch(BARCODEURL, { method: 'POST' })
      .then((response) => response.json())
      .catch((error) => {
        console.error(error);
      });
    this.props.navigation.navigate('AddMedicine', { 'slotId': slotId });
  }

  _onMedicinePush = (item) => {
    this.props.navigation.navigate('ViewDeviceMedicine', { 'item': item });
  }

  _keyExtractor = (item, index) => index.toString();

  _renderItem = ({item, index}) => {
    if(item.name) {
      text='Slot ' + (index+1) + ': ' + item.name + ' - ' + item.dosage
      onPress=() => this._onMedicinePush(item, index+1)
    }
    else {
      text='Slot ' + (index+1) + ': ' + 'Add Medication'
      onPress=() => this._onEmptyPush(index+1)
    }
    return (
      <TouchableButton text={text} onPress={onPress} />
    );
    
  };

  componentDidMount() {
    const zeroconf = new Zeroconf()

    zeroconf.on('start', () => console.log('The scan has started.'))

    zeroconf.scan(type = 'https', protocol = 'tcp', domain = 'local.')

    const INDEXURL='http://localhost:3000/medicine'
    fetch(INDEXURL)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({ dataSource: responseJson });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  render() {
    const { navigation } = this.props;
    const deviceConnected = navigation.getParam('deviceConnected', true);

    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        {this._homeDisplay(deviceConnected)}
      </View>
    );
  }

  _homeDisplay(deviceConnected) {
    if(deviceConnected) {
      return(
        <FlatList
          data={this.state.dataSource}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
        />
      )
    } else {
      return(<TouchableButton text='Connect New Device' onPress={this._onConnectPush} />)
    }
  }
}

export default DeviceHome