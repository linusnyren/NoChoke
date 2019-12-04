import React, { useState, AsyncStorage } from 'react'
import * as WebBrowser from 'expo-web-browser';
import { Input, Button, Card, ListItem } from 'react-native-elements';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import Signup from './Signup';
import { whileStatement } from '@babel/types';
import AppNavigator from '../navigation/AppNavigator';
import Greeting from './Greeting';
import LinearGradient from 'react-native-linear-gradient';
export default function Login() {
    const [show, setShow] = useState(false)
    const [user, setUser] = useState()
    const [email, setEmail] = useState()
    const [loggedin, setLoggedin] = useState(false)

    const login = () => {
        setLoggedin(true)
    }
    if (loggedin) {
        return (
            <AppNavigator />
        )
    }
    if (!show) {
        return (
            <ScrollView style={{ backgroundColor: 'white' }}>
                <Greeting />
                <View style={{ width: '80%', marginLeft: 'auto', marginRight: 'auto' }}>
                    {/*
                    <Input inputStyle={{ color: 'black' }} label='Email' defaultValue={user ? user.email : ''}
                        onChange={e =>
                        setEmail(e.nativeEvent.text)} /> */}

                    <Card>
                        <Input
                            placeholder='Email'
                            defaultValue={user ? user.email : ''}
                            onChange={e =>
                                setEmail(e.nativeEvent.text)}
                        />
                        <Button title='Login' onPress={() => login()}
                            buttonStyle={{ backgroundColor: 'orange', borderRadius: 10 }}
                            style={{ padding: 10, width: '50%', marginLeft: 'auto', marginRight: 'auto' }} />

                    </Card>

                </View>
                <Text style={{ color: 'white', fontSize: 20, textAlign: 'center' }}>
                    First time here?
            </Text>
                <Button titleStyle={{ color: 'orange' }}type='clear' title='Register'
                    style={{ padding: 10, width: '50%', marginLeft: 'auto', marginRight: 'auto' }} onPress={() => setShow(!show)} />
            </ScrollView>
        )
    }
    if (show) {
        return (
            <ScrollView style={{ backgroundColor: 'white' }}>
                <Greeting />
                <Signup setUser={setUser.bind(this)} setShow={setShow.bind(this)} />
                <Button titleStyle={{ color: 'orange' }} type="clear" title='Hide' style={{ marginTop: 50, padding: 10, width: '50%', marginLeft: 'auto', marginRight: 'auto' }} onPress={() => setShow(!show)} />
            </ScrollView>
        )
    }


}