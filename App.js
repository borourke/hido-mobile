import React, { Component } from 'react';
import { 
  Text, 
  View, 
  TouchableOpacity,
  StyleSheet 
} from 'react-native';
import { createBottomTabNavigator, createStackNavigator, createMaterialTopTabNavigator } from 'react-navigation';

/* Device Screens */
import DeviceHome from './device/DeviceHome';
import DeviceTab from './device/DeviceTab'
import ConnectionDetails from './device/ConnectionDetails'
import AttemptingConnect from './device/AttemptingConnect'
import AddMedicine from './device/AddMedicine'
import ViewDeviceMedicine from './device/ViewDeviceMedicine'

/* Medicine Screens */
import MedicineHome from './medicine/MedicineHome';
import MedicineTab from './medicine/MedicineTab';

/* Schedule Screens */
import ScheduleHome from './schedule/ScheduleHome';
import ScheduleTab from './schedule/ScheduleTab'

/* History Screens */
import HistoryDay from './history/HistoryDay';
import HistoryMonth from './history/HistoryMonth'

export const DeviceStack = createStackNavigator({
  DeviceHome: { screen: DeviceHome },
  ConnectionDetails: { screen: ConnectionDetails },
  AttemptingConnect: { screen: AttemptingConnect },
  AddMedicine: { screen: AddMedicine },
  ViewDeviceMedicine: { screen: ViewDeviceMedicine }
}, {
  initialRouteName: 'DeviceHome'
});

export const MedicineStack = createStackNavigator({
  MedicineHome: { screen: MedicineHome },
}, {
  initialRouteName: 'MedicineHome'
});

export const ScheduleStack = createStackNavigator({
  ScheduleHome: { screen: ScheduleHome },
}, {
  initialRouteName: 'ScheduleHome'
});

export const HistoryTab = createMaterialTopTabNavigator({
  HistoryDay: { screen: HistoryDay },
  HistoryMonth: { screen: HistoryMonth }
}, {
  initialRouteName: 'HistoryDay',
  tabBarPosition: 'bottom'
})

export default createBottomTabNavigator({
  Device: DeviceStack,
  Medicine: MedicineStack,
  Schedule: ScheduleStack,
  History: HistoryTab
});