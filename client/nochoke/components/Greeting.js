import React, {useState, AsyncStorage} from 'react'
import * as WebBrowser from 'expo-web-browser';
import { Input, Button } from 'react-native-elements';
import axios from 'react-native-axios'
import {ScrollView, View, Text} from 'react-native';
import Signup from './Signup';
import { whileStatement } from '@babel/types';
import AppNavigator from '../navigation/AppNavigator';

export default function Greeting(){

    return(
        <View>
            <Text style={{marginTop: 150, textAlign:'center', color:'white', fontSize: 30}}>
                Welcome to NoChoke!
            </Text>
            <Text style={{padding: 10, textAlign:'center', color:'white'}}>
                Please sign in or register!
            </Text>
        </View>
    )
}