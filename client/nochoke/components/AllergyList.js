import React from 'react'
import { View, Text } from 'react-native'
export default function AllergyList(props) {

    if (props.allergies.length > 0) {
        return (
            <View>
                <Text style={{color: 'white', textAlign: 'center', padding: 10 }}>
                    Your Allergies
                </Text>
                {props.allergies.map(a =>
                    <Text key={a.id} style={{ backgroundColor: 'black', color: 'white', textAlign: 'center', padding: 10 }}>
                        {a.allergyName}
                    </Text>
                )}
            </View>
        )
    }
    else {
        return (
            <View>
                <Text style={{ backgroundColor: 'black', color: 'white' }}>
                    Empty
                </Text>
            </View>
        )
    }
}