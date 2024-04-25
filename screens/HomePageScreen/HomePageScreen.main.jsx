import React from "react";
import { SafeAreaView, Text, Image, ScrollView} from "react-native";
import { View, Button, StyleSheet } from 'react-native';
import { styles } from "./HomePageScreen.styles";


export default function HomePageScreen({navigation, route}) {
  return (
    <SafeAreaView style={styles.container}>
        <Button
            title="Go to Map"
            onPress={() => navigation.navigate('Map')}
        />
        {/* <Button
            title="Go to Info"
            onPress={() => navigation.navigate('InfoScreen')}
        /> */}
    </SafeAreaView>
  );
}
