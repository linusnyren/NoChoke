import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Card, SimpleCard } from "@paraboly/react-native-card"

export default function AllergyList(props) {

    const styles = StyleSheet.create({
        container: {
          flex: 1,
          alignItems: "center",
          backgroundColor: "#fff",
          justifyContent: "center"
        }})
    
    if (props.allergies.length >= 0) {
        return (
            <View style={styles.container}>
            <Text style={{color: 'orange', textAlign: 'center', padding: 10 }}>
                    Your Allergies
                </Text>
                {props.allergies.map(a =>

<SimpleCard key={a.id} title={a.allergyName}/>

                /*
                
                    <Text key={a.id} style={{ backgroundColor: 'white', color: 'gray', textAlign: 'center', padding: 10 }}>
                        {a.allergyName}
                    </Text>
                */
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