import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Ionicons from '@expo/vector-icons/AntDesign';
import { useFonts } from 'expo-font'; // Import the hook

const WelcomeText = () => {
    useFonts({
        'Urbanist-Regular': require('../assets/fonts/Urbanist/Urbanist-Regular.ttf'),
        'Urbanist-Bold': require('../assets/fonts/Urbanist/Urbanist-Bold.ttf'),
        'Urbanist-Black': require('../assets/fonts/Urbanist/Urbanist-Black.ttf'),
    });
    return (
        <View style={styles.container}>
            <Ionicons name="github" size={32} color="#B4B9D9" />
            <Text style={styles.text}>Bienvenido a mi App</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3037BF',
        alignItems: 'center',
        justifyContent: 'center',
        maxHeight: 100,
        minWidth: 250,
        borderRadius: 20,
    },
    text: {
        color: '#B4B9D9',
        fontSize: 24,
        fontFamily: "Urbanist-Black"
    },
});

export default WelcomeText;
