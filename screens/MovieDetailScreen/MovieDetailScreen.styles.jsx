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
  ratingContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 1,

  },
  h5: {
    fontFamily: "Avenir",
    fontSize: 18,
    fontWeight: "300",
    color: "gray",
    marginTop: 30,
    textAlign: "center",
  },
  segment: {
    width: 20,
    height: 20,
    alignSelf: 'center',
    margin: 1,
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
    marginTop: 1, // Adjust this value to control the space between ratingContainer and input
    minHeight: 100, // Set minimum height to make it more visible
  },
});
