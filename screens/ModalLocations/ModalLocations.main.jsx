
import React, { useEffect, useState } from "react";
import { SafeAreaView, FlatList, Button, TouchableOpacity } from "react-native";
import {
  StyleSheet,
  Text,
  View,
  SectionList,
  StatusBar,
} from 'react-native';
import { SearchBar } from "react-native-elements";
import { styles } from "./ModalLocations.styles";
import BottomSheet, { BottomSheetFlatList } from "@gorhom/bottom-sheet";


const TABLE_DATA = require("../../assets/movies.json");


// Input: navigation & route params, which we recieve through React Navigation
// Output: a screen containing the list of movies
export default function ModalLocations({ navigation, route }) {
  const sheetRef = useRef<BottomSheet>(null);

  
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{item.title}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
        <FlatList
          data={TABLE_DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          // Optional: add separators, headers, footers, etc.
        />
    </SafeAreaView>
  );
}
