import React, { useState, AsyncStorage } from 'react'
import * as WebBrowser from 'expo-web-browser';
import { ScrollView, Text } from 'react-native';

export default function Greeting() {

    return (
        <ScrollView style={{ backgroundColor: 'black' }}>
            <Text style={{ color: 'white', marginTop: 100, textAlign: 'center', fontSize: 25 }}>
                Welcome to NoChoke
        </Text>
            <Text style={{ color: 'white', padding: 20, textAlign: 'center', fontSize: 15 }}>
                This app will help you determine if a product contains allergenes
        </Text>
        </ScrollView>
    )
}