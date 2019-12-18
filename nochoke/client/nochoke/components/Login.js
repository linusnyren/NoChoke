import React, { useState, AsyncStorage, Component } from 'react'
import { Button, Card, ListItem } from 'react-native-elements';
import { ScrollView, View, Text, StyleSheet, TextInput, ImageBackground, SafeAreaView, TouchableOpacity, TouchableHighlight, KeyboardAvoidingView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import Signup from './Signup';
import AppNavigator from '../navigation/AppNavigator';
import Greeting from './Greeting';



export default function Login() {
    const [show, setShow] = useState(false)
    const [user, setUser] = useState()
    const [email, setEmail] = useState()
    const [loggedin, setLoggedin] = useState(false)



    const login = () => {
        setLoggedin(true)
    }

    const styles = StyleSheet.create({
        wrapper: {
            display: "flex",
            flex: 1,
            backgroundColor: 'orange'
        },
        formWrapper: {
            display: 'flex'
        },
        scrollViewWrapper: {
            marginTop: 70,
            flex: 1
        },
        avoidView: {
            paddingLeft: 30,
            paddingRight: 30,
            paddingTop: 20,
            flex: 1
        },
        loginHeader: {
            fontWeight: "900",
            fontSize: 40,
            color: 'white',
            marginBottom: 40,
            marginLeft: 20
        },
        label: {
            fontSize: 25,
            marginBottom: 10,
            marginLeft: 20,
            fontWeight: "600"
        },
        inputField: {
            borderBottomWidth: 1,
            paddingTop: 5,
            paddingBottom: 5,
            paddingLeft: 20,
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20
        },
        buttonWrapper: {
            alignItems: "flex-end",
            right: 20,
            bottom: 20,
            paddingTop: 0
        },
        button: {
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 50,
            width: 60,
            height: 60,
            backgroundColor: 'white'
        },
        icon: {
            marginRight: -2,
            marginTop: -2
        },
        registerButton: {
            textAlign: 'center',
            marginTop: 50,
            fontWeight: "500",
            fontSize: 25
        }
    });



    if (loggedin) {
        return (
            <AppNavigator />
        )
    }



    if (!show) {
        return (

            <KeyboardAvoidingView style={styles.wrapper} behavior="padding">
                <View style={styles.scrollViewWrapper}>
                    <ScrollView style={styles.scrollView}>
                        <Text style={styles.loginHeader}>Login</Text>
                        <View style={styles.wrapper}>
                        </View>

                        <View style={[styles.wrapper]}>

                            <Text style={[{ color: 'white' }, styles.label]}>Email</Text>
                            <TextInput
                                selectionColor='white'
                                autoCorrect={false}
                                defaultValue={user ? user.email : ''}
                                onChange={e =>
                                    setEmail(e.nativeEvent.text)}
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
                                defaultValue={user ? user.email : ''}
                                onChange={e =>
                                    setEmail(e.nativeEvent.text)}
                                style={[
                                    { color: 'white', borderBottomColor: 'white' },
                                    styles.inputField
                                ]}
                            />
                        </View>
                        <Text style={[{ color: 'white' }, styles.registerButton]}
                            onPress={() => setShow(!show)}
                        >Registrering</Text>

                    </ScrollView>

                    <View style={styles.buttonWrapper}>
                        <TouchableHighlight style={[{ opacity: 0.6 }, styles.button]}>
                            <Icon
                                name="angle-right"
                                color='orange'
                                size={32}
                                style={styles.icon}
                                onPress={() => login()}
                            />
                        </TouchableHighlight>
                    </View>

                </View>
            </KeyboardAvoidingView>


            /*
                        <ScrollView style={{ backgroundColor: 'white' }}>
                            <Greeting />
                            <View style={{ width: '80%', marginLeft: 'auto', marginRight: 'auto' }}>
                                
                                <Input inputStyle={{ color: 'black' }} label='Email' defaultValue={user ? user.email : ''}
                                    onChange={e =>
                                    setEmail(e.nativeEvent.text)} /> 
            
                                <Input placeholder="Email"
                                    defaultValue={user ? user.email : ''}
                                    onChange={e =>
                                        setEmail(e.nativeEvent.text)}
                                    rounded
                                />
                                <Input placeholder="Password" password
                                    defaultValue={user ? user.email : ''}
                                    onChange={e =>
                                        setEmail(e.nativeEvent.text)}
                                    rounded
                                />
                                <Button title='Login' onPress={() => login()}
                                    buttonStyle={{ backgroundColor: 'orange', borderRadius: 10 }}
                                    style={{ padding: 10, width: '50%', marginLeft: 'auto', marginRight: 'auto' }} />
            
            
                            </View>
                            <Text style={{ color: 'white', fontSize: 20, textAlign: 'center' }}>
                                First time here?
                        </Text>
                            <Button titleStyle={{ color: 'orange' }} type='clear' title='Register'
                                style={{ padding: 10, width: '50%', marginLeft: 'auto', marginRight: 'auto' }} onPress={() => setShow(!show)} />
                        </ScrollView>
                                    */

        )
    }
    if (show) {
        return (
            <ScrollView style={{ backgroundColor: 'orange' }}>
                <Greeting />
                <Signup setUser={setUser.bind(this)} setShow={setShow.bind(this)} />
                <Button titleStyle={{ color: 'white' }} type="clear" title='Göm' style={{ marginTop: 50, padding: 10, width: '50%', marginLeft: 'auto', marginRight: 'auto' }} onPress={() => setShow(!show)} />
            </ScrollView>
        )
    }


}