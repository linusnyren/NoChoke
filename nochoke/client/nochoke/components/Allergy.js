import React, { useState, useEffect } from 'react'
import * as WebBrowser from 'expo-web-browser';
import axios from 'react-native-axios'
import { ScrollView, View } from 'react-native';
import { Input, Button } from 'react-native-elements';
import AllergyManagement from './AllergyManagement';
import { Card, SimpleCard } from "@paraboly/react-native-card"
import * as Font from "expo-font";
import BackendServerIP from "../BackendServerIP"


export default function Allergy(props) {
    const [show, setShow] = useState(false)
    const [allergies, setAllergies] = useState([])
    useEffect(() => {
        axios.get(BackendServerIP+"/user/get/1")
            .then(res => setAllergies(res.data.allergies))
    })
    if (!show) {
        return (
            <View style={{ backgroundColor: 'orange', flex: 1 }}>
                <ScrollView style={{ backgroundColor: 'orange', flex: 1 }}>
                    {/*
                <Button title='Manage your allergies' onPress={() => login()}
                    buttonStyle={{ backgroundColor: 'orange', borderRadius: 10 }}
                    style={{ padding: 10, width: '50%', marginLeft: 'auto', marginRight: 'auto' }} onPress={() => setShow(true)} />
                */}

                    <Card
                        title="Allergier"
                        iconName="eye"
                        iconType="FontAwesome"
                        content="Tryck för att se dina allergier, lägga till eller ta bort en allergi"
                        onPress={() => props.navigate('AllergyManagement')}
                        iconBackgroundColor="#FFDAB9"
                        topRightStyle={{
                            fontSize: 12,
                            fontWeight: "700",
                            color: "#505e80"
                        }}
                        bottomRightStyle={{
                            fontSize: 16,
                            fontWeight: "bold",
                            color: 'orange'
                        }}
                    />
                        <Card
                        iconName="camera"
                        iconType="FontAwesome"
                        title="Scanna"
                        content="Tryck för att skanna en produkt"
                        onPress={() => props.navigate('Camera')}
                        iconBackgroundColor="#FFDAB9"
                        bottomRightText="..."
                        topRightStyle={{
                            fontSize: 12,
                            fontWeight: "700",
                            color: "#505e80"
                        }}
                        bottomRightStyle={{
                            fontSize: 16,
                            fontWeight: "bold",
                            color: "#505e80"
                        }}
                    />
                    <Card
                        iconName="user"
                        iconType="FontAwesome"
                        title="Profilinställningar"
                        content="Tryck för att komma till profilinställningar"
                        onPress={() => props.navigate('Profile')}
                        iconBackgroundColor="#FFDAB9"
                        bottomRightText="..."
                        topRightStyle={{
                            fontSize: 12,
                            fontWeight: "700",
                            color: "#505e80"
                        }}
                        bottomRightStyle={{
                            fontSize: 16,
                            fontWeight: "bold",
                            color: "#505e80"
                        }}
                    />
                        <Card
                        iconName="history"
                        iconType="FontAwesome"
                        title="Historik"
                        content="Tryck för att se dina tidigare sökningar"
                        onPress={() => props.navigate('History')}
                        iconBackgroundColor="#FFDAB9"
                        bottomRightText="..."
                        topRightStyle={{
                            fontSize: 12,
                            fontWeight: "700",
                            color: "#505e80"
                        }}
                        bottomRightStyle={{
                            fontSize: 16,
                            fontWeight: "bold",
                            color: "#505e80"
                        }}
                    />
{/*
<Card
                        iconName="camera"
                        iconType="FontAwesome"
                        title="Scanna"
                        content="Tryck för att skanna en produkt"
                        iconBackgroundColor="orange"
                        bottomRightText="..."
                        topRightStyle={{
                            fontSize: 12,
                            fontWeight: "700",
                            color: "#505e80"
                        }}
                        bottomRightStyle={{
                            fontSize: 16,
                            fontWeight: "bold",
                            color: "#505e80"
                        }}
                    />
                 

<Card
                        iconName="camera"
                        iconType="FontAwesome"
                        title="Scanna"
                        content="Tryck för att skanna en produkt"
                        iconBackgroundColor="orange"
                        bottomRightText="..."
                        topRightStyle={{
                            fontSize: 12,
                            fontWeight: "700",
                            color: "#505e80"
                        }}
                        bottomRightStyle={{
                            fontSize: 16,
                            fontWeight: "bold",
                            color: "#505e80"
                        }}
                    />

<Card
                        iconName="camera"
                        iconType="FontAwesome"
                        title="Scanna"
                        content="Tryck för att skanna en produkt"
                        iconBackgroundColor="orange"
                        bottomRightText="..."
                        topRightStyle={{
                            fontSize: 12,
                            fontWeight: "700",
                            color: "#505e80"
                        }}
                        bottomRightStyle={{
                            fontSize: 16,
                            fontWeight: "bold",
                            color: "#505e80"
                        }}
                    />/*




                    {/*<AllergyList allergies={allergies} /> */}
                </ScrollView>
            </View>
        )
    }
    else {
        return (
            <ScrollView>
                <Button title='Done' onPress={() => setShow(false)} />
                <AllergyManagement setAllergies={setAllergies.bind(this)} allergies={allergies} />
            </ScrollView>
        )
    }
}