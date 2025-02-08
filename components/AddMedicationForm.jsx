import { View, Text, TextInput, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import Colors from '../constant/Colors';
import {TypeList} from '../constant/Options'

export default function AddMedicationForm() {

    const [formdata,setFormData] = useState();

    const onHandleChange=(field,value)=>{
        setFormData(prev=>({
            ...prev,
            [field]:value
        }))
    }
  return (
    <View style={{padding:25}}>
      <Text style={styles.header}>Add New Medication</Text>

      <View style={styles.inputGroup}>
        <Ionicons style={styles.icon} name="medkit-outline" size={24} color="black" />
        <TextInput placeholder='Medicine Name' 
        style={styles.text} 
        onChangeText={(value)=>onHandleChange('name',value)}/>
      </View>
      {/* flat list */}

      <FlatList 
        data={TypeList}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item,ind})=>(
            <TouchableOpacity 
                style={[styles.inputGroup,{marginRight:10},
                {backgroundColor:item.name==formdata?.type?.name?Colors.PRIMARY:'white'}]} 
                onPress={()=>onHandleChange('type',item)}> 

                <Text style={[styles.typeText,{color:item.name==formdata?.type?.name?'white':'black'}]}>{item?.name}</Text>
            </TouchableOpacity>
            )}
        style={{marginTop:7}}
      />

    <View style={styles.inputGroup}>
        <Ionicons style={styles.icon} name="eyedrop-outline" size={24} color="black" />
        <TextInput placeholder='Dose Ex: 5ml' 
        style={styles.text} 
        onChangeText={(value)=>onHandleChange('dose',value)}/>
      </View>
    </View>
  )
}
const styles= StyleSheet.create({
    header:{
        fontSize:25,
        textAlign:'center',
        fontWeight:'bold',
    },
    inputGroup:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        padding:8,
        borderRadius:8,
        backgroundColor:Colors.LIGHT_GRAY_BORDER,
        marginTop:10,
        backgroundColor:'white'
    },
    text:{
        flex:1,
        marginLeft:10,
        fontSize:16
    },
    icon:{
        color:Colors.PRIMARY,
        borderRightWidth:1,
        paddingRight:10
    },
    typeText:{
        fontSize:16
    }
})