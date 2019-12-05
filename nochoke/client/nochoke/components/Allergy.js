import React, { useState, useEffect } from 'react'
import * as WebBrowser from 'expo-web-browser';
import axios from 'react-native-axios'
import { ScrollView } from 'react-native';
import { Input, Button } from 'react-native-elements';
import AllergyList from './AllergyList';
import AllergyManagement from './AllergyManagement';
export default function Allergy(props) {
    const [show, setShow] = useState(false)
    const [allergies, setAllergies] = useState([])
    useEffect(() => {
        axios.get("http://192.168.86.112:8080/user/get/1")
            .then(res => setAllergies(res.data.allergies))
    })

    if (!show) {
        return (
            <ScrollView style={{ backgroundColor: 'white' }}>
                <Button title='Manage your allergies' onPress={() => login()}
                    buttonStyle={{ backgroundColor: 'orange', borderRadius: 10 }}
                    style={{ padding: 10, width: '50%', marginLeft: 'auto', marginRight: 'auto' }} onPress={() => setShow(true)} />
                <AllergyList allergies={allergies} />
            </ScrollView>
        )
    }
    else {
        return (
            <ScrollView>
                <Button title='Done' onPress={() => setShow(false)} />
                <AllergyManagement setAllergies={setAllergies.bind(this)} allergies={allergies} />
            </ScrollView>
        )
    }
}