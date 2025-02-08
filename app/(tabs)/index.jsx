import { View, Text, Button } from 'react-native'
import React from 'react'
import Header from '../../components/Header'
import EmptyState from '../../components/EmptyState'

const index = () => {
  return (
    <View style={{height:'100%',backgroundColor:'white',padding:25}}>
      <Header />
      <EmptyState/>
    </View>
  )
}

export default index