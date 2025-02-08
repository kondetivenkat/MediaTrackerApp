import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import ConstantString from '../constant/ConstantString'
import Colors from '../constant/Colors'
import { useRouter } from 'expo-router'

export default function EmptyState() {
    const router = useRouter();
  return (
    <View style={{marginTop:90,display:'flex',justifyContent:'center',alignItems:'center'}}>
      <Image style={{height:140,width:140}} source={require('../assets/images/medicine.png')}/>
      <Text style={{fontSize:30,fontWeight:'bold',marginTop:40}}>{ConstantString.NoMedication}</Text>
      <Text style={{textAlign:'center',color:Colors.DARK_GRAY,marginTop:20,fontSize:15}}>{ConstantString.MedicationSubText}</Text>

      <TouchableOpacity style={{borderRadius:10,backgroundColor:Colors.PRIMARY,width:'100%',marginTop:30,padding:13}} onPress={()=>router.push('./add-new-medication')}>
        <Text style={{textAlign:'center',color:'white',fontSize:16}}>{ConstantString.AddNewMediciationBtn}</Text>
      </TouchableOpacity>
    </View>
  )
}