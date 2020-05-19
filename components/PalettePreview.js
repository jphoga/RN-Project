import React from 'react';
import { TouchableOpacity, Text, StyleSheet, FlatList, View } from 'react-native';


const PalettePreview = ({ onPress, palette }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <Text style={styles.preview}>{palette.paletteName}</Text>
            <FlatList
                style={styles.list}
                data={palette.colors.slice(0, 5)}
                keyExtractor={item => item.colorName}
                renderItem={({ item }) => (
                    <View style={[styles.color, { backgroundColor: item.hexCode }]} />
                )}
            />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    preview: {
        marginHorizontal: 10,
        marginVertical: 4,
        paddingHorizontal: 10,
        fontWeight: 'bold',
    },
    list: {
        marginLeft: 16,
        flexDirection: 'row',
        marginBottom: 30,
    },
    color: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.3,
        shadowRadius: 1,
        elevation: 2,
        height: 40,
        width: 40,
        marginRight: 10,
    },
})

export default PalettePreview;