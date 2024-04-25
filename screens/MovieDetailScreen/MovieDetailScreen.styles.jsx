import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  movieImageDetail: {
    width: 300,
    height: 200,
    alignSelf: "center",
  },
  
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#ffffff",
    padding: 20,
  },
  h1: {
    fontFamily: "Avenir",
    fontSize: 30,
    fontWeight: "700",
    textAlign: "center",
    marginTop: 20,
  },
  h2: {
    fontFamily: "Avenir",
    fontSize: 18,
    fontWeight: "300",
    color: "gray",
    marginTop: 5,
    textAlign: "center",
  },
  h3: {
    fontFamily: "Avenir",
    fontSize: 18,
    fontWeight: "300",
    color: "gray",
    marginTop: 10,
    textAlign: "center",
  },
  h4: {
    fontFamily: "Avenir",
    fontSize: 18,
    fontWeight: "300",
    marginTop: 20,
    textAlign: "center",
  },
  h5: {
    fontFamily: "Avenir",
    fontSize: 18,
    fontWeight: "300",
    color: "gray",
    marginTop: 30,
    textAlign: "center",
  },
  h6: {
    fontFamily: "Avenir",
    fontSize: 20,
    fontWeight: "700",
    textAlign: "left",
    marginTop: 20,
  },
  ratingContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 1,
  },
  segment: {
    width: 20,
    height: 20,
    alignSelf: 'center',
    margin: 1,
    backgroundColor: '#CCCCCC',
  },
  innerSegment: {
    width: '100%',
    height: '100%',
    borderRadius: 20,
    backgroundColor: '#CCCCCC',
  },
  filledSegment: {
    backgroundColor: 'pink', // Yellow color for filled segment
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginTop: 0, // Adjust this value to control the space between ratingContainer and input
    minHeight: 100, // Set minimum height to make it more visible
    fontSize: 16,
    textAlignVertical: 'top', // Align text to the top
  },
  commentContainer: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    marginTop: 10,
    borderRadius: 5,
  },
  singleCommentContainer: {
    backgroundColor: '#ffffff',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  commentText: {
    fontFamily: "Avenir",
    fontSize: 16,
  },
  emptyCommentContainer: {
    backgroundColor: 'dark grey',
    padding: 10,
    marginTop: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  emptyCommentText: {
    fontFamily: "Avenir",
    fontSize: 16,
    color: 'gray',
  },
});
