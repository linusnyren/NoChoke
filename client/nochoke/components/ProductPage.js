import React, { useState, useEffect } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { Button, ListItem } from 'react-native-elements'
import axios from 'react-native-axios'

export default function ProductPage(props) {
    const [product, setProduct] = useState()
    const [unrecognized, setUnrecognized] = useState(false)
    
    useEffect(() => {
        let url = 'http://192.168.0.15:8080/okToEat/1/'+'07312200011155'
        axios.get(url)
            .then(res => {
                res.data.Marknadsbudskap ? setProduct(res.data) : setUnrecognized(true);
            }
            )
    }, [])
    if (product) {
        return (
            <ScrollView style={{backgroundColor: 'black', color:'white'}}>
                <Button title="Scan again" onPress={() => props.setEan({ scanning: true })} />
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
            </ScrollView>

        )
    }
    if (!product && !unrecognized) {
        return (
            <View style={{backgroundColor: 'black', color:'white', height:'100%'}}>
                <Text style={{ fontSize: 25, textAlign: 'center', color:'white' }}>
                    Fetching
                </Text>
            </View>
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

}