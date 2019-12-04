import React from 'react'
import * as WebBrowser from 'expo-web-browser';
import { Input, Button } from 'react-native-elements';
import { ScrollView, View,StyleSheet } from 'react-native';

export default function Login(props){
    const styles = StyleSheet.create({
        view:{
            width: '80%',
            marginLeft: 'auto',
            marginRight: 'auto', 
        },
        menuButton:{
            marginLeft: 'auto',
            marginRight: 'auto',
            width:'40%',
            borderRadius: 10,
            borderColor: 'white',
            borderBottomWidth: 0,
            shadowColor: 'black',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.8,
            shadowRadius: 4,
            elevation: 1,
            margin: 10,
        },
    });
    return(
        <ScrollView>
        <View style={styles.view}>
            <Input label='Email' defaultValue={props.user ? props.user.email : ''}
                onChange={e =>
                    props.setEmail(e.nativeEvent.text)} />
            <Button title='Login' onPress={() => props.login()}
                style={styles.menuButton} />
        </View>
    </ScrollView>
    )
}