import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import Signup from '../components/Signup'

import { MonoText } from '../components/StyledText';
import Allergy from '../components/Allergy';
import { BarCodeScanner } from 'expo-barcode-scanner';

export default function HomeScreen() {
  return (
    <ScrollView style={{backgroundColor: 'black'}}>
      <Text style={{color: 'white',marginTop:100, textAlign: 'center', fontSize:25}}>
        Welcome to NoChoke
      </Text>
      <Text style={{color: 'white', padding: 20, textAlign: 'center', fontSize: 15}}>
        This app will help you determine if a product contains allergenes
      </Text>
      <Signup/>
      <Allergy />
    </ScrollView>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};

function DevelopmentModeNotice() {
  if (__DEV__) {
    const learnMoreButton = (
      <Text onPress={handleLearnMorePress} style={styles.helpLinkText}>
        Learn more
      </Text>
    );

    return (
      <Text style={styles.developmentModeText}>
        Development mode is enabled: your app will be slower but you can use
        useful development tools. {learnMoreButton}
      </Text>
    );
  } else {
    return (
      <Text style={styles.developmentModeText}>
        You are not in development mode: your app will run at full speed.
      </Text>
    );
  }
}

function handleLearnMorePress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/versions/latest/workflow/development-mode/'
  );
}

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/versions/latest/workflow/up-and-running/#cant-see-your-changes'
  );
}

const styles = StyleSheet.create({
  Text:{
    flex:1,
    textAlign: 'center',
    marginTop: 200,
    marginBottom: 'auto'
  }
});
