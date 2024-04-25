// App.js is the entry point of our application.
import React from "react";
import { Text, View, Image } from 'react-native';
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MovieListScreen from "./screens/MovieListScreen/MovieListScreen.main";
import MovieDetailScreen from "./screens/MovieDetailScreen/MovieDetailScreen.main";
import MovieFilterScreen from "./screens/MovieFilterScreen/MovieFilterScreen.main";
import HomePageScreen from "./screens/HomePageScreen/HomePageScreen.main";
import Map from "./screens/MainMapScreen/MainMapScreen.main";
import { headerStyles } from "./mainAppStyles.styles";
import HeaderRightIcon from "./components/headerIcon";

const BackButtonIcon = () => (
  <Image
    source={require('./assets/FLOMAPICON2.png')} // Make sure to replace with your actual path
    style={{width: 60, height: 60, marginLeft: 15, marginTop: 10 }}
  />
);
const RootStack = createStackNavigator();
const HeaderTitle = ({ title }) => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'right', marginHorizontal: 40 }}>
    <Text style={{
      fontSize: 20,
      fontWeight: 'bold',
      color: '#000',
      textAlign: 'left',
      flexShrink: 1,  // Important for enabling text wrapping

    }}>
      {title}
    </Text>
  </View>
);
/* TODO: 

  This app has three screens:
    (1) MovieListScreen
    (2) MovieDetailScreen
    (3) MovieFilterScreen

  Screens (1) and (2) are on the same navigation stack.
  Screen (3) is presented modally.

  This setup is identical to the setup in the React Navigation documentation.
  Read the example carefully to set up this app's screen heirarchy in a similar manner.

  https://reactnavigation.org/docs/modal */
export default function App() {
  return ( <NavigationContainer>
    <RootStack.Navigator
      screenOptions={{
        headerStyle: headerStyles.header,
        headerTitleStyle: headerStyles.headerTitleStyle,
        headerTintColor: headerStyles.headerTintColor,
        headerBackTitle: null,
        headerBackTitleVisible: false, 
        headerBackImage: () => <BackButtonIcon />
      }}
    >
    <RootStack.Group> 
        <RootStack.Screen name = "Home Page" component={HomePageScreen} options={{headerShown: false}} />
        <RootStack.Screen 
            name = "Map" 
            component={Map} 
            options={{
              headerTitle: () => <HeaderTitle title="Find Menstrual Products Near You" />,

            }}
        />
        <RootStack.Screen 
            name = "Locations" 
            component={MovieListScreen} 
            options={{
              headerTitle: () => <HeaderTitle title="Locations" />,

            }}
            />
        <RootStack.Screen name = "Details" component={MovieDetailScreen} />
    </RootStack.Group>
    {/* <RootStack.Group screenOptions = {{presentation: 'modal' }}>
        <RootStack.Screen name="Filter" component={MovieFilterScreen} />
    </RootStack.Group> */}
    </RootStack.Navigator> 
    </NavigationContainer> );
}