import { View, Text } from 'react-native'
import React from 'react'
import AddMedicationHeader from '../../components/AddMedicationHeader'
import AddMedicationForm from '../../components/AddMedicationForm'

export default function index() {
  return (
    <View>
      <AddMedicationHeader />
      <AddMedicationForm />
    </View>
  )
}