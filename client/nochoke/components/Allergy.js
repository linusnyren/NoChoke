import React, {useState} from 'react'
import * as WebBrowser from 'expo-web-browser';
import { Input, Button } from 'react-native-elements';
import axios from 'react-native-axios'
import {View, Text} from 'react-native';

export default function Allergy(props){
    const [allergies, setAllergies] = useState(props.data.allergies)

    axios.get('http://192.168.0.15:8080/user/get/1')
    return(
        <View style={{color: 'white'}}>
            <Text style={{color: 'white'}}>
                Hej
            </Text>
        </View>
    )
}