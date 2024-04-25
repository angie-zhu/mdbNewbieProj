const { StatusBar, StyleSheet } = require("react-native");

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    map: {
        width: '100%',
        height: '100%',
      },
    marker: {
        width: 30,
        height: 30,
        resizeMode: 'contain' // Ensures the entire image is scaled down proportionally
    },
    buttonContainer: {
        marginRight: 40,  // Adds right margin to the button for spacing from the screen edge
        backgroundColor: 'blue',  // Example background color, if applicable
        borderRadius: 5,  // Rounded corners for the background
        overflow: 'hidden'  // Ensures background does not exceed border radius limits
      },
      image: {
        width: 50,       // Set the width of your image
        height: 50
              // Set the height of your image
      }
});
