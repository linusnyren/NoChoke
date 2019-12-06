import React,{useEffect, useState} from 'react'
import {View, Text} from 'react-native'
import axios from 'react-native-axios'
export default function History(){
    const [history, setHistory] = useState()
/*
axios.get user history
*/
useEffect(() => {
    axios.get("http://192.168.0.15:8080/getHistory/1")
    .then(res => console.log(res.data))
})

return(
    <View>
        <Text>
            Sökhistorik
        </Text>
    </View>
)
}