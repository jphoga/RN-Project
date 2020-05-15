import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, Alert } from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={[styles.container]}>
        <Text style={styles.fat}>Here are some boxes of different colors</Text>
        <TouchableOpacity style={[styles.buttonStyle, styles.cyan]}>
          <Text style={styles.white}>Cyan: #2aa198</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.buttonStyle, styles.blue]}>
          <Text style={styles.white}>Blue: #268bd2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.buttonStyle, styles.magenta]}>
          <Text style={styles.white}>Magenta: #d33682</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.buttonStyle, styles.orange]}>
          <Text style={styles.white}>Orange: #cb4b16</Text>
        </TouchableOpacity>
      </View >
    </SafeAreaView >
  )
};

const styles = StyleSheet.create({
  white: {
    color: 'white',
  },
  buttonStyle: {
    marginHorizontal: 10,
    marginVertical: 4,
    paddingHorizontal: 10,
    width: 300,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cyan: {
    backgroundColor: '#2aa198',
  },
  blue: {
    backgroundColor: '#268bd2',
  },
  magenta: {
    backgroundColor: '#d33682',
  },
  orange: {
    backgroundColor: '#cb4b16',
  },
  fat: {
    fontWeight: 'bold',
  },
  container: {
    marginTop: 10,
    alignItems: 'center',
    //justifyContent: 'center',
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
});

export default App;