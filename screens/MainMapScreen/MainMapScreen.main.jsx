import React, { useEffect, useState } from "react";
import { SafeAreaView, Text, Image, ScrollView} from "react-native";
import { View, Button, StyleSheet } from 'react-native';
import { styles } from "./MainMapScreen.styles";
import MapView from 'react-native-maps';
import { Marker } from "react-native-maps";


export default function Map({navigation, route}) {
    const TABLE_DATA = require("../../assets/movies.json");

    const berkCoordinates = [
        { latitude: 37.9005, longitude: -122.3096 }, // Northwest corner
        { latitude: 37.9005, longitude: -122.2364 }, // Northeast corner
        { latitude: 37.8425, longitude: -122.2364 }, // Southeast corner
        { latitude: 37.8425, longitude: -122.3096 }, // Southwest corner
      ];

    const testcoordinates = {
        longitude: -122.26040999999999,
        latitude: 37.870579999999997,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
    };

    const selectedLocationButton = () => {
        navigation.navigate("Locations")
      };
    useEffect(
       () => {
         navigation.setOptions({
           headerRight: () => (<Button 
             onPress = {() => selectedLocationButton()} 
             title="Locations" />)
         })
       },
       []
     );
    return (
        <SafeAreaView style={styles.container}>
            <MapView
                style={styles.map}
                initialRegion={{
                latitude: 37.8715,
                longitude: -122.2730,
                latitudeDelta: 0.1,
                longitudeDelta: 0.1,
                }}
                >
            <Marker coordinates={testcoordinates} />       
            </MapView>
        </SafeAreaView>
    );
}