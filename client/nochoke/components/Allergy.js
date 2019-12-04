import React, { useState, useEffect } from 'react'
import * as WebBrowser from 'expo-web-browser';
import axios from 'react-native-axios'
import { ScrollView, StyleSheet } from 'react-native';
import { Input, Button } from 'react-native-elements';
import AllergyList from './AllergyList';
import AllergyManagement from './AllergyManagement';
export default function Allergy(props) {
    const [show, setShow] = useState(false)
    const [allergies, setAllergies] = useState([])
    useEffect(() => {
        axios.get("http://192.168.0.15:8080/user/get/1")
            .then(res => setAllergies(res.data.allergies))
    })
    const styles = StyleSheet.create({
        menuButton:{
            marginLeft: 'auto',
            marginRight: 'auto',
            width:'60%',
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
    })

    return(
        <ScrollView>
            <Button title={show ?  'Done' :'AllergyManagement'} 
                    onPress={() => setShow(!show)}
                    style={styles.menuButton}/>
            {show ?
            <AllergyManagement setAllergies={setAllergies.bind(this)} allergies={allergies} />
            :
            null}
        </ScrollView>
    )
            }
    {/*
    if(!show){
    return (
            <ScrollView>
                <Button title='AllergyManagement' onPress={() => setShow(true)} style={styles.menuButton}/>
            </ScrollView>
    )
    }
    else{
        return(
            <ScrollView>
                <Button title='Done' onPress={() => setShow(false)} style={styles.button}/>
                <AllergyManagement setAllergies={setAllergies.bind(this)} allergies={allergies} />
            </ScrollView>
        )
    }
}*/}