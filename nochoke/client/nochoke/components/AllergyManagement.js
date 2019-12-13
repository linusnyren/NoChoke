import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView } from 'react-native';
import axios from 'react-native-axios';
import { Input, Button } from 'react-native-elements';
import isEmpty from "react-native-web/dist/vendor/react-native/isEmpty";

export default function AllergyManagement(props) {
    const [allergy, setAllergy] = useState()
    const addAllergy = () => {
        if(!isEmpty(allergy) && allergy != null) {
            axios.post("http://100.74.227.155:8080/user/addAllergy/1", {"allergyName": allergy})
                .then(res => setAllergy(res.data.allergies))
        }
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
                    </View>
                    :
                    <Text style={{ color: 'white' }}>Wow such empty</Text>
                }
            </View>
        </ScrollView>
    )
}