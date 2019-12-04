import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { StyleSheet, Text, ScrollView } from 'react-native';
import Greeting from '../components/Greeting';
import Allergy from '../components/Allergy'
export default function HomeScreen() {
  return (
    <ScrollView>
      <Greeting />
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
  Text: {
    flex: 1,
    textAlign: 'center',
    marginTop: 200,
    marginBottom: 'auto'
  }
});
