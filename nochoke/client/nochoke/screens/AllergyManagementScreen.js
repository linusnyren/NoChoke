import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView } from 'react-native';
import axios from 'react-native-axios';
import { Input, Button } from 'react-native-elements';
import AllergyManagement from '../components/AllergyManagement';
import AllergyList from '../components/AllergyList'
export default function AllergyManagementScreen(){
    const [allergies, setAllergies] = useState()

    useEffect(() => {
        axios.get("http://192.168.0.15:8080/user/get/1")
            .then(res => setAllergies(res.data.allergies))
    })

    return(
        <ScrollView>
            <AllergyManagement allergies={allergies} setAllergies={setAllergies.bind(this)}/>
            <AllergyList allergies={allergies} setAllergies={setAllergies.bind(this)}/>
        </ScrollView>
    )
}