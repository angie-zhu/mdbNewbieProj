import React from "react";
import { SafeAreaView, Text, Image, ScrollView} from "react-native";
import { View, Button, StyleSheet } from 'react-native';
import { styles } from "./MainMapScreen.styles";


export default function Map({navigation, route}) {
  return (
    <SafeAreaView style={styles.container}>
        <Button
            title="Locations"
            onPress={() => navigation.navigate('Locations')}
        />
        {/* <Button
            title="Go to Info"
            onPress={() => navigation.navigate('InfoScreen')}
        /> */}
    </SafeAreaView>
  );
}