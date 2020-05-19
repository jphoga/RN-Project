import React, { useState, useCallback } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';

const Counter = () => {

    const [count, setCount] = useState(0);

    const handleIncrement = useCallback(() => {
        setCount(current => current + 1);
    }, []);

    const handleDecrement = useCallback(() => {
        setCount(current => current - 1);
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.counter}>
                <Text style={styles.counterText}>
                    Counter:　{count}
                </Text>
            </View>
            <View style={styles.innerContainer}>
                <TouchableOpacity style={styles.button}
                    onPress={handleIncrement}>
                    <Text style={styles.text}>
                        Increment
                </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}
                    onPress={handleDecrement}>
                    <Text style={styles.text}>
                        Decrement
                </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({

    container: {
        backgroundColor: 'white',
        flex: 1,
    },
    innerContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        margin: 30,
    },
    counter: {
        alignItems: 'center',
        margin: 30,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.3,
        shadowRadius: 1,
        elevation: 2,
    },
    button: {
        backgroundColor: '#fdf6e3',
        margin: 40,
        padding: 30,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.3,
        shadowRadius: 1,
        elevation: 2,
    },
    counterText: {
        fontSize: 24,
    },
    text: {
        fontSize: 16,
    }





});

export default Counter;