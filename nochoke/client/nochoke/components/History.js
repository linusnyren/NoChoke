import React,{useEffect, useState} from 'react'
import {View, Text, StyleSheet, ScrollView, Image, Tooltip} from 'react-native'
import axios from 'react-native-axios'
import { Card, SimpleCard } from "@paraboly/react-native-card"
import AnimatedLoader from "react-native-animated-loader";
import ItemFactory from './ItemFactory.js';

export default function History(){
    const [history, setHistory] = useState([])
    const [loading, setLoading] = useState(true)

useEffect(() => {
    axios.get("http://100.74.227.155:8080/getHistory/1")
    .then(res => {
        setHistory(res.data.historyList)
        setLoading(false)
        })
})
  const styles = StyleSheet.create({
    text:{
        fontSize: 16,
        fontWeight: "700",
        textAlign: "center",
        marginTop: 30
    },
    container: {
      flex: 1,
      alignItems: "center",
      backgroundColor: "#fff",
      justifyContent: "center",
      marginTop: 16
    },
    lottie: {
       width: 100,
       height: 100
      }
  });
if(loading){
    return(
        <View>
            <Text>Fetching your history, this could take a while</Text>
    <AnimatedLoader
    visible={true}
    overlayColor="rgba(255,255,255,0.75)"
    source={require("./loader.json")}
    animationStyle={styles.lottie}
    speed={1}
    />
    </View>
    )
}

else{
    return(
        <ScrollView style={{backgroundColor: "orange"}}>
            <Text style={styles.text}>
                Här är alla dina tidigare sökningar
            </Text>
            <Text style={styles.text}>
                Du har sökt efter {history.length} totalt
            </Text>
            {console.log(history[0].allergyList)}
                   {history.map(x =>
                    <View key={x.id} style={{backgroundColor: "orange"}}>
                            <ItemFactory product={x}/>
                    </View>)}
        </ScrollView>
    )
}

}