import React, { useEffect, useState } from "react";
import { SafeAreaView, Text, Image, ScrollView, TouchableOpacity,} from "react-native";
import { View, Button, StyleSheet } from 'react-native';
import { styles } from "./MainMapScreen.styles";
import MapView from 'react-native-maps';
import { Marker } from "react-native-maps";
import { render } from "react-dom";
import MarkerIcon from "../../assets/DROPLET2.png";

const TABLE_DATA = require("../../assets/movies.json");

export default function Map({navigation, route}) {

  const LocationButton = ({ onPress }) => (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Image
        source={require('../../assets/PIN.png')}  // Replace with your actual image path
        style={styles.image}
      />
    </TouchableOpacity>
  );
  

    const berkCoordinates = [
        { latitude: 37.9005, longitude: -122.3096 }, // Northwest corner
        { latitude: 37.9005, longitude: -122.2364 }, // Northeast corner
        { latitude: 37.8425, longitude: -122.2364 }, // Southeast corner
        { latitude: 37.8425, longitude: -122.3096 }, // Southwest corner
      ];

    const selectedLocationButton = () => {
        navigation.navigate("Locations")
      };

    const handleMarkerPress = (movie) => {
        // Navigate to MovieDetailScreen with the movie item as a parameter
        navigation.navigate('Details', { movie: movie });
        };    
      
    const renderMarkers = () => {
          return TABLE_DATA.map((marker, index) => (
            <Marker
              key={index}
              coordinate={marker.coordinates}
              onPress={() => handleMarkerPress(marker)}
            >
            <Image source={MarkerIcon} style={styles.marker}></Image>
            </Marker>
          )
          );
        };

    useEffect(
       () => {
         navigation.setOptions({
          headerRight: () => <LocationButton onPress={selectedLocationButton} />
         })
       },
       []
     );
    return (
        <SafeAreaView style={styles.container}>
            <MapView
                style={styles.map}
                initialRegion={{
                latitude: 37.870934,
                longitude: -122.259392,
                latitudeDelta: 0.01,
                longitudeDelta: 0.001,
                }}
                >
            {renderMarkers()}   
            </MapView>
        </SafeAreaView>
    );
}