import React, { useState } from 'react';
import { View, Text } from 'react-native';
import axios from 'react-native-axios';
import { Input, Button } from 'react-native-elements';

export default function AllergyAdder(props) {
    const [allergy, setAllergy] = useState()
    const [show, setShow] = useState(false)
    const addAllergy = () => {
        axios.post("http://100.74.227.155:8080/user/addAllergy/1", { "allergyName": allergy })
            .then(res => props.setAllergies(res.data))
        setShow(false);
    }
    if (show) {
        return (
            <View>
                <Input inputStyle={{ color: 'white' }} label='Allergy'
                    onChange={e =>
                        setAllergy(e.nativeEvent.text)} />
                <Button title='Add Allergy' onPress={() => addAllergy()}
                    style={{ padding: 10, width: '50%', marginLeft: 'auto', marginRight: 'auto' }} />
            </View>
        )
    }
    else {
        return (
            <Button title="Add Allergy" onPress={() => setShow(true)} />
        )
    }
}