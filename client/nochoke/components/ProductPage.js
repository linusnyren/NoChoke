import React, {useState, useEffect} from 'react';
import {View, Text, List, ListView} from 'react-native';
import axios from 'react-native-axios'

export default function ProductPage(props) {
    const[product, setProduct] = useState()
    const[unrecognized, setUnrecognized] = useState(false)
    useEffect(() => {
        let url = 'http://192.168.0.15:8080/okToEat/1/04018077775703'+props.barCode
        axios.get(url)
        .then(res => 
            res.data.Marknadsbudskap ? setProduct(res.data) : setUnrecognized(true))
        
    }, [])
    if(product){
    return(
            <View>
                {product.Marknadsbudskap.map(x => 
                    <Text 
                    key={x.MarknadsbudskapText}
                    style={{fontSize: 30, textAlign: 'center', fontStyle:'italic'}}
                    >
                        {x.MarknadsbudskapText}
                    </Text>
                    )}
                    <Text style={{fontSize: 25, textAlign: 'center'}}>
                        Here is a list of your allergies and the results!
                    </Text>
                {product.allergyList.map(z => (
                    <Text key={z.id} style={{fontSize: 20, textAlign: 'center'}}>{z.allergyName} = {z.contain ? 'Yes' : 'No'}</Text>
                ))}
            </View>

    )
    }
    if(!product && !unrecognized){
        return(
            <View>
                <Text style={{fontSize: 25, textAlign: 'center'}}> 
                    Fetching
                </Text>
            </View>
        )
    }
    if(unrecognized){
        return (
            <View>
            <Text style={{fontSize: 25, textAlign: 'center'}}>
                Couldn´t find product :/
            </Text>
        </View>
        )
    }
        
}