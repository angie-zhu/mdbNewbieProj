import React, {useState} from "react";
import { SafeAreaView, Text, Image, ScrollView, View, TouchableOpacity, TextInput, KeyboardAvoidingView, Button } from "react-native";
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
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  const handleCommentChange = (text) => {
    setComment(text);
  };

  const handleSubmitComment = () => {
    if (comment.trim() !== "") {
      // Create a new comment object with current time as ID
      const newComment = { id: Date.now(), text: comment };
      // Add the new comment to the comments list
      setComments([newComment, ...comments]);
      // Clear the comment input
      setComment("");
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.container}>
      <KeyboardAvoidingView style={styles.container} behavior="padding" keyboardVerticalOffset={400}>
          <Image style={styles.movieImageDetail} source={{ uri: route.params.movie.posterurl }}/>
          <Text style={styles.h1}>{route.params.movie.title}</Text>
          <Text style={styles.h3}> Current Stock: </Text>
          <RatingBar totalSegments={10} value={Math.round(route.params.movie.imdbRating)} />
          <Text style={styles.h5}> Leave a Comment: </Text>
          <TextInput
          style={styles.input}
          placeholder="Type Here..."
          placeholderTextColor="gray"
          value={comment}
          onChangeText={handleCommentChange}
        />     
        <Button title="Submit Comment" onPress={handleSubmitComment} />
        {comments.map((c) => (
            <View key={c.id} style={styles.commentContainer}>
              <Text style={styles.commentText}>{c.text}</Text>
            </View>
          ))}
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  );
}
