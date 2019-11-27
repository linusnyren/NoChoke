import React, { useState, useEffect } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { Button } from 'react-native-elements'
import axios from 'react-native-axios'

export default function ProductPage(props) {
    const [product, setProduct] = useState()
    const [unrecognized, setUnrecognized] = useState(false)
    useEffect(() => {
        let url = 'http://100.74.227.155:8080/okToEat/1/'+props.barCode
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
                {product.Marknadsbudskap.map(x =>
                    <Text
                        key={x.MarknadsbudskapText}
                        style={{ fontSize: 15, textAlign: 'center', fontStyle: 'italic', color:'white' }}>
                        {x.MarknadsbudskapText}
                    </Text>
                )}
                <Image style={{ width: '100%', height: 300 }}
                    source={{ uri: product.Bilder[0].Lank }}
                    resizeMode="contain"
                />
                <Text style={{ fontSize: 25, textAlign: 'center', color:'white' }}>
                    Here is a list of your allergies and the results!
                </Text>
                {product.allergyList.map(z => (
                    <Text key={z.id} style={{ fontSize: 20, textAlign: 'center', color:'white' }}>
                        {z.allergyName} = {z.contain ? 'Yes' : 'No'}
                    </Text>
                ))}
            </ScrollView>

        )
    }
    if (!product && !unrecognized) {
        return (
            <View>
                <Text style={{ fontSize: 25, textAlign: 'center', color:'white' }}>
                    Fetching
                </Text>
            </View>
        )
    }
    if (unrecognized) {
        return (
            <View>
                <Text style={{ fontSize: 25, textAlign: 'center', color:'white' }}>
                    Couldn´t find product :/
            </Text>
                <Button title="Scan again" onPress={() => props.setEan({ scanning: true })} />
            </View>
        )
    }

}