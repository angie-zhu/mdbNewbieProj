const { StatusBar, StyleSheet } = require("react-native");

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: "#ffffff",
  },
  movieCell: {
    backgroundColor: "#ecf0f1",
    padding: 20,
    flexDirection: "row",
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 3.84,
    elevation: 5,
  },
  movieCellTitle: { fontFamily: "Avenir", fontSize: 22 },
  movieCellSubtitle: { fontFamily: "Avenir", fontSize: 14 },
  movieCellLeft: { height: 80, width: 54 },
  movieCellImage: { height: 80, width: 54, resizeMode: "contain" },
  movieCellRight: {
    flex: 1,
    marginLeft: 20,
    justifyContent: "center",
    alignItems: "baseline",
  },
  searchContainer: {
    backgroundColor: 'lightgray',  // Set the background of the outer container
    borderBottomColor: 'transparent',  // Remove any bottom border if present
    borderTopColor: 'transparent',  // Remove any top border if present
  },
  inputContainer: {
    backgroundColor: 'lightgray',  // Set the background of the input field container
  },
  input: {
    backgroundColor: 'lightgray',  // Ensure the input field itself also has the light gray background
    color: 'black'  // Set text color
  }
});
