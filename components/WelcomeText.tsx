import { setBackgroundColorAsync } from 'expo-system-ui';
import React, { useState } from 'react';
import { Pressable, Text, View, Button } from 'react-native';

const WelcomeText = () => {
    const [cont, setCont] = useState(0);

    function incrementar(x: number) {
        return x + 1;
    }

    return (
        <View>
            <Pressable onPress={() => setCont(incrementar(cont))}>
                <Text>Aumentar: {cont}</Text>
            </Pressable>
        </View>
    );
};

export default WelcomeText;
