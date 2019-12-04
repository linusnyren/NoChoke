import React, { useState, AsyncStorage } from 'react'
import * as WebBrowser from 'expo-web-browser';
import { Input, Button } from 'react-native-elements';
import { ScrollView, View, Text } from 'react-native';
import Signup from './Signup';
import { whileStatement } from '@babel/types';
import AppNavigator from '../navigation/AppNavigator';
import Greeting from './Greeting';

export default function Login(props){
    return(
        <ScrollView>
        <View style={{ width: '80%', marginLeft: 'auto', marginRight: 'auto' }}>
            <Input inputStyle={{ color: 'white' }} label='Email' defaultValue={props.user ? props.user.email : ''}
                onChange={e =>
                    props.setEmail(e.nativeEvent.text)} />
            <Button title='Login' onPress={() => login()}
                style={{ padding: 10, width: '50%', marginLeft: 'auto', marginRight: 'auto' }} />
        </View>
    </ScrollView>
    )
}