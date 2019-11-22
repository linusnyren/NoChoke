import React, { useState, useEffect } from 'react'
import * as WebBrowser from 'expo-web-browser';
import { Input, Button } from 'react-native-elements';
import axios from 'react-native-axios'
import { View, Text } from 'react-native';
import AllergyList from './AllergyList';
import AllergyAdder from './AllergyAdder';
export default function Allergy(props) {
    const [allergies, setAllergies] = useState([])
    useEffect(() => {
        axios.get("http://100.74.227.155:8080/user/get/1")
            .then(res => setAllergies(res.data.allergies))
    })


    return (
        <View style={{ backgroundColor: 'black', color: 'white' }}>
            <AllergyAdder setAllergies={setAllergies.bind(this)} allergies={allergies} />
            <AllergyList allergies={allergies} />
        </View>
    )
}