import React, { useEffect, useState } from "react";
import { SafeAreaView, FlatList, Button, TouchableOpacity } from "react-native";
import { SearchBar } from "react-native-elements";
import { MovieCell } from "./components/MovieCell";
import { styles } from "./MovieListScreen.styles";

// We can use JSON files by simply requiring them.
const TABLE_DATA = require("../../assets/movies.json");

// Input: navigation & route params, which we recieve through React Navigation
// Output: a screen containing the list of movies
export default function MovieListScreen({ navigation, route }) {
  const [search, setSearch] = useState("");
  const [actors, setActors] = useState([]);

  // TODO: Fill out the methods below.
  const selectedMovie = (movieItem) => {
    navigation.navigate("Movie Details", {movie: movieItem})
  };

  const selectedFilterButton = () => {
    navigation.navigate("Filter", {Actors: actors})
  };

  useEffect(
    () => {
      navigation.setOptions({
        headerRight: () => (<Button 
          onPress = {() => selectedFilterButton()} 
          title="Filter" />)
      })
    },
    []
  );

  useEffect(
    () => {
      if (route.params?.Actors != undefined) {
      setActors(route.params.Actors)}
      
    },
    [route.params]
  );

  // Renders a row of the FlatList.
  const renderItem = ({ item }) => {
    const overlapFound = (listA, listB) => {
      let foundActor = false;
      listA.forEach((x) => {
        if (listB.includes(x)) {
          foundActor = true;
        }
      });
      return foundActor;
    };

    // TODO: Set up search & filter criteria.
    let meetsSearchCriteria = true;
    let meetsActorsCriteria = true;

    if (search) {
      const title = item.title.toLowerCase();
      const searchLower = search.toLowerCase();
      if (!title.startsWith(searchLower)) {
        meetsSearchCriteria = false;
      }
    }

    if (actors.length > 0) {
      if (!overlapFound(item.actors, actors)) {
        meetsActorsCriteria = false;
      }
    }

    if (meetsSearchCriteria && meetsActorsCriteria) {
      const onPress = () => navigation.navigate("Movie Details", {movie: item});
      return ( 
      <TouchableOpacity onPress = {onPress}> 
        <MovieCell movieItem = {item}/>
      </TouchableOpacity> );
    } else {
      // If the item doesn't meet search/filter criteria, then we can
      // simply return null and it won't be rendered in the list!
      return null;
    }
  };

  // Our final view consists of a search bar and flat list, wrapped in
  // a SafeAreaView to support iOS.
  return (
    <SafeAreaView style={styles.container}>
      <SearchBar placeholder="Type Here..." onChangeText={setSearch} value={search}/>
      <FlatList data = {TABLE_DATA} renderItem= {renderItem} keyExtractor={(item) => item.id}/>
    </SafeAreaView>
  );
}
