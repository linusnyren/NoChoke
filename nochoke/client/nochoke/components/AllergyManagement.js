import React, { useState, useEffect } from 'react';
import {View, Text, ScrollView, StyleSheet, TextInput} from 'react-native';
import axios from 'react-native-axios';
import { Input, Button } from 'react-native-elements';
import isEmpty from "react-native-web/dist/vendor/react-native/isEmpty";
import BackendServerIP from "../BackendServerIP"

export default function AllergyManagement(props) {
    const [allergy, setAllergy] = useState()
    const addAllergy = () => {
        if(!isEmpty(allergy) && allergy != null) {
            axios.post(BackendServerIP+"/user/addAllergy/1", {"allergyName": allergy})
                .then(res => setAllergy(res.data.allergies))
        }
    }


    const styles = StyleSheet.create({
        loginHeader: {
            fontWeight: "900",
            fontSize: 40,
            color: 'white',
            marginBottom: 40,
            marginLeft: 20
        },
        label: {
            fontSize: 20,
            marginTop: 5,
            marginBottom: 8,
            marginLeft: 20,
            fontWeight: "600"
        },
        inputField: {
            borderBottomWidth: 1,
            paddingTop: 10,
            paddingBottom: 5,
            paddingLeft: 20,
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
            fontSize: 20
        },
    })


    return (
        <ScrollView style={{backgroundColor: "orange"}}>
            <View style={{marginTop: "20%", backgroundColor: "orange"}}>
                <Text style={styles.loginHeader}>Allergier</Text>

                <Text style={[{ color: 'white' }, styles.label]}>Allergi</Text>
                <TextInput
                    selectionColor='white'
                    autoCorrect={false}
                    onChange={e =>
                        setAllergy(e.nativeEvent.text)}
                    style={[
                        { color: 'white', borderBottomColor: 'white' },
                        styles.inputField
                    ]}
                />
                <Button title='Lägg till' onPress={() => addAllergy()}
                    style={{ padding: 10, width: '50%', marginLeft: 'auto', marginRight: 'auto' }} />
            </View>
            <View>
                {props.allergies > 0 ?
                    <View>
                        <Text style={{ color: 'white', textAlign: 'center', fontSize: 20 }}>
                            Klicka på en allergi för att ta bort den.
                            </Text>
                    </View>
                    :
                    <Text style={{ color: 'white' }}></Text>
                }
            </View>
        </ScrollView>
    )
}