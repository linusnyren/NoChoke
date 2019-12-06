import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { StyleSheet, Text, ScrollView, Button } from 'react-native';
import Greeting from '../components/Greeting';
import Allergy from '../components/Allergy'
export default function HomeScreen(props) {
  return (
    <ScrollView style={{ backgroundColor: 'black', color: 'white' }}>
      <Greeting />
      <Allergy navigate={props.navigation.navigate.bind(this)}/>
    </ScrollView>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};
