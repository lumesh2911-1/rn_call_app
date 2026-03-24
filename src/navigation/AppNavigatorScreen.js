import { StatusBar, StyleSheet, Text, View } from 'react-native';
import React, { use, useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import CallScreen from '../screens/CallScreen';
import SplashScreen from '../screens/SplashScreen';
const Stack = createNativeStackNavigator();

export default function AppNavigatorScreen() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowSplash(false);
    }, 1000);
  }, []);
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      <Stack.Navigator>
        {showSplash && (
          <Stack.Screen
            name="splash-screen"
            component={SplashScreen}
            options={{ headerShown: false }}
          />
        )}
        <Stack.Screen
          name="home-screen"
          component={HomeScreen}
          options={{ headerTitleAlign: 'center', title: 'Home Screen' }}
        />
        <Stack.Screen
          name="call-screen"
          component={CallScreen}
          options={{ headerTitleAlign: 'center', title: 'Call Screen' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
