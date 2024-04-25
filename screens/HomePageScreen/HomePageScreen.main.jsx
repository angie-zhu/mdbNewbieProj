import React from 'react';
import { SafeAreaView, View, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from './HomePageScreen.styles'; // Importing styles from the .styles.js file

export default function HomePageScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mapContainer}>
        <Image
          source={require('../../assets/FLOMAPICON2.png')}
          style={styles.mapImage}
        />
      </View>
      
      <Text style={styles.title}>FloMap</Text>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Map')}>
        <Text style={styles.buttonText}>Map</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ModalLocations')}>
        <Text style={styles.buttonText}>FAQs</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Resources')}>
        <Text style={styles.buttonText}>Resources</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
