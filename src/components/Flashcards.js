import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';

import Logo from "./Header/Logo";
import DeckScreen from "./DeckScreen";
import NewCardScreen from "./NewCardScreen";
import ReviewScreen from "./ReviewScreen";

let headerOptions = {
  headerStyle: { backgroundColor: "#FFFFFF" },
  headerLeft: <Logo />
};

// let navigator = StackNavigator({
//   Home: { screen: DeckScreen, navigationOptions: headerOptions },
//   Review: { screen: ReviewScreen, navigationOptions: headerOptions },
//   CardCreation: { screen: NewCardScreen, navigationOptions: headerOptions }
// });

const Stack = createStackNavigator();
function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={DeckScreen} {...headerOptions}/>
      <Stack.Screen name="Review" component={ReviewScreen} {...headerOptions}/>
      <Stack.Screen name="CardCreation" component={NewCardScreen} {...headerOptions}/>
    </Stack.Navigator>
  );
}

export default MyStack;
