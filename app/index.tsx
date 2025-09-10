import { View, StyleSheet } from 'react-native'
import React from 'react'
import WelcomeText from '@/components/WelcomeText'

const index = () => {
  return (
    <View style={styles.container}>
      <WelcomeText />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#333640"
},
});

export default index