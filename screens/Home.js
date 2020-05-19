import React, { useState, useCallback, useEffect } from 'react';
import { View, TouchableOpacity, Text, FlatList, StyleSheet } from 'react-native';
import PalettePreview from '../components/PalettePreview';


const Home = ({ navigation, route }) => {
    const newColorPalette = route.params ? route.params.newColorPalette : undefined;

    const [colors, setColors] = useState([]);
    const [isRefreshing, setIsRefreshing] = useState(false);

    const fetchColors = useCallback(async () => {
        const result = await fetch('https://color-palette-api.kadikraman.now.sh/palettes');
        if (result.ok) {
            const facts = await result.json();
            setColors(facts);
        }
    });

    useEffect(() => {
        fetchColors();
    }, []);

    const handleRefresh = useCallback(async () => {
        console.log("Refreshing started...");
        setIsRefreshing(true);
        await fetchColors();
        setTimeout(() => {
            setIsRefreshing(false);
        }, 2000);
    }, [])

    return (
        <View style={styles.background}>
            <TouchableOpacity style={styles.smallButton} onPress={() => { navigation.push('Counter') }}>
                <Text style={styles.smallText}>Test out the new Counter!</Text>
            </TouchableOpacity>
            <FlatList
                data={colors}
                keyExtractor={item => item.paletteName}
                renderItem={({ item }) => (
                    <PalettePreview
                        onPress={() => { navigation.push('ColorPalette', item) }}
                        palette={item}>
                    </PalettePreview>
                )}
                refreshing={isRefreshing}
                onRefresh={handleRefresh}
                ListHeaderComponent={
                    <TouchableOpacity onPress={() => { navigation.push('ColorPaletteModal') }}>
                        <Text style={styles.modalButton} >
                            Add a color palette
                        </Text>
                    </TouchableOpacity>
                }
            />

        </View>
    );
};

const styles = StyleSheet.create({
    modalButton: {
        color: "#53777A",
        fontSize: 24,
        margin: 16,
        fontWeight: 'bold',

    },
    smallButton: {
        width: 100,
        marginVertical: 16,
        marginHorizontal: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.3,
        shadowRadius: 1,
        elevation: 2,
        alignItems: 'center',

    },
    smallText: {
        fontStyle: 'italic',
    },
    background: {
        backgroundColor: 'white',
        flex: 1
    },
    text: {
        fontWeight: 'bold',
        margin: 18,
        fontSize: 24,

    }
})

export default Home;