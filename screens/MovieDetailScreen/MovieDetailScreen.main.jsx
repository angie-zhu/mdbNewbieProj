import React from "react";
import { SafeAreaView, Text, Image, ScrollView } from "react-native";
import { styles } from "./MovieDetailScreen.styles";

export default function MovieDetailScreen({ route }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.container}>
          <Image style={styles.movieImageDetail} source={{ uri: route.params.movie.posterurl }}/>
          <Text style={styles.h1}>{route.params.movie.title}</Text>
          <Text style={styles.h2}> Released {route.params.movie.releaseDate}</Text>
          <Text style={styles.h3}> Starring: {route.params.movie.actors.join(", ")}</Text>
          <Text style={styles.h4}>{route.params.movie.storyline}</Text>          
      </ScrollView>
    </SafeAreaView>
  );
}
