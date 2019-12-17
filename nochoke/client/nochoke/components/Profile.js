import React, {useEffect, useState} from 'react'
import axios from 'react-native-axios'
import { View, Text, StyleSheet, TextInput, KeyboardAvoidingView, ScrollView } from 'react-native';
import BackendServerIP from "../BackendServerIP"
import {stringifyValueWithProperty} from "react-native-web/dist/exports/StyleSheet/compile";
export default function Profile(props) {
    const [user, setUser] = useState({})
    const [password, setPassword] = useState()
    const [email, setEmail] = useState("")

    useEffect(() => {
        axios.get(BackendServerIP+"/user/get/1")
            .then(res =>
                setUser(res.data))
    })

    const changeAccountInformation = () => {
        axios.put(BackendServerIP + '/user/changeUserEmail/1', {email})
    }

    const styles = StyleSheet.create({
        submitButton: {
            textAlign: 'center',
            marginTop: 50,
            fontWeight: "500",
            fontSize: 25
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
        wrapper: {
            display: "flex",
            flex: 1,
            backgroundColor: 'orange'
        },
        loginHeader: {
            marginTop: 80,
            fontWeight: "900",
            fontSize: 40,
            color: 'white',
            marginBottom: 80,
            marginLeft: 20
        },
        label: {
            fontSize: 20,
            marginTop: 5,
            marginBottom: 8,
            marginLeft: 20,
            fontWeight: "600"
        },
    })


    return (


        <KeyboardAvoidingView style={styles.wrapper} behavior="padding">
            <ScrollView style={styles.scrollView}>
                <Text style={styles.loginHeader}>Inställningar</Text>
                <View style={{ width: '80%', marginLeft: 'auto', marginRight: 'auto' }}>
                    <View style={[styles.wrapper]}>

                        <Text style={[{ color: 'grey' }, styles.label]}>Förnamn</Text>
                        <TextInput
                            editable={false}
                            selectionColor='white'
                            autoCorrect={false}
                            value={user.surname}
                            style={[
                                { color: 'grey', borderBottomColor: 'grey' },
                                styles.inputField
                            ]}
                        />
                    </View>
                    <View style={[styles.wrapper]}>
                        <Text style={[{ color: 'grey' }, styles.label]}>Efternamn</Text>
                        <TextInput
                            editable={false}
                            selectionColor='white'
                            autoCorrect={false}
                            value={user.lastname}
                            style={[
                                { color: 'grey', borderBottomColor: 'grey' },
                                styles.inputField
                            ]}
                        />
                    </View>
                    <View style={[styles.wrapper]}>
                        <Text style={[{ color: 'white' }, styles.label]}>Email</Text>
                        <TextInput
                            selectionColor='white'
                            autoCorrect={false}
                            onChange={e =>
                                setEmail(e.nativeEvent.text )}
                            style={[
                                { color: 'white', borderBottomColor: 'white' },
                                styles.inputField
                            ]}
                        />
                    </View>
                    <View style={[styles.wrapper]}>
                        <Text style={[{ color: 'white' }, styles.label]}>Lösenord</Text>
                        <TextInput
                            selectionColor='white'
                            autoCorrect={false}
                            style={[
                                { color: 'white', borderBottomColor: 'white' },
                                styles.inputField
                            ]}
                        />
                    </View>

                    <Text style={[{ color: 'white' }, styles.submitButton]}
                          onPress={changeAccountInformation}
                    >Spara</Text>

                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

