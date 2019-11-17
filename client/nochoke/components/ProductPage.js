import React, {useState, useEffect} from 'react';
import {View, Text, List, ListView} from 'react-native';
import { Input, Button } from 'react-native-elements';
import axios from 'react-native-axios'
import { ScrollView } from 'react-native-gesture-handler';

export default function ProductPage(props) {
    const[product, setProduct] = useState()

    useEffect(() => {
        let url = 'http://192.168.0.15:8080/getEan/'+props.barCode
        axios.get('http://192.168.0.15:8080/okToEat/1/04018077775703')
        .then(res => setProduct(res.data))
        
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
    else{
        return(
            <View>
                <Text>
                    Fetching
                </Text>
            </View>
        )
    }
        
}