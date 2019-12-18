import React from 'react'
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import { Button, ListItem, Icon } from 'react-native-elements'
import { Card, SimpleCard } from "@paraboly/react-native-card"

export default function ItemFactory(props){

    const styles = StyleSheet.create({
        container: {
          flex: 1,
          alignItems: "center",
          backgroundColor: "orange",
          justifyContent: "center",
          marginTop: 16
        },
        lottie: {
           width: 100,
           height: 100
          }
      });
      function textFormat(x){
          console.log(x.contain)
          if(x.contain){
              return "Innehåller "+x.allergyName +"\n"
          }
          else{
              return "Innehåller inte "+x.allergyName +"\n"
          }
      }
      function formatDate(x){
        let date = new Date(x)
        return date.toLocaleString("se-sv")
      }
    return(
            
            <ScrollView style={{backgroundColor: 'orange', color:'black', marginTop: 15}}>

<View style={styles.container}>


        <Card
          iconDisable
          title={props.product.Varumarke.Varumarke}
          onPress={() => {}}
          borderRadius={20}
          iconBackgroundColor="#fcd"
          content= { props.product.date ? "You scanned this at " +formatDate(props.product.date) : "Additional information"}
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
        <Image style={{ width: '100%', height: 300 }}
                    source={{ uri: props.product.Bilder[0].Lank }}
                    resizeMode="contain"
                />
              
<SimpleCard
  title={"Allergier \n" +props.product.allergyList ? props.product.allergyList.map(x => textFormat(x)) : "You have no allergies recorded"}
  styles={{ width: "90%", marginBottom: 20, marginTop: 20, fontWeight:"700", color: "#505e80", fontSize:12}}
/>
      </View>
            </ScrollView>

    )
}