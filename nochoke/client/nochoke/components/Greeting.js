import React, { useState, AsyncStorage, useReducer, useEffect } from 'react'
import * as WebBrowser from 'expo-web-browser';
import * as SecureStore from 'expo-secure-store';
import axios from 'react-native-axios'
import BackendServerIP from '../BackendServerIP'
import { ScrollView, Text, Button } from 'react-native';

export default function Greeting(props) {
    const [user, setUser] = useState({})

    const getUser = async() =>{
        const token = await SecureStore.getItemAsync('token');
        const headers = {
            Authorisation: "Token " +token
        }
        await axios.get(BackendServerIP+"/rest/getuser/", {headers: headers})
        .then(res => {
                setUser(res.data)
                saveToStore(res.data)
                }
            )
    }
    const saveToStore = async(data) =>{
        await SecureStore.setItemAsync('user',JSON.stringify(data));
    }
    useEffect(() => {
        async function getToken(){
            await getUser()
        }
        getToken();
    })
    return (
        <ScrollView style={{ backgroundColor: 'orange' }}>
            <Text style={{ color: 'white', marginTop: 100, marginLeft: 30, fontSize: 40, fontWeight: "900" }}>
                Välkommen tillbaka {user.surname ? user.surname : "loading"}
        </Text>
            <Text style={{ color: 'white', padding: 20, marginLeft: 10, fontSize: 20, fontWeight: "700" }}>
                Denna app kommer hjälpa dig avgöra om en produkt innehåller allergener
        </Text>
        </ScrollView>
    )
}