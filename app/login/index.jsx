import { View, Text,Image, StyleSheet, TouchableOpacity} from 'react-native'
import React from 'react'
import Colors from '../../constant/Colors'
import { router } from 'expo-router'
export default function LoginScreen() {
  return (
    <View>
      <View style={{display:'flex',alignItems:'center',marginTop:40}}>
        <Image source={require('../../assets/images/login.png')} 
         style={styles?.image}
        />
      </View>
      <View style={{
        padding:25,
        backgroundColor:Colors.PRIMARY,
        height:'100%'
       }}>
        <Text 
        style={{color:'white',fontSize:30,fontWeight:'bold',textAlign:'center'}}> Stay on Track, Stay Healthy !</Text>
        <Text style={{color:'white',fontSize:15,marginTop:15}}>Track your meds,Take control of your health Stay safe and Stay Confident</Text>
        <TouchableOpacity style={styles?.button} onPress={()=>router.push('login/signIn')}>
            <Text style={{color:Colors.PRIMARY,alignItems:'center',fontSize:15}}>Continue</Text>
        </TouchableOpacity>
        <Text style={{color:'white',marginTop:3}}>Note:By Clicking Continue button you will agree terms and conditions</Text>
      </View>
    </View>
  )
}
const styles =StyleSheet.create({
    image:{
        width:210,
        height:450,
        borderRadius:20
    },
    button:{
        marginTop: 30, 
        paddingVertical: 15, 
        paddingHorizontal: 40,
        borderRadius: 50,
        backgroundColor: 'white',
        alignSelf: 'center',
    }
})