import React, { useState, AsyncStorage } from 'react'
import * as WebBrowser from 'expo-web-browser';
import { ScrollView, Text, Button } from 'react-native';

export default function Greeting(props) {
    return (
        <ScrollView style={{ backgroundColor: 'orange' }}>
            <Text style={{ color: 'white', marginTop: 100, marginLeft: 30, fontSize: 40, fontWeight: "900" }}>
                Welcome to NoChoke
        </Text>
            <Text style={{ color: 'white', padding: 20, marginLeft: 10, fontSize: 20, fontWeight: "700" }}>
                This app will help you determine if a product contains allergenes
        </Text>
        </ScrollView>
    )
}