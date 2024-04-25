import React from "react";
import { SafeAreaView, Text, Image, ScrollView, View, TouchableOpacity } from "react-native";
import { styles } from "./MovieDetailScreen.styles";

// Individual segment of the rating bar
const RatingBarSegment = ({ filled }) => {
  return (
    <View style={[styles.segment, filled && styles.filledSegment]} />
  );
};

// Rating bar component
const RatingBar = ({ totalSegments, value }) => {
  return (
    <View style={[styles.ratingContainer, {flexDirection: 'row'}]}>
      {[...Array(totalSegments).keys()].map((index) => (
        <RatingBarSegment key={index} filled={index < value} />
      ))}
    </View>
  );
};

export default function MovieDetailScreen({ route }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.container}>
          <Image style={styles.movieImageDetail} source={{ uri: route.params.movie.posterurl }}/>
          <Text style={styles.h1}>{route.params.movie.title}</Text>
          <RatingBar totalSegments={10} value={2.1} />
          <Text style={styles.h3}> Starring: {route.params.movie.actors.join(", ")}</Text>
          <Text style={styles.h4}>{route.params.movie.storyline}</Text>       
      </ScrollView>
    </SafeAreaView>
  );
}
