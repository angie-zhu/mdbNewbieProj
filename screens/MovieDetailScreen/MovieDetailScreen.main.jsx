import React, {useState} from "react";
import { SafeAreaView, Text, Image, ScrollView, View, TouchableOpacity, TextInput, KeyboardAvoidingView } from "react-native";
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
  const [comment, setComment] = useState('');

  const handleCommentChange = (text) => {
    setComment(text);
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.container}>
      <KeyboardAvoidingView style={styles.container} behavior="padding" >
          <Image style={styles.movieImageDetail} source={{ uri: route.params.movie.posterurl }}/>
          <Text style={styles.h1}>{route.params.movie.title}</Text>
          <Text style={styles.h3}> Current Stock: </Text>
          <RatingBar totalSegments={10} value={Math.round(route.params.movie.imdbRating)} />
          <Text style={styles.h5}> Leave a Comment: </Text>
          <TextInput
          style={styles.input}
          placeholder="Type Here..."
          value={comment}
          onChangeText={handleCommentChange}
        />     
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  );
}
