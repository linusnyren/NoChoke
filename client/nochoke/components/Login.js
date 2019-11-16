import React, {useState, AsyncStorage} from 'react'
import * as WebBrowser from 'expo-web-browser';
import { Input, Button } from 'react-native-elements';
import axios from 'react-native-axios'
import {ScrollView, View, Text} from 'react-native';
import Signup from './Signup';
import { whileStatement } from '@babel/types';
import AppNavigator from '../navigation/AppNavigator';
export default function Login(){
    const [show, setShow] = useState(false)
    const [user, setUser] = useState()
    const [email, setEmail] = useState()
    const [loggedin, setLoggedin] = useState(false)

    const login = () => {
        axios.get('http://192.168.0.15:8080/user/login/'+email)
        .then(res => setUser(res.data))
        .then(_saveToStorage(user))
    }
    _saveToStorage= async (save) => {
        
            await AsyncStorage.setItem('user', 'hej').then(setLoggedin(true));
            
    }
    if(!show){
    return(
        <ScrollView style={{backgroundColor: 'black'}}>
            <Text style={{marginTop: 150, textAlign:'center', color:'white', fontSize: 30}}>
                Welcome to NoChoke!
            </Text>
            <Text style={{padding: 10, textAlign:'center', color:'white'}}>
                Please sign in or register!
            </Text>
            <View >
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
               <ScrollView style={{backgroundColor: 'black'}}>
                <Button title='Hide' style={{marginTop: 50, padding:10, width: '50%', marginLeft:'auto', marginRight: 'auto'}}onPress={() => setShow(!show)}/>
                <View style={{margin: 40}}>
                    <Signup setUser={setUser.bind(this)}/>
                    {console.log(user)}
                </View> 
                </ScrollView>
            )
    }
    if(loggedin){
        return(
            <AppNavigator/>
        )
    }
                
}