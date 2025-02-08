import { View, Text, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { getLocalStorage } from '../service/Storage'
import Ionicons from '@expo/vector-icons/Ionicons';
import Colors from '../constant/Colors';

export default function Header() {

    const [user,setUser] = useState();
    useEffect(()=>{
        getUserDetail()
    },[])
    const getUserDetail =async()=>{
        const data=await getLocalStorage('userDetails');
        setUser(data)
    }
  return (
    <View style={{marginTop:20}}>
    <View style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-between',width:'100%'}}>
      <View style={{display:'flex',flexDirection:'row',alignItems:'center',gap:10}}>
            <Image source={require('../assets/images/smiley.png')} style={{height:40,width:40}} />
            <Text style={{fontSize:26,fontWeight:'bold'}}>Hello {user?.displayName} 👋</Text>
        </View>
        <Ionicons name="settings" size={26} color={Colors.DARK_GRAY} />
      </View>
    </View>
  )
}