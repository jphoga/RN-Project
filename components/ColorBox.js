import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const ColorBox = ({ colorName, hexCode }) => {
    const boxColor = {
        backgroundColor: hexCode,
    }
    const fontColor = {
        color: parseInt(hexCode.replace('#', ''), 16) > 0xffffff / 1.1 ? 'black' : 'white'
    }

    return (
        <TouchableOpacity style={[styles.buttonStyle, boxColor]}>
            <Text style={fontColor}>
                {colorName}: {hexCode}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonStyle: {
        marginHorizontal: 10,
        marginVertical: 4,
        paddingHorizontal: 10,
        width: 360,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
})

export default ColorBox;