import React, {useState} from 'react'
import * as WebBrowser from 'expo-web-browser';
import { Input, Button } from 'react-native-elements';
import axios from 'react-native-axios'
import {View, Text} from 'react-native';
export default function Signup(){
    const [details, setDetails] = useState({surname: null, lastname: null, email: null})
    const [show, setShow] = useState(false)
    const [loggedinuser, setLoggedinuser] = useState();
    const signup = () => {
        console.log(details)
        axios.post('http://192.168.0.15:8080/user/add', details)
        .then(res => setLoggedinuser(res.data))
        .then(setShow(false))
    }
    if(!show){
        return(

            <View style={{margin: 40}}>
                <Button title='Registerform' onPress={() => setShow(!show)}/>
                <Text style={{color:'white', fontSize:20}}>
                {loggedinuser ? 'Thanks for registering ' +loggedinuser.surname +' ' +loggedinuser.id : null}
                </Text>
            </View>
        )
    }
    if(show){
    return(
            <View >
                <Input inputStyle={{color:'white'}}label='Surname' 
                    onChange={e => 
                    setDetails({...details, surname: e.nativeEvent.text})}/>
                <Input inputStyle={{color:'white'}}label='Lastname'
                                onChange={e => 
                                    setDetails({...details, lastname: e.nativeEvent.text})}/>
                <Input inputStyle={{color:'white'}}label='Email'
                                onChange={e => 
                                    setDetails({...details, email: e.nativeEvent.text})}/>
                <Button style={{margin:10}}title='Register' onPress={signup}/>
                <Button style={{margin:10}}title='Hide' onPress={() => setShow(!show)}/>
            </View>
    )
    }

}