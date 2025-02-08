import { View, Text, StyleSheet,TextInput, TouchableOpacity} from 'react-native'
import React, { useState } from 'react'
import Colors from '../../constant/Colors'
import { useRouter,router } from 'expo-router'
import { auth } from '../../config/firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'

export default function signIn() {
    const router = useRouter();
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();

    const onSignInClick=()=>{
        if(!email || !password){
            Alert.alert('enter Email and Password');
            return;
        }
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            router.replace('(tabs)')
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            if(errorCode=='auth/invalid-credential'){
                Alert.alert('Invalid Email or Password')
            }
        });
    }
  return (
    <View style={{margin:20}}>
      <Text style={styles?.textHeader}>Let's Sign You In</Text>
      <Text style={styles?.subtext}>Welcome Back</Text>
      <Text style={styles?.subtext}>Medi Tracker is Waiting for you</Text>

      <View style={{marginTop:25}}>
        <Text>Email</Text>
        <TextInput placeholder='Email' style={styles?.TextInput} onChangeText={(value)=>setEmail(value)}/>
      </View>
      <View style={{marginTop:25}}>
        <Text>Password</Text>
        <TextInput placeholder='Password' style={styles?.TextInput} secureTextEntry={true} onChangeText={(value)=>setPassword(value)}/>
      </View>
      <TouchableOpacity style={styles?.button} onPress={onSignInClick}>
        <Text style={{color:'white',alignItems:'center',fontSize:15,textAlign:'center'}}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles?.buttonCreate} onPress={()=>router.push('login/signUp')}>
        <Text style={{color:Colors.PRIMARY,alignItems:'center',fontSize:15,textAlign:'center'}} >Create Account</Text>
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