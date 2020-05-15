import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ColorBox = ({ colorName, hexCode }) => {
    const boxColor = {
        backgroundColor: hexCode,
    }
    const fontColor = {
        color: parseInt(hexCode.replace('#', ''), 16) > 0xffffff / 1.1 ? 'black' : 'white'
    }

    return (
        <View style={[styles.buttonStyle, boxColor]}>
            <Text style={fontColor}>
                {colorName}: {hexCode}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonStyle: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.3,
        shadowRadius: 1,
        elevation: 2, marginVertical: 4,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
})

export default ColorBox;