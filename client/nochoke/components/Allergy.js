import React, { useState, useEffect } from 'react'
import * as WebBrowser from 'expo-web-browser';
import axios from 'react-native-axios'
import { ScrollView, StyleSheet } from 'react-native';
import { Input, Button } from 'react-native-elements';
import AllergyList from './AllergyList';
import AllergyManagement from './AllergyManagement';
export default function Allergy(props) {
    const [show, setShow] = useState(false)
    const [allergies, setAllergies] = useState([])
    useEffect(() => {
        axios.get("http://100.74.227.155:8080/user/get/1")
            .then(res => setAllergies(res.data.allergies))
    })
    const styles = StyleSheet.create({
        button:{
            width:'60%',
            marginLeft:'auto',
            marginRight: 'auto'
        }
    })
    if(!show){
    return (
            <ScrollView>
                <Button title='AllergyManagement' onPress={() => setShow(true)} style={styles.button}/>
            </ScrollView>
    )
    }
    else{
        return(
            <ScrollView>
                <Button title='Done' onPress={() => setShow(false)} style={styles.button}/>
                <AllergyManagement setAllergies={setAllergies.bind(this)} allergies={allergies} />
            </ScrollView>
        )
    }
}