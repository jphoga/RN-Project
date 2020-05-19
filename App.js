import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Home from './screens/Home';
import ColorPalette from './screens/ColorPalette';
import Counter from './screens/Counter';
import { createStackNavigator } from '@react-navigation/stack';
import ColorPaletteModal from './screens/ColorPaletteModal';

const RootStack = createStackNavigator();
const MainStack = createStackNavigator();

const MainStackScreen = () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen name="Home" component={Home} />
      <MainStack.Screen name="ColorPalette" component={ColorPalette}
        options={({ route }) => ({ title: route.params.paletteName })} />
      <MainStack.Screen name="Counter" component={Counter} />
    </MainStack.Navigator>
  )
}

const App = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator mode="modal">
        <RootStack.Screen
          name="Main"
          component={MainStackScreen}
          options={{ headerShown: false }} />
        <RootStack.Screen
          name="ColorPaletteModal"
          component={ColorPaletteModal}
          options={{ title: 'Add a New Palette' }} />
      </RootStack.Navigator>
    </NavigationContainer>
  )
};

const styles = StyleSheet.create({
});

export default App;