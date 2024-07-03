import { View, Text } from 'react-native'
import React from 'react'
import {Tabs} from 'expo-router'
import { FontAwesome, Ionicons, MaterialIcons } from '@expo/vector-icons'
import colors from '@/constants/colors'
const Layout = () => {

  return (    

    <Tabs screenOptions={{
      tabBarStyle:{
        backgroundColor:colors.bgColor,
        borderTopWidth:0,
        padding:0,
        paddingBottom:10
      },
      tabBarShowLabel:false,
      tabBarActiveTintColor:colors.black,
      tabBarInactiveTintColor:'#999'
    }}>
      <Tabs.Screen name='index' options={{
        tabBarIcon:({color})=>(
        <Ionicons name = "compass" size={28} color={color}/>
      )}}/>

       <Tabs.Screen name='categories' options={{
        tabBarIcon:({color})=>(
        <MaterialIcons name = "space-dashboard" size={28} color={color}/>
      )}}/>


      <Tabs.Screen name='search' options={{
        tabBarIcon:({color})=>(
         <View 
            style={{
              backgroundColor:colors.primaryColor,
              paddingHorizontal:16,
              paddingVertical:12,
              borderRadius:10,
              height:50,
            }}>
            <MaterialIcons name ="search" size={28} color={colors.white}/>
         </View>
      )}}/>

       <Tabs.Screen name='bookmarks' options={{
        tabBarIcon:({color})=>(
        <Ionicons name = "bookmark" size={28} color={color}/>
      )}}/>

       <Tabs.Screen name='profile' options={{
        tabBarIcon:({color})=>(
        <FontAwesome name = "user" size={28} color={color}/>
      )}}/>

    </Tabs>
  )}
export default Layout