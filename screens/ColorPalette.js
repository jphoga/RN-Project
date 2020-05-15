import React from 'react';
import { Text, StyleSheet, FlatList } from 'react-native';
import ColorBox from '../components/ColorBox';

const ColorPalette = ({ route }) => {

    const { colors } = route.params;

    return (
        <FlatList
            style={styles.container}
            data={colors}
            keyExtractor={item => item.hexCode}
            renderItem={({ item }) => (
                <ColorBox colorName={item.colorName} hexCode={item.hexCode} />
            )}
        />
    )
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        paddingTop: 10,
        backgroundColor: 'white',
    },
});

export default ColorPalette;