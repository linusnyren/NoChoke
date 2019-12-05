import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import axios from 'react-native-axios';
import { Input, Button } from 'react-native-elements';

export default function AllergyAdder(props) {
    const [allergy, setAllergy] = useState()
    const addAllergy = () => {
        axios.post("http://192.168.86.112:8080/user/addAllergy/1", { "allergyName": allergy })
            .then(res => props.setAllergies(res.data.allergies))
    }
    const removeAllergy = (a) => {
        axios.post("http://192.168.86.112:8080/user/removeAllergy/1", a)
            .then(res => {
                console.log(res.data)
                props.setAllergies(res.data.allergies)
            }
            )
    }
    return (
        <ScrollView>
            <View>
                <Input inputStyle={{ color: 'white' }} label='Allergy'
                    onChange={e =>
                        setAllergy(e.nativeEvent.text)} />
                <Button title='Add Allergy' onPress={() => addAllergy()}
                    style={{ padding: 10, width: '50%', marginLeft: 'auto', marginRight: 'auto' }} />
            </View>
            <View>
                {props.allergies ?
                    <View>
                        <Text style={{ color: 'white', textAlign: 'center', fontSize: 20 }}>
                            Click on one to delete it
                            </Text>
                        {props.allergies.map(a =>
                            <Button key={a.id}
                                onPress={() => removeAllergy(a)}
                                title={a.allergyName}
                                style={{ padding: 10, width: '40%', marginLeft: 'auto', marginRight: 'auto' }}
                            />

                        )}
                    </View>
                    :
                    <Text style={{ color: 'white' }}>Wow such empty</Text>
                }
            </View>
        </ScrollView>
    )
}