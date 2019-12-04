import React, { useState } from 'react'
import * as WebBrowser from 'expo-web-browser';
import { Input, Button } from 'react-native-elements';
import axios from 'react-native-axios'
import { View, StyleSheet } from 'react-native';
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
        view:{
            width: '80%',
            marginLeft: 'auto',
            marginRight: 'auto', 
        },
        menuButton:{
            marginLeft: 'auto',
            marginRight: 'auto',
            width:'40%',
            borderRadius: 10,
            borderColor: 'white',
            borderBottomWidth: 0,
            shadowColor: 'black',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.8,
            shadowRadius: 4,
            elevation: 1,
            margin: 10,
        },
    });
    return (
        <View style={styles.view}>
            <Input label='Surname'
                onChange={e =>
                    setDetails({ ...details, surname: e.nativeEvent.text })} />
            <Input label='Lastname'
                onChange={e =>
                    setDetails({ ...details, lastname: e.nativeEvent.text })} />
            <Input label='Email'
                onChange={e =>
                    setDetails({ ...details, email: e.nativeEvent.text })} />
            <Button title='Submit' onPress={signup} />

        </View>
    )


}