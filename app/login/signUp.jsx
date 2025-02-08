import { View, Text, StyleSheet,TextInput, TouchableOpacity, ToastAndroid, Alert} from 'react-native'
import React, { useState } from 'react'
import Colors from '../../constant/Colors'
import { useRouter,router } from 'expo-router'
import {auth} from '../../config/firebase.jsx'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { useRoute } from '@react-navigation/native'

export default function signUp() {
    
    const router = useRouter();
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();

     const onCreateAccount=()=>{
        if(!email || !password){
            ToastAndroid.show('please enter email and password',ToastAndroid.BOTTOM);
            Alert.alert('enter Email and Password');
            return;
        }
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            router.push('(tabs)')
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
            if(errorCode=='auth/email-already-in-use'){
                ToastAndroid.show('Email already Exists',ToastAndroid.BOTTOM);
                Alert.alert('Email already Exists');
            }
        });
     }
  return (
    <View style={{margin:40}}>
          <Text style={styles?.textHeader}>Create New Account</Text>
          <View style={{marginTop:25}}>
            <Text>Full Name</Text>
            <TextInput placeholder='Full Name' style={styles?.TextInput}/>
          </View>
          <View style={{marginTop:25}}>
            <Text>Email</Text>
            <TextInput placeholder='Email' style={styles?.TextInput} onChangeText={(value)=>setEmail(value)}/>
          </View>
          <View style={{marginTop:25}}>
            <Text>Password</Text>
            <TextInput placeholder='Password' style={styles?.TextInput} secureTextEntry={true} onChangeText={(value)=>setPassword(value)}/>
          </View>
          <TouchableOpacity style={styles?.button}>
            <Text style={{color:'white',alignItems:'center',fontSize:15,textAlign:'center'}} onPress={onCreateAccount}>Create Account</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles?.buttonCreate} onPress={()=>router.push('login/signIn')}>
            <Text style={{color:Colors.PRIMARY,alignItems:'center',fontSize:15,textAlign:'center'}} >Already account? Sign In</Text>
          </TouchableOpacity>
        </View>
  )
}
const styles = StyleSheet.create({
    textHeader:{
        color:'black',
        fontSize:30,
        fontWeight:'bold'
    },
    subtext:{
        color:Colors.GRAY,
        fontSize:30,
        marginTop:5,
        fontWeight:'bold'
    },
    TextInput:{
        padding:10,
        backgroundColor:'white',
        borderRadius:10,
        fontSize:17,
        borderWidth:1,
        marginTop:5
    },
    button:{
        backgroundColor:Colors.PRIMARY,
        borderRadius:10,
        color:'white',
        padding:15,
        marginTop:30
    },
    buttonCreate:{
        borderRadius:10,
        color:Colors.PRIMARY,
        padding:15,
        marginTop:30,
        backgroundColor:'white',
        borderColor:Colors.PRIMARY,
        borderWidth:1
    }
})