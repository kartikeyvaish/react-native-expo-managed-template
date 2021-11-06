// Pakcages imported
import React from 'react';
import {View} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// Local imports basically all the screens when the user is logged in
import HomeScreen from './../screens/app/HomeScreen';

// List of screens with names that are used in the app
import ScreenNames from './ScreenNames';

// Create a stack navigator
const Stack = createStackNavigator();

// AppNavigator is the navigator that is used when the user is logged in
export default function AppNavigator() {
  // Get the theme from the Navigation Theme hook
  const {colors} = useTheme();

  return (
    <View style={{flex: 1, backgroundColor: colors.background}}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={ScreenNames.HomeScreen} component={HomeScreen} />
      </Stack.Navigator>
    </View>
  );
}
