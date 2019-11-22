import React, { useState, useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import { Button } from 'react-native-elements'
import axios from 'react-native-axios'

export default function ProductPage(props) {
    const [product, setProduct] = useState()
    const [unrecognized, setUnrecognized] = useState(false)
    useEffect(() => {
        let url = 'http://100.74.227.155:8080/okToEat/1/' + props.barCode
        axios.get(url)
            .then(res => {
                res.data.Marknadsbudskap ? setProduct(res.data) : setUnrecognized(true);
            }
            )
    }, [])
    if (product) {
        return (
            <View>
                <Button title="Scan again" onPress={() => props.setEan({ scanning: true })} />
                {product.Marknadsbudskap.map(x =>
                    <Text
                        key={x.MarknadsbudskapText}
                        style={{ fontSize: 30, textAlign: 'center', fontStyle: 'italic' }}>
                        {x.MarknadsbudskapText}
                    </Text>
                )}
                <Text style={{ fontSize: 30, textAlign: 'center', fontStyle: 'italic' }}>
                    {product.Varumarke.Varumarke}
                </Text>
                <Image style={{ width: '100%', height: 300 }}
                    source={{ uri: product.Bilder[0].Lank }}
                    resizeMode="contain"
                />
                <Text style={{ fontSize: 25, textAlign: 'center' }}>
                    Here is a list of your allergies and the results!
                    </Text>
                {product.allergyList.map(z => (
                    <Text key={z.id} style={{ fontSize: 20, textAlign: 'center' }}>{z.allergyName} = {z.contain ? 'Yes' : 'No'}</Text>
                ))}
            </View>

        )
    }
    if (!product && !unrecognized) {
        return (
            <View>
                <Text style={{ fontSize: 25, textAlign: 'center' }}>
                    Fetching
                </Text>
            </View>
        )
    }
    if (unrecognized) {
        return (
            <View>
                <Text style={{ fontSize: 25, textAlign: 'center' }}>
                    Couldn´t find product :/
            </Text>
                <Button title="Scan again" onPress={() => props.setEan({ scanning: true })} />
            </View>
        )
    }

}