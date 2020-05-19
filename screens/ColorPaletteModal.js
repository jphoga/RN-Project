import React, { useState, useCallback } from 'react';
import { View, Text, StyleSheet, TextInput, FlatList, Switch, Alert } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const COLORS = [
    { colorName: 'AliceBlue', hexCode: '#F0F8FF' },
    { colorName: 'AntiqueWhite', hexCode: '#FAEBD7' },
    { colorName: 'Aqua', hexCode: '#00FFFF' },
];

const ColorPaletteModal = ({ navigation }) => {

    const [name, setName] = useState('');

    const handleSubmit = useCallback(() => {
        if (!name) {
            Alert.alert('Please enter a palette name.')
        } else {
            const newColorPalette = {
                name,
                colors: [],
            }
            navigation.navigate('Home', { newColorPalette });
        }
    }, [name])

    const [isEnabled, setIsEnabled] = useState(false);

    const toggleSwitch = () => setIsEnabled(previousState => !previousState);




    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                Name of your color palette
                </Text>
            <TextInput
                style={styles.input}
                value={name}
                onChangeText={setName}
            />
            <FlatList
                data={COLORS}
                keyExtractor={item => item.colorName}
                renderItem={({ item }) => (
                    <View style={styles.list}>
                        <Text style={styles.text}>{item.colorName}</Text>
                        <Switch
                            trackColor={{ false: "#767577", true: "#81b0ff" }}
                            thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitch}
                            value={isEnabled}
                        />
                    </View>
                )}
            />
            <TouchableOpacity style={styles.submit} onPress={handleSubmit}>
                <Text style={styles.submitText}>Submit</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    submitText: {
        color: 'white',
        paddingTop: 18,
        fontSize: 20,
    },
    submit: {
        borderRadius: 5,
        backgroundColor: '#53777A',
        height: 60,
        alignItems: 'center',
    },
    list: {
        padding: 8,
        flexDirection: 'row',
        borderBottomColor: 'black',
        borderBottomWidth: 2,
        justifyContent: "space-between",
        marginBottom: 10,
    },
    container: {
        padding: 5,
        backgroundColor: 'white',
        flex: 1,
    },
    text: {
        marginHorizontal: 16,
        marginVertical: 8,
        fontSize: 14,
    },
    input: {
        borderRadius: 5,
        marginHorizontal: 16,
        height: 40,
        borderWidth: 1,
        borderColor: 'grey',
        padding: 5,
        marginBottom: 20,
    },
})

export default ColorPaletteModal;