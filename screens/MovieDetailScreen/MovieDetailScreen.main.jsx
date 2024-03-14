import React from "react";
import { SafeAreaView, Text, Image, ScrollView } from "react-native";
import { styles } from "./MovieDetailScreen.styles";

export default function MovieDetailScreen({ route }) {
  const { movie }= route.params.movie;
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.container}>
        <>
          <Image style={styles.movieImage} source={{ uri: movie.Image }} />
          <Text style={styles.h1}>{movie.title}</Text>
          <Text style={styles.h2}> Released {movie.releaseDate}</Text>
          <Text style={styles.h3}>  {movie.actors.join(", ")}</Text>
          <Text style={styles.h4}>{movie.storyline}</Text>
          </>
      </ScrollView>
    </SafeAreaView>
  );
}
