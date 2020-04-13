import React from 'react';
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import HomeScreen from './components/HomeScreen';
import AboutScreen from './components/AboutScreen';
import WelcomeScreen from "./components/WelcomeScreen";
import MealsListScreen from './components/MealsListScreen';
import MealScreen from './components/MealScreen';

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  About: {
    screen: AboutScreen
  },
  Welcome: {
    screen: WelcomeScreen
  },
  Meals: {
    screen: MealsListScreen
  },
  SpecificMeal: {
    screen: MealScreen
  }
}, {
  initialRouteName: "Welcome"
});

const AppContainer = createAppContainer(AppNavigator);
const App = AppContainer;


export default App;


