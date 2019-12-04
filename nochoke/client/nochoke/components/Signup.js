import React, { useState } from 'react'
import * as WebBrowser from 'expo-web-browser';
import { Input, Button } from 'react-native-elements';
import axios from 'react-native-axios'
import { View, Text } from 'react-native';
export default function Signup(props) {
    const [details, setDetails] = useState({ surname: null, lastname: null, email: null })
    const signup = () => {
        axios.post('http://192.168.86.112:8080/user/add', details)
            .then(res => {
                props.setUser(res.data)
                props.setShow(false)
            }
            )
    }
    return (
        <View style={{ width: '80%', marginLeft: 'auto', marginRight: 'auto' }}>
            <Input inputStyle={{ color: 'gray'}} placeholder='Surname'
                onChange={e =>
                    setDetails({ ...details, surname: e.nativeEvent.text })} />
            <Input inputStyle={{ color: 'gray' }} placeholder='Lastname'
                onChange={e =>
                    setDetails({ ...details, lastname: e.nativeEvent.text })} />
            <Input inputStyle={{ color: 'gray' }} placeholder='Email'
                onChange={e =>
                    setDetails({ ...details, email: e.nativeEvent.text })} />
            <Button buttonStyle={{borderRadius: 10,backgroundColor: 'orange'}} style={{ margin: 10 }} title='Submit' onPress={signup} />



        </View>
    )


}