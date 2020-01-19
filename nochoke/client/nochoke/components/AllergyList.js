import React,{useState, useEffect} from "react"
import axios from 'react-native-axios'
import {View, Text, StyleSheet, ScrollView} from 'react-native'
import { Card, SimpleCard } from "@paraboly/react-native-card"
import BackendServerIP from "../BackendServerIP"

export default function AllergyList(props) {
    const removeAllergy = (a) => {
        axios.post(BackendServerIP+"/rest/removeAllergy/", a)
            .then(res => {
                props.setAllergies(res.data.allergies)
            }
            )
    }
    const styles = StyleSheet.create({
        container: {
            backgroundColor: 'orange'
                },
        textOk:{ 
            color: 'white', 
            textAlign: 'center',
            fontSize: 22, 
            padding: 10 
        },
        textNotOk:{
            color: 'white', 
            textAlign: 'center', 
            padding: 10,
            fontSize: 17,
            fontStyle: "italic" 
        }
    })

        return (
            <ScrollView style={styles.container}>
            <View style={styles.container}>
                    {props.allergies.length > 0 
                    ?
                    <View>
                        <Text style={styles.textOk}>Dina allergier</Text>
                        <Text style={styles.textNotOk}>Tryck på en allergen för att ta bort den</Text>
                    </View> 
                    :
                    <View>
                        <Text style={styles.textNotOk}>Du har inte angett några allergier ännu</Text>
                        <Text style={styles.textNotOk}>När allergier läggs till dyker de upp här</Text>
                    </View>
                    }
                {props.allergies.map(a =>
                    <SimpleCard key={a.id} 
                                title={a.allergyName}
                                onPress={() => removeAllergy(a)} />
                )}
            </View>
            </ScrollView>
        )
}