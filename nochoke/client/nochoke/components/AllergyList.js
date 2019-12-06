import React,{useState, useEffect} from "react"
import axios from 'react-native-axios'
import { View, Text, StyleSheet } from 'react-native'
import { Card, SimpleCard } from "@paraboly/react-native-card"

export default function AllergyList(props) {
    const [allergies, setAllergies] = useState([])
    useEffect(() => {
        axios.get("http://192.168.0.15:8080/user/get/1")
            .then(res => setAllergies(res.data.allergies))
    })
    const removeAllergy = (a) => {
        axios.post("http://192.168.0.15:8080/user/removeAllergy/1", a)
            .then(res => {
                console.log(res.data)
                setAllergies(res.data.allergies)
            }
            )
    }
    const styles = StyleSheet.create({
        container: {
            flex: 1,
    
                }
    })

    if (allergies.length >= 0) {
        return (
            <View style={styles.container}>
                <Text style={{ color: 'orange', textAlign: 'center', padding: 10 }}>
                    Your Allergies
                </Text>
                <Text style={{ color: 'orange', textAlign: 'center', padding: 10 }}>
                    Click on one to delete it
                </Text>
                {allergies.map(a =>
                    <SimpleCard key={a.id} 
                                title={a.allergyName}
                                onPress={() => removeAllergy(a)} />
                )}
            </View>
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