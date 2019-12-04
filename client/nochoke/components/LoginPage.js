import React, { useState, AsyncStorage } from 'react'
import * as WebBrowser from 'expo-web-browser';
import {Button } from 'react-native-elements';
import {View, StyleSheet } from 'react-native';
import Signup from './Signup';
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
    const styles = StyleSheet.create({
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
        }
    });
    return(
        <View>
            <Greeting/>
            <Button title={show ? 'Login':'Register'} 
            onPress={() => setShow(!show)}
            style={styles.menuButton}/>
            {show ? 
            <Signup setUser={setUser.bind(this)} setShow={setShow.bind(this)} /> 
                : 
            <Login login={login.bind(this)} setLoggedin={setLoggedin.bind(this)} user={user} setUser={setUser.bind(this)}/>}
        </View>
    )
}