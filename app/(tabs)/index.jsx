import { View, Text } from 'react-native'
import React from 'react'
import { Redirect } from 'expo-router'

const index = () => {
  return (
    <View>
      <Text>index</Text>
      <Redirect href={'login'} />
    </View>
  )
}

export default index