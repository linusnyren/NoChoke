import React, { useState, AsyncStorage } from 'react'
import * as WebBrowser from 'expo-web-browser';
import { Input, Button } from 'react-native-elements';
import { ScrollView, View, Text } from 'react-native';
import Signup from './Signup';
import { whileStatement } from '@babel/types';
import AppNavigator from '../navigation/AppNavigator';
import Greeting from './Greeting';
import Login from './Login'
export default function LoginPage() {
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

    return(
        <View>
            <Greeting/>
            <Button title={show ? 'Register' : 'Login'} onPress={() => setShow(!show)}/>
            {show ? 
            <Signup setUser={setUser.bind(this)} setShow={setShow.bind(this)} /> 
                : 
            <Login setLoggedin={setLoggedin.bind(this)} user={user} setUser={setUser.bind(this)}/>}
        </View>
    )
}
   {/* if (!show) {
        return (
            <ScrollView>
                <Greeting />
                <View style={{ width: '80%', marginLeft: 'auto', marginRight: 'auto' }}>
                    <Input inputStyle={{ color: 'white' }} label='Email' defaultValue={user ? user.email : ''}
                        onChange={e =>
                            setEmail(e.nativeEvent.text)} />
                    <Button title='Login' onPress={() => login()}
                        style={{ padding: 10, width: '50%', marginLeft: 'auto', marginRight: 'auto' }} />
                </View>
                <Text style={{ color: 'white', fontSize: 20, textAlign: 'center' }}>
                    First time here?
            </Text>
                <Button title='Register' style={{ padding: 10, width: '50%', marginLeft: 'auto', marginRight: 'auto' }} onPress={() => setShow(!show)} />
            </ScrollView>
        )
    }
    if (show) {
        return (
            <ScrollView>
                <Greeting />
                <Signup setUser={setUser.bind(this)} setShow={setShow.bind(this)} />
                <Button title='Hide' style={{ marginTop: 50, padding: 10, width: '50%', marginLeft: 'auto', marginRight: 'auto' }} onPress={() => setShow(!show)} />
            </ScrollView>
        )
    }


}*/}