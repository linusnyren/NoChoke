import React,{useEffect, useState} from 'react'
import {View, Text, StyleSheet, ScrollView, Image, Tooltip} from 'react-native'
import axios from 'react-native-axios'
import AnimatedLoader from "react-native-animated-loader";
import ItemFactory from './ItemFactory.js';
import BackendServerIP from "../BackendServerIP"
export default function History(){
    const [history, setHistory] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios.get(BackendServerIP+"/rest/getHistory/")
        .then(res => {
                setHistory(res.data.historyList)
                setLoading(false)
                }
            )
    },[])
  const styles = StyleSheet.create({
    text:{
        fontSize: 20,
        fontWeight: "700",
        textAlign: "center",
        marginTop: 30
    },
    container: {
      flex: 1,
      backgroundColor: "orange",
      paddingTop: 30
    },
    lottie: {
       width: 100,
       height: 100
      },
    noHistory:{
        margin: 30,
        textAlign: 'center',
        fontSize: 18,
        fontStyle: 'italic',
        fontWeight: "400"
    }
  });
if(loading){
    return(
        <View>
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
        <ScrollView style={styles.container}>
            <Text style={styles.text}>
                Här är alla dina tidigare sökningar
            </Text>
            <Text style={styles.text}>
                {history.length > 0 
                ? 
                "Du har sökt efter "+history.length +" produkter totalt"
                :
                "Du har ingen historik ännu."}
                
            </Text>
                   {history.length > 0 ? history.map(x => 
                    <View key={x.id} style={{backgroundColor: "orange"}}>
                            <ItemFactory product={x}/>
                    </View>
                   ) :
                    <View>
                        <Text style={styles.noHistory}>
                            När du skannar produkter så kommer din historik finnas här.
                        </Text>
                    </View>
                    }
        </ScrollView>
    )
}

}