import WelcomeText from '@/components/WelcomeText'
import "@/global.css"
import React from 'react'
import { View } from 'react-native'

const index = () => {
  return (
    <View className="bg-slate-900 flex justify-center items-center h-screen w-screen">
      <WelcomeText />
    </View>
  )
}

export default index