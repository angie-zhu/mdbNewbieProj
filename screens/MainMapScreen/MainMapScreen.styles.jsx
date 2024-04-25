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
    }
});
