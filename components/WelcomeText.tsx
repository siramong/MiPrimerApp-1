import Ionicons from '@expo/vector-icons/AntDesign';
import { useFonts } from 'expo-font';
import React from 'react';
import "@/global.css"
import { Text, View } from 'react-native';

const WelcomeText = () => {
    useFonts({
        'Urbanist-Regular': require('../assets/fonts/Urbanist/Urbanist-Regular.ttf'),
        'Urbanist-Bold': require('../assets/fonts/Urbanist/Urbanist-Bold.ttf'),
        'Urbanist-Black': require('../assets/fonts/Urbanist/Urbanist-Black.ttf'),
    });
    return (
        <View className='flex bg-indigo-500 items-center justify-center max-w-100 min-w-250 rounded-lg p-3'>
            <Ionicons name="github" size={32} color="#B4B9D9" />
            <Text className='text-indigo-800 text-24 font-Urbanist-Regular'>Bienvenido a mi App</Text>
        </View>
    );
};

export default WelcomeText;
