import React, {useState, AsyncStorage} from 'react'
import * as WebBrowser from 'expo-web-browser';
import { Input, Button } from 'react-native-elements';
import axios from 'react-native-axios'
import {ScrollView, View, Text} from 'react-native';
import Signup from './Signup';
import { whileStatement } from '@babel/types';
import AppNavigator from '../navigation/AppNavigator';
import Greeting from './Greeting';
export default function Login(){
    const [show, setShow] = useState(false)
    const [user, setUser] = useState()
    const [email, setEmail] = useState()
    const [loggedin, setLoggedin] = useState(false)

    const login = () => {
        axios.get('http://192.168.0.15:8080/user/login/'+email)
        .then(res => setUser(res.data))
        .then(AsyncStorage.setItem('user', 'hej').then(setLoggedin(true)))
    }
    _saveToStorage= async (save) => {

            await AsyncStorage.setItem('user', 'hej').then(setLoggedin(true));
            
    }
    if(!show){
    return(
        <ScrollView style={{backgroundColor: 'black'}}>
            <Greeting/>
            <View style={{width: '80%', marginLeft: 'auto', marginRight: 'auto'}}>
                <Input inputStyle={{color:'white'}}label='Email'
                                onChange={e => 
                                    setEmail(e.nativeEvent.text)}/>
                <Button title='Login' onPress={() => login()}
                                style={{padding:10, width: '50%', marginLeft:'auto', marginRight: 'auto'}}/>
            </View>
            <Text style={{color:'white', fontSize: 20, textAlign:'center'}}>
                First time here?
            </Text>
            <Button title='Register' style={{padding:10, width: '50%', marginLeft:'auto', marginRight: 'auto'}}onPress={() => setShow(!show)}/>
            </ScrollView>
            )
    }
    if(show){
            return(
               <ScrollView style={{ backgroundColor: 'black'}}>
                   <Greeting/>
                    <Signup setUser={setUser.bind(this)}/>
                <Button title='Hide' style={{marginTop: 50, padding:10, width: '50%', marginLeft:'auto', marginRight: 'auto'}}onPress={() => setShow(!show)}/>
                </ScrollView>
            )
    }
    if(loggedin){
        return(
            <AppNavigator/>
        )
    }
                
}