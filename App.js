import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BottomTabNavigator from './BottomTabNavigator';

export default function App() {
  return (
    <BottomTabNavigator/>  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
