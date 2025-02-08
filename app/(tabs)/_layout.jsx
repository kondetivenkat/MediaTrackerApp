import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Tabs, useRouter } from 'expo-router'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../config/firebase';
import { getLocalStorage } from '../../service/Storage';

export default function TabLayout() {

  const router = useRouter();
  useEffect(()=>{
    getUserInfo();
  },[])
  const getUserInfo= async()=>{
    const userInfo= await getLocalStorage('userDetails');
    if(!userInfo){
      router.replace('/login')
    }
  }

  return (
    <Tabs screenOptions={{headerShown:false}}>
        <Tabs.Screen name="index" 
         options={{
          tabBarLabel:'Home',
          tabBarIcon:({color,size})=>(
            <FontAwesome name='home' color={color} size={size}/>
            )
         }}
         />
        <Tabs.Screen name="Addnew"
         options={{
          tabBarLabel:'Add New',
          tabBarIcon:({color,size})=>(
            <FontAwesome name="plus-square" size={24} color={color} />
          )
         }}
         />
        <Tabs.Screen name="Profile"
        options={{
          tabBarLabel:'Profile',
          tabBarIcon:({color,size})=>(
            <FontAwesome name='user' color={color} size={size}/>
          )
         }}
         />
    </Tabs>
  )
}