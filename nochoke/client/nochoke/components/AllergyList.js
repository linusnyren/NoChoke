import React,{useState, useEffect} from "react"
import axios from 'react-native-axios'
import {View, Text, StyleSheet, ScrollView} from 'react-native'
import { Card, SimpleCard } from "@paraboly/react-native-card"
import BackendServerIP from "../BackendServerIP"

export default function AllergyList(props) {
    const [allergies, setAllergies] = useState([])
    useEffect(() => {
        axios.get(BackendServerIP+"/user/get/1")
            .then(res => setAllergies(res.data.allergies))
    })
    const removeAllergy = (a) => {
        axios.post(BackendServerIP+"/user/removeAllergy/1", a)
            .then(res => {
                setAllergies(res.data.allergies)
            }
            )
    }
    const styles = StyleSheet.create({
        container: {
            backgroundColor: 'orange'
                }
    })

    if (allergies.length >= 0) {
        return (
            <ScrollView style={{backgroundColor: "orange"}}>
            <View style={styles.container}>
                <Text style={{ color: 'white', textAlign: 'center', padding: 10 }}>
                    Dina allergier
                </Text>
                {allergies.map(a =>
                    <SimpleCard key={a.id} 
                                title={a.allergyName}
                                onPress={() => removeAllergy(a)} />
                )}
            </View>
            </ScrollView>
        )
    }
    else {
        return (
            <View>
                <Text style={{ backgroundColor: 'white', color: 'gray' }}>
                    Empty
                </Text>
            </View>
        )
    }
}