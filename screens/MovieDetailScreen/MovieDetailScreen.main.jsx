import React, { useState, useEffect } from "react";
import { SafeAreaView, Text, Image, ScrollView, View, TextInput, KeyboardAvoidingView, Button, TouchableOpacity } from "react-native";
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

const CustomRatingBar = ({ totalSegments, value, onRatingChange }) => {
  const handleSegmentPress = (rating) => {
    onRatingChange(rating);
  };

  return (
    <View style={styles.ratingContainer}>
      {[...Array(totalSegments).keys()].map((index) => (
        <TouchableOpacity
          key={index}
          style={styles.segment}
          onPress={() => handleSegmentPress(index + 1)}
        >
          <View style={[styles.innerSegment, index < value && styles.filledSegment]} />
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default function MovieDetailScreen({ route }) {  
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [userRating, setUserRating] = useState(0);

  useEffect(() => {
    // Update container height when comments change
    const commentContainerHeight = comments.length * 50 + 50; // Adjust the height as needed
    setContainerHeight(commentContainerHeight);
  }, [comments]);

  const [containerHeight, setContainerHeight] = useState(0);

  const handleCommentChange = (text) => {
    setComment(text);
  };

  const handleRatingChange = (rating) => {
    setUserRating(rating);
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
        <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === "ios" ? "padding" : null} keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 0} >
          <Image style={styles.movieImageDetail} source={{ uri: route.params.movie.posterurl }}/>
          <Text style={styles.h1}>{route.params.movie.title}</Text>
          <Text style={styles.h3}> Current Stock: </Text>
          <RatingBar totalSegments={10} value={Math.round(route.params.movie.imdbRating)} />
          <Text style={styles.h3}> Rate the Current Stock: </Text>
          <CustomRatingBar totalSegments={10} value={userRating} onRatingChange={handleRatingChange} />
          <Text style={styles.h5}> Leave a Comment: </Text>
          <TextInput
            style={styles.input}
            placeholder="Type Here..."
            placeholderTextColor="gray"
            value={comment}
            onChangeText={handleCommentChange}
          />  
  
          <Button title="Submit Comment" onPress={handleSubmitComment} />
          {/* Render comments */}
          <Text style = {styles.h6}> Comments: </Text>
          <View style={[styles.commentContainer, { height: containerHeight }]}>
            {comments.length >=  0 ? (
              comments.map((c) => (
                <View key={c.id} style={styles.singleCommentContainer}>
                  <Text style={styles.commentText}>{c.text}</Text>
                </View>
              ))
            ) : (
              <View style={styles.emptyCommentContainer}>
                <Text style={styles.emptyCommentText}>No comments yet</Text>
              </View>
            )}
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  );
}