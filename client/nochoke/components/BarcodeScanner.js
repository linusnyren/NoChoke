import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import * as Permissions from 'expo-permissions';
import { BarCodeScanner } from 'expo-barcode-scanner';

export default function BarcodeScanner(props) {

  const [state, setState] = useState({
    hasCameraPermission: null,
    scanned: false,
  })

  useEffect(() => {
    this.getPermissionsAsync();
  }, []);

  getPermissionsAsync = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    setState({ state, hasCameraPermission: status === 'granted' });
  };

  handleBarCodeScanned = ({ type, data }) => {
    setState({ state, scanned: true });
    let ean = data.startsWith('0') ? data : '0' + data
    props.setEan({ barCode: ean, scanning: false })
  };


  if (state.hasCameraPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (state.hasCameraPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
      }}>
      <BarCodeScanner
        onBarCodeScanned={state.scanned ? undefined : this.handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />

      {state.scanned && (
        <Button title={'Tap to Scan Again'} onPress={() => setState({ state, scanned: false })} />
      )}
    </View>
  );
}
