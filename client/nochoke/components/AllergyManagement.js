import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import axios from 'react-native-axios';
import { Input, Button , ListItem } from 'react-native-elements';

export default function AllergyAdder(props) {
    const [allergy, setAllergy] = useState()
    const addAllergy = () => {
        axios.post("http://100.74.227.155:8080/user/addAllergy/1", { "allergyName": allergy })
            .then(res => props.setAllergies(res.data.allergies))
    }
    const removeAllergy= (a) => {
        axios.post("http://100.74.227.155:8080/user/removeAllergy/1", a)
            .then(res => {
                console.log(res.data)
                props.setAllergies(res.data.allergies)
            }
            )
    }
    const styles = StyleSheet.create({
        menuButton:{
            padding: 10, width: '50%', marginLeft: 'auto', marginRight: 'auto' 
        },
        input:{
            width:'60%',
            margin: 'auto'
        },
        listItem:{
            borderWidth: 10,
            borderRadius: 10,
            borderColor: 'white',
            borderBottomWidth: 0,
            shadowColor: 'black',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.8,
            shadowRadius: 4,
            elevation: 1,
            margin: 10,
            backgroundColor: ''
        },
        view:{
            margin: 10
        },
        text:{
            textAlign: 'center',
            fontSize: 20,
            color:'white'
        }
      });
        return (
            <ScrollView>
                <View>
                    <Input style={styles.input}
                            label='Allergy'
                            onChange={e =>
                                setAllergy(e.nativeEvent.text)} />
                    <Button title='Add Allergy' onPress={() => addAllergy()}
                        style={styles.menuButton} />
                </View> 
                <View>
                    {props.allergies ?
                        <View style={styles.view}>
                            <Text style={styles.text}>
                                Click on one to delete it
                            </Text>
                        {props.allergies.map(a =>
                               <ListItem
                               style={styles.listItem}
                               key={a.id}
                               title={a.allergyName}
                               onPress={() => removeAllergy(a)}
                             />
                        )}
                        </View>
                :
                <Text>Wow such empty</Text>
                        }
                </View>
            </ScrollView>
        )
}