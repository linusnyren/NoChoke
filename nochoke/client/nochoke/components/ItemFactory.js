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
          if(x.contain){
              return "Innehåller "+x.allergyName +"\n"
          }
          else{
              return "Innehåller inte "+x.allergyName +"\n"
          }
      }
      function allergiResult(x){
          if(x.allergyList.length > 0){
              return "Allergier \n" +x.allergyList.map(x => textFormat(x))
          }
          else{
              return "Du har inte lagt till några allergier ännu"
          }
      }
      function formatDate(x){
        let date = new Date(x)
        return date.toLocaleString("se-sv")
      }
      function formatContentText(x){
          let string = ""
          if(x.date){
            string += "Skannings Datum " +formatDate(x.date)+"\n"
          }
          if(x.Artikelbenamning){
              string += x.Artikelbenamning +"\n"
          }
          if(x.SenastAndradDatum){
              string += "Senast ändrad " +formatDate(x.SenastAndradDatum) +"\n"
          }
          return string;
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
          content= {formatContentText(props.product)}
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
        <SimpleCard
            title={props.product.InformationOvrig ? props.product.InformationOvrig : "Ingen artikelbeskrivning"}
            styles={{ fontStyle: "italic", width: "90%", marginBottom: 10, marginTop: 10, fontWeight:"700", color: "#505e80", fontSize:12}}
        />
        
        <Image style={{ width: '100%', height: 300 }}
                    source={{ uri: props.product.Bilder[0].Lank }}
                    resizeMode="contain"
                />
<SimpleCard
  title={allergiResult(props.product)}
  styles={{ width: "90%", marginBottom: 20, marginTop: 20, fontWeight:"700", color: "#505e80", fontSize:12}}
/>
      </View>
            </ScrollView>

    )
}