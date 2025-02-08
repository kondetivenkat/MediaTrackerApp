import AsyncStorage from "@react-native-async-storage/async-storage"

export const setLocalStorgae=async(key,value)=>{
    await AsyncStorage.setItem(key,JSON.stringify(value));
}

export const getLocalStorage = async(key)=>{
    const value = await AsyncStorage.getItem(key);
    return JSON.parse(value);
}

export const removeLocalStorage = async()=>{
    await AsyncStorage.clear();
}