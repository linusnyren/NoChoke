import React, { useState, useEffect } from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import { Button, ListItem, Icon } from 'react-native-elements'
import axios from 'react-native-axios'
import AnimatedLoader from "react-native-animated-loader";
import ItemFactory from './ItemFactory.js';
import BackendServerIP from "../BackendServerIP"
import { readAsStringAsync } from 'expo-file-system';



export default function ProductPage(props) {
    const [product, setProduct] = useState()
    const [unrecognized, setUnrecognized] = useState(false)

    const styles = StyleSheet.create({
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



    useEffect(() => {
        axios.get(BackendServerIP+"/okToEat/1/"+"08710532023874")
            .then(res => {
                if(res.status === 200){
                  setProduct(res.data)
                }
                else{
                  setUnrecognized(true)
                }
            }
            
            )
    }, [])
    if (!product && !unrecognized) {
        return (
                    <AnimatedLoader
                    visible={true}
                    overlayColor="rgba(255,255,255,0.75)"
                    source={require("./loader.json")}
                    animationStyle={styles.lottie}
                    speed={1}
                    />
        )
    }
    if (unrecognized) {
        return (
            <View style={{backgroundColor: 'black', color:'white', height:'100%'}}>
                <Button title="Scan again" onPress={() => props.setEan({ scanning: true })} />
                <Text style={{ fontSize: 25, textAlign: 'center', color:'white' }}>
                    Couldn´t find product :/
                </Text>
                
            </View>
        )
    }
    if (product) {
      return (
        <View style={{backgroundColor: "orange", height:"100%"}}>
            <ItemFactory product={product} />
        </View>
      )
  }

}

{/*
<Image style={{ width: '100%', height: 300 }}
                    source={{ uri: product.Bilder[0].Lank }}
                    resizeMode="contain"
                />

<View style={styles.container}>


        <Card
          iconDisable
          title={product.Varumarke.Varumarke}
          onPress={() => {}}
          borderRadius={20}
          iconBackgroundColor="#fcd"
          content=""
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
  iconDisable
  title="Allergier"
  content="Tryck för mer information"
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

{product.allergyList.map(z => (



                          <Card
                          iconDisable
                          key={z.id}
                          title={z.allergyName}
                          content={z.contain ? <Checkbox color="error" label="no" />
                          : <Checkbox color="success" label="Safe to eat" />}
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
                ))}
                        
    


<SimpleCard backgroundColor='orange' color='white' title="Scan again"  onPress={() => {props.setEan({ scanning: true })}}/>
      </View>


{/*
                <Text style={{ fontSize: 30, textAlign: 'center', color:'white' }}>
                    {product.Varumarke.Varumarke}
                </Text>
                <Image style={{ width: '100%', height: 300 }}
                    source={{ uri: product.Bilder[0].Lank }}
                    resizeMode="contain"
                />
                <Text style={{ fontSize: 25, textAlign: 'center', color:'white' }}>
                    Here is a list of your allergies and the results!
                </Text>
                {product.allergyList.map(z => (
                          <ListItem
                          key={z.id}
                          title={z.allergyName}
                          subtitle={z.contain ? "Contains" : "Doesn't contain "}
                          bottomDivider
                          style={{width:'80%', marginLeft: 'auto', marginRight: 'auto', backgroundColor: 'gray'}}
                        />
                ))}
                <Text style={{ fontSize: 25, textAlign: 'center', color:'white' }}>
                    ProduktInformation
                </Text>
                {product.Marknadsbudskap.map(x =>
                    <Text
                        key={x.MarknadsbudskapText}
                        style={{ fontSize: 15, textAlign: 'center', fontStyle: 'italic', color:'white' }}>
                        {x.MarknadsbudskapText}
                    </Text>
                )} 
                */}
