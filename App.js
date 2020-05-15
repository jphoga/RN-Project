import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, FlatList } from 'react-native';
import ColorBox from './components/ColorBox';

const COLORS = [
  { colorName: 'Base03', hexCode: '#002b36', textColor: 'white' },
  { colorName: 'Base02', hexCode: '#073642', textColor: 'white' },
  { colorName: 'Base01', hexCode: '#586e75', textColor: 'white' },
  { colorName: 'Base00', hexCode: '#657b83', textColor: 'white' },
  { colorName: 'Base0', hexCode: '#839496', textColor: 'white' },
  { colorName: 'Base1', hexCode: '#93a1a1', textColor: 'white' },
  { colorName: 'Base2', hexCode: '#eee8d5', textColor: 'black' },
  { colorName: 'Base3', hexCode: '#fdf6e3', textColor: 'black' },
  { colorName: 'Yellow', hexCode: '#b58900', textColor: 'white' },
  { colorName: 'Orange', hexCode: '#cb4b16', textColor: 'white' },
  { colorName: 'Red', hexCode: '#dc322f', textColor: 'white' },
  { colorName: 'Magenta', hexCode: '#d33682', textColor: 'white' },
  { colorName: 'Violet', hexCode: '#6c71c4', textColor: 'white' },
  { colorName: 'Blue', hexCode: '#268bd2', textColor: 'white' },
  { colorName: 'Cyan', hexCode: '#2aa198', textColor: 'white' },
  { colorName: 'Green', hexCode: '#859900', textColor: 'white' },
];

const App = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={[styles.container]}>
        <Text style={styles.fat}>Here are some boxes of different colors</Text>
        <FlatList
          data={COLORS}
          keyExtractor={item => item}
          renderItem={({ item }) => <ColorBox colorName={item.colorName} hexCode={item.hexCode} textColor={item.textColor} />}
        />
      </View >
    </SafeAreaView >
  )
};

const styles = StyleSheet.create({
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