import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView } from 'react-native';
import axios from 'react-native-axios';
import { Input, Button } from 'react-native-elements';
import AllergyManagement from '../components/AllergyManagement';
import AllergyList from '../components/AllergyList'
import BackendServerIP from '../BackendServerIP'
import * as SecureStore from 'expo-secure-store';
import AnimatedLoader from "react-native-animated-loader";
export default function AllergyManagementScreen(){
    const [allergies, setAllergies] = useState([])

    useEffect(() => {
        axios.get(BackendServerIP+"/rest/getuser/")
        .then(res => {
                setAllergies(res.data.allergies)
                }
            )
    }, [])
    return(
        <ScrollView style={{backgroundColor:"orange", height:"100%"}}>
            <AllergyManagement allergies={allergies} setAllergies={setAllergies.bind(this)}/>
            <AllergyList allergies={allergies} setAllergies={setAllergies.bind(this)}/>
        </ScrollView>
    )
    
}