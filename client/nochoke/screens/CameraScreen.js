import React, {useState} from 'react';
import BarCodeScanner from '../components/BarcodeScanner'
import {View, Text, Button} from 'react-native';
import axios from 'react-native-axios'

export default function CameraScreen() {
  const [ean, setEan] = useState({barCode: null})
  const [product, setProduct] = useState()
 
  async function getItemInfo(ean){
    let url = 'http://192.168.0.15:8080/getEan/'+'04018077775703'
    axios.get(url)
    .then(res => setProduct(res.data))
    
    console.log('hej')
    

  }
  if(ean.barCode === null){
  return (
      <BarCodeScanner setEan={setEan.bind(this)} ean={ean}/>
  );
  }
  else{
    {if(product == null){
      getItemInfo(ean.barCode)
    }}
    
    let counter = 0;
    return(
    <View style={{marginTop: 200, marginLeft: 'auto', marginRight: 'auto'}}>
      <Text>
        {console.log(product)}
        

        
      </Text>
      <Button title='Scan again' onPress={() => setEan({ean, barCode: null})}/>
    </View>
    )
  }
}




