import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView } from 'react-native';
import axios from 'react-native-axios';
import { Input, Button } from 'react-native-elements';
import AllergyManagement from '../components/AllergyManagement';
import AllergyList from '../components/AllergyList'
import BackendServerIP from '../BackendServerIP'
import * as SecureStore from 'expo-secure-store';
export default function AllergyManagementScreen(){
    const [allergies, setAllergies] = useState()

    const getUser = async() =>{
        const token = await SecureStore.getItemAsync('token');
        const headers = {
            Authorisation: "Token " +token
        }
        await axios.get(BackendServerIP+"/rest/getuser/", {headers: headers})
        .then(res => {
                setAllergies(res.data.allergies)
                }
            )
    }
    
    useEffect(() => {
        async function getToken(){
            await getUser()
        }
        getToken();
    })

    return(
        <ScrollView style={{backgroundColor:"orange", height:"100%"}}>
            <AllergyManagement allergies={allergies} setAllergies={setAllergies.bind(this)}/>
            <AllergyList allergies={allergies} setAllergies={setAllergies.bind(this)}/>
        </ScrollView>
    )
}