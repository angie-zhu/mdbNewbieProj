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
    marginTop: 20,
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
    marginTop: 20,

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
});
