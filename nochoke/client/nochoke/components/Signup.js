import React, { useState } from 'react'
import * as WebBrowser from 'expo-web-browser';
import { Button } from 'react-native-elements';
import axios from 'react-native-axios'
import { Input, Block } from 'galio-framework';
import { View, Text, StyleSheet, TextInput, KeyboardAvoidingView, ScrollView } from 'react-native';
export default function Signup(props) {
    const [details, setDetails] = useState({ surname: null, lastname: null, email: null })

    const signup = () => {
        axios.post('http://192.168.0.15:8080/user/add', details)
            .then(res => {
                props.setUser(res.data)
                props.setShow(false)
            }
            )
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

            <View style={{ width: '80%', marginLeft: 'auto', marginRight: 'auto' }}>
                <View style={[styles.wrapper]}>

                    <Text style={[{ color: 'white' }, styles.label]}>Firstname</Text>
                    <TextInput
                        selectionColor='white'
                        autoCorrect={false}
                        onChange={e =>
                            setDetails({ ...details, surname: e.nativeEvent.text })}
                        style={[
                            { color: 'white', borderBottomColor: 'white' },
                            styles.inputField
                        ]}
                    />
                </View>
                <View style={[styles.wrapper]}>
                    <Text style={[{ color: 'white' }, styles.label]}>Lastname</Text>
                    <TextInput
                        selectionColor='white'
                        autoCorrect={false}
                        onChange={e =>
                            setDetails({ ...details, lastname: e.nativeEvent.text })}
                        style={[
                            { color: 'white', borderBottomColor: 'white' },
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
                            setDetails({ ...details, email: e.nativeEvent.text })}
                        style={[
                            { color: 'white', borderBottomColor: 'white' },
                            styles.inputField
                        ]}
                    />
                </View>
                <View style={[styles.wrapper]}>
                    <Text style={[{ color: 'white' }, styles.label]}>Password</Text>
                    <TextInput
                        selectionColor='white'
                        autoCorrect={false}
                        onChange={e =>
                            setEmail(e.nativeEvent.text)}
                        style={[
                            { color: 'white', borderBottomColor: 'white' },
                            styles.inputField
                        ]}
                    />
                </View>

                <Text style={[{ color: 'white' }, styles.submitButton]}
                    onPress={signup}
                >Submit</Text>

                {/*

            <Input rounded inputStyle={{ color: 'gray'}} placeholder='Surname'
                onChange={e =>
                    setDetails({ ...details, surname: e.nativeEvent.text })} />
            <Input rounded inputStyle={{ color: 'gray' }} placeholder='Lastname'
                onChange={e =>
                    setDetails({ ...details, lastname: e.nativeEvent.text })} />
            <Input rounded inputStyle={{ color: 'gray' }} placeholder='Email'
                onChange={e =>
                    setDetails({ ...details, email: e.nativeEvent.text })} />
            <Button buttonStyle={{borderRadius: 10,backgroundColor: 'orange'}} style={{ margin: 10 }} title='Submit' onPress={signup} />

            */}


            </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )


}